import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, Phone, Calendar, User, ArrowRight, CheckCircle } from 'lucide-react';
import { useMutation } from '@apollo/client/react';
import { useAuth } from '../context/AuthContext';
import { SEND_VERIFICATION_OTP, VERIFY_OTP, SIGN_UP_USER, CREATE_REGISTRATION_ORDER, VERIFY_REGISTRATION_PAYMENT } from '../graphql/mutations';
import { storeAuthData } from '../utils/authUtils';
import { useRazorpay } from '../hooks/useRazorpay';

export default function Signup() {
  const [step, setStep] = useState<'email' | 'otp' | 'details'>('email');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [name, setName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [verificationToken, setVerificationToken] = useState('');
  const navigate = useNavigate();
  const { signup } = useAuth();

  // GraphQL Mutations
  const [sendOtpMutation, { loading: otpLoading }] = useMutation<{ sendVerificationOtp: boolean }>(SEND_VERIFICATION_OTP);
  const [verifyOtpMutation, { loading: verifyLoading }] = useMutation<{ verifyOtp: string }>(VERIFY_OTP);
  const [signUpMutation, { loading: signupLoading }] = useMutation<{
    signUpUser: { token: string; role: string; user: { id: number; email: string; name: string; age: number; mobileNo: string; role: string; campaignId: string } }
  }>(SIGN_UP_USER);
  const [createRegistrationOrder] = useMutation<{ createRegistrationOrder: string }>(CREATE_REGISTRATION_ORDER);
  const [verifyRegistrationPayment] = useMutation(VERIFY_REGISTRATION_PAYMENT);
  const { initiatePayment, loading: paymentLoading, error: paymentError } = useRazorpay();

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const { data } = await sendOtpMutation({
        variables: { email },
      });

      if (data?.sendVerificationOtp) {
        setStep('otp');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send OTP');
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const { data } = await verifyOtpMutation({
        variables: { email, otp },
      });

      if (data?.verifyOtp) {
        setVerificationToken(data.verifyOtp);
        setStep('details');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid OTP. Please try again.');
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      if (password !== confirmPassword) throw new Error('Passwords do not match');
      if (password.length < 6) throw new Error('Password must be at least 6 characters');

      const { data } = await signUpMutation({
        variables: {
          data: { email, name, mobileNo, age: parseInt(age), password },
          verificationToken,
        },
      });

      if (data?.signUpUser?.token) {
        const { token, role, user } = data.signUpUser;
        storeAuthData(token, role, user.email, user.id, user.name);
        await signup({ token, user, role });

        // Admin skips registration payment
        if (role !== 'ADMIN') {
          const { data: orderData } = await createRegistrationOrder({ variables: { amount: 500 } });
          if (orderData?.createRegistrationOrder) {
            await initiatePayment({
              orderId: orderData.createRegistrationOrder,
              amount: 500,
              description: 'No Smoking Campaign — Registration Fee',
              prefill: { name: user.name, email: user.email, contact: mobileNo },
              onSuccess: async (response) => {
                await verifyRegistrationPayment({
                  variables: {
                    razorpayOrderId: response.razorpay_order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpaySignature: response.razorpay_signature,
                  },
                });
              },
            });
          }
        }

        navigate(role === 'ADMIN' ? '/admin' : '/profile');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Signup failed');
    }
  };

  const calculateAge = (birthDate: string) => {
    if (!birthDate) return;
    const today = new Date();
    const birth = new Date(birthDate);
    let calculatedAge = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      calculatedAge--;
    }
    setAge(calculatedAge.toString());
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFBF7] to-orange-50 flex items-center justify-center px-4 sm:px-6 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        {/* Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-orange-100 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 px-6 sm:px-8 py-8 sm:py-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <img src="/favicon.png" alt="Shaastra" className="h-8 sm:h-14 w-auto" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white text-center">Join Us</h1>
            <p className="text-orange-50 text-center text-sm sm:text-base mt-2">
              {step === 'email' && 'Enter your email to get started'}
              {step === 'otp' && 'Verify your email with OTP'}
              {step === 'details' && 'Complete your profile'}
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={step === 'email' ? handleSendOtp : step === 'otp' ? handleVerifyOtp : handleSignup}
            className="p-6 sm:p-8"
          >
            {(error || paymentError) && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-4 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm"
              >
                {error || paymentError}
              </motion.div>
            )}

            {/* Step 1: Email */}
            {step === 'email' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className="mb-6 sm:mb-8">
                  <label className="block text-sm font-semibold text-stone-700 mb-2">
                    Email Address
                  </label>
                  <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-stone-50 rounded-lg sm:rounded-xl border border-stone-200 focus-within:border-orange-400 focus-within:bg-white transition-colors">
                    <Mail className="text-orange-600 flex-shrink-0" size={20} />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="bg-transparent outline-none w-full text-sm sm:text-base text-stone-800 placeholder:text-stone-400"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={otpLoading || !email}
                  className="w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold hover:from-orange-700 hover:to-orange-800 transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  {otpLoading ? 'Sending OTP...' : 'Send OTP'}
                  {!otpLoading && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
                </button>
              </motion.div>
            )}

            {/* Step 2: OTP Verification */}
            {step === 'otp' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className="mb-6 sm:mb-8">
                  <label className="block text-sm font-semibold text-stone-700 mb-2">
                    Enter OTP
                  </label>
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter 6-digit OTP"
                    maxLength={6}
                    required
                    className="w-full p-3 sm:p-4 bg-stone-50 rounded-lg sm:rounded-xl border border-stone-200 focus:border-orange-400 focus:bg-white outline-none text-center text-2xl sm:text-3xl font-black tracking-widest letter-spacing-4 transition-colors text-stone-800"
                  />
                  <p className="text-xs sm:text-sm text-stone-500 mt-2 text-center">
                    Check your email for the OTP code
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={verifyLoading || otp.length !== 6}
                  className="w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold hover:from-orange-700 hover:to-orange-800 transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  Verify OTP
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  type="button"
                  onClick={() => setStep('email')}
                  className="w-full mt-3 text-orange-600 font-semibold hover:text-orange-700 transition-colors text-sm sm:text-base"
                >
                  ← Back
                </button>
              </motion.div>
            )}

            {/* Step 3: Details */}
            {step === 'details' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">
                    Full Name
                  </label>
                  <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-stone-50 rounded-lg sm:rounded-xl border border-stone-200 focus-within:border-orange-400 focus-within:bg-white transition-colors">
                    <User className="text-orange-600 flex-shrink-0" size={20} />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      required
                      className="bg-transparent outline-none w-full text-sm sm:text-base text-stone-800 placeholder:text-stone-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">
                    Mobile Number
                  </label>
                  <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-stone-50 rounded-lg sm:rounded-xl border border-stone-200 focus-within:border-orange-400 focus-within:bg-white transition-colors">
                    <Phone className="text-orange-600 flex-shrink-0" size={20} />
                    <input
                      type="tel"
                      value={mobileNo}
                      onChange={(e) => setMobileNo(e.target.value)}
                      placeholder="10-digit mobile number"
                      required
                      className="bg-transparent outline-none w-full text-sm sm:text-base text-stone-800 placeholder:text-stone-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">
                    Date of Birth
                  </label>
                  <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-stone-50 rounded-lg sm:rounded-xl border border-stone-200 focus-within:border-orange-400 focus-within:bg-white transition-colors">
                    <Calendar className="text-orange-600 flex-shrink-0" size={20} />
                    <input
                      type="date"
                      value={dob}
                      onChange={(e) => {
                        setDob(e.target.value);
                        calculateAge(e.target.value);
                      }}
                      required
                      className="bg-transparent outline-none w-full text-sm sm:text-base text-stone-800"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-2">
                      Age
                    </label>
                    <input
                      type="number"
                      value={age}
                      readOnly
                      placeholder="Auto-calculated"
                      className="w-full p-3 sm:p-4 bg-stone-100 rounded-lg sm:rounded-xl border border-stone-200 text-sm sm:text-base text-stone-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">
                    Password
                  </label>
                  <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-stone-50 rounded-lg sm:rounded-xl border border-stone-200 focus-within:border-orange-400 focus-within:bg-white transition-colors">
                    <Lock className="text-orange-600 flex-shrink-0" size={20} />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Min 6 characters"
                      required
                      className="bg-transparent outline-none w-full text-sm sm:text-base text-stone-800 placeholder:text-stone-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">
                    Confirm Password
                  </label>
                  <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-stone-50 rounded-lg sm:rounded-xl border border-stone-200 focus-within:border-orange-400 focus-within:bg-white transition-colors">
                    <Lock className="text-orange-600 flex-shrink-0" size={20} />
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm your password"
                      required
                      className="bg-transparent outline-none w-full text-sm sm:text-base text-stone-800 placeholder:text-stone-400"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={signupLoading || paymentLoading || !name || !mobileNo || !dob || !password || !confirmPassword}
                  className="w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold hover:from-orange-700 hover:to-orange-800 transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  {signupLoading ? 'Creating Account...' : paymentLoading ? 'Opening Payment...' : 'Create Account & Pay ₹500'}
                  {!signupLoading && !paymentLoading && <CheckCircle size={18} />}
                </button>

                <button
                  type="button"
                  onClick={() => setStep('otp')}
                  className="w-full text-orange-600 font-semibold hover:text-orange-700 transition-colors text-sm sm:text-base"
                >
                  ← Back
                </button>
              </motion.div>
            )}

            {/* Login Link */}
            {step === 'email' && (
              <div className="mt-6 sm:mt-8 text-center">
                <p className="text-stone-600 text-sm sm:text-base">
                  Already have an account?{' '}
                  <Link to="/login" className="text-orange-600 font-semibold hover:text-orange-700 transition-colors">
                    Login here
                  </Link>
                </p>
              </div>
            )}
          </form>
        </div>

        {/* Back to Home */}
        {step === 'email' && (
          <div className="text-center mt-6 sm:mt-8">
            <Link to="/" className="text-orange-600 font-semibold hover:text-orange-700 transition-colors text-sm sm:text-base">
              ← Back to Home
            </Link>
          </div>
        )}
      </motion.div>
    </div>
  );
}
