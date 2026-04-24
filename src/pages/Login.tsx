import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const userData = await login(email, password);
      navigate(userData.role === 'ADMIN' ? '/admin' : '/profile');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setLoading(false);
    }
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
            <h1 className="text-2xl sm:text-3xl font-black text-white text-center">Welcome Back</h1>
            <p className="text-orange-50 text-center text-sm sm:text-base mt-2">
              Login to your account
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 sm:p-8">
            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-4 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm"
              >
                {error}
              </motion.div>
            )}

            {/* Email Input */}
            <div className="mb-5 sm:mb-6">
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

            {/* Password Input */}
            <div className="mb-6 sm:mb-8">
              <label className="block text-sm font-semibold text-stone-700 mb-2">
                Password
              </label>
              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-stone-50 rounded-lg sm:rounded-xl border border-stone-200 focus-within:border-orange-400 focus-within:bg-white transition-colors">
                <Lock className="text-orange-600 flex-shrink-0" size={20} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="bg-transparent outline-none w-full text-sm sm:text-base text-stone-800 placeholder:text-stone-400"
                />
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold hover:from-orange-700 hover:to-orange-800 transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
            >
              {loading ? 'Logging in...' : 'Login'}
              {!loading && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
            </button>

            {/* Signup Link */}
            <div className="mt-6 sm:mt-8 text-center">
              <p className="text-stone-600 text-sm sm:text-base">
                Don't have an account?{' '}
                <Link to="/signup" className="text-orange-600 font-semibold hover:text-orange-700 transition-colors">
                  Sign up here
                </Link>
              </p>
            </div>

            {/* Demo Credentials */}
            <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-orange-50 rounded-lg border border-orange-200">
              <p className="text-xs sm:text-sm font-semibold text-orange-900 mb-2">Demo Account:</p>
              <p className="text-xs text-orange-700">Email: <span className="font-mono">demo@test.com</span></p>
              <p className="text-xs text-orange-700">Password: <span className="font-mono">demo123</span></p>
            </div>
          </form>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6 sm:mt-8">
          <Link to="/" className="text-orange-600 font-semibold hover:text-orange-700 transition-colors text-sm sm:text-base">
            ← Back to Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
