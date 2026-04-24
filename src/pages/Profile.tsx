import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, Calendar, User, LogOut, MapPin, CheckCircle, Clock, AlertCircle, Package, ArrowLeft } from 'lucide-react';
import { useQuery } from '@apollo/client/react';
import { useAuth } from '../context/AuthContext';
import { GET_USER_PURCHASES } from '../graphql/queries';

interface Purchase {
  id: number;
  qty: number;
  size: string;
  status: 'PENDING' | 'COMPLETED' | 'FAILED';
  createdAt: string;
  razorpayPaymentId: string | null;
  merch: { id: number; name: string; price: number };
}

export default function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const { data, loading: purchasesLoading } = useQuery<{ getUserPurchases: Purchase[] }>(
    GET_USER_PURCHASES,
    { skip: !user }
  );

  if (!user) {
    navigate('/login');
    return null;
  }

  const purchases = data?.getUserPurchases ?? [];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const statusIcon = (status: string) => {
    if (status === 'COMPLETED') return <CheckCircle size={18} className="text-green-600" />;
    if (status === 'FAILED') return <AlertCircle size={18} className="text-red-600" />;
    return <Clock size={18} className="text-yellow-600" />;
  };

  const statusBg = (status: string) => {
    if (status === 'COMPLETED') return 'bg-green-50 border-green-200';
    if (status === 'FAILED') return 'bg-red-50 border-red-200';
    return 'bg-yellow-50 border-yellow-200';
  };

  const statusText = (status: string) => {
    if (status === 'COMPLETED') return 'text-green-700';
    if (status === 'FAILED') return 'text-red-700';
    return 'text-yellow-700';
  };

  const totalSpent = purchases
    .filter((p) => p.status === 'COMPLETED')
    .reduce((sum, p) => sum + p.merch.price * p.qty, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFBF7] to-orange-50 pt-20 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6">
         <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 bg-stone-100 hover:bg-stone-200 text-[#432818] px-4 sm:ml-10 m-2 py-2 rounded-lg font-semibold transition-all text-sm sm:text-base border border-stone-200"
      >
        <ArrowLeft size={18} /> Back
      </button>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
       
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 mb-8 sm:mb-12"
        >
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-[#432818]">My Profile</h1>
            <p className="text-stone-600 text-sm sm:text-base mt-1">Welcome back, {user.name}!</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all text-sm sm:text-base"
          >
            <LogOut size={18} /> Logout
          </button>
        </motion.div>

        {/* Profile Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-orange-100 overflow-hidden mb-8 sm:mb-12"
        >
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 px-6 sm:px-8 py-6 sm:py-8">
            <div className="flex items-center gap-4">
              <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-white/20 flex items-center justify-center">
                <User size={24} className="text-white" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-white">{user.name}</h2>
                <p className="text-orange-50 text-sm sm:text-base">Member ID: {user.id}</p>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-bold text-[#432818] mb-4 sm:mb-6">Personal Information</h3>
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
                className="flex items-start gap-4 p-4 sm:p-5 bg-orange-50 rounded-lg sm:rounded-xl border border-orange-100"
              >
                <Mail className="text-orange-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-xs sm:text-sm text-stone-600 font-semibold uppercase tracking-wider">Email</p>
                  <p className="text-sm sm:text-base font-medium text-[#432818] break-all">{user.email}</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 }}
                className="flex items-start gap-4 p-4 sm:p-5 bg-orange-50 rounded-lg sm:rounded-xl border border-orange-100"
              >
                <Phone className="text-orange-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-xs sm:text-sm text-stone-600 font-semibold uppercase tracking-wider">Mobile</p>
                  <p className="text-sm sm:text-base font-medium text-[#432818]">{user.mobileNo}</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
                className="flex items-start gap-4 p-4 sm:p-5 bg-orange-50 rounded-lg sm:rounded-xl border border-orange-100"
              >
                <Calendar className="text-orange-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-xs sm:text-sm text-stone-600 font-semibold uppercase tracking-wider">Campaign ID</p>
                  <p className="text-sm sm:text-base font-medium text-[#432818]">{user.campaignId ?? '—'}</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }}
                className="flex items-start gap-4 p-4 sm:p-5 bg-orange-50 rounded-lg sm:rounded-xl border border-orange-100"
              >
                <MapPin className="text-orange-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-xs sm:text-sm text-stone-600 font-semibold uppercase tracking-wider">Age</p>
                  <p className="text-sm sm:text-base font-medium text-[#432818]">{user.age} years</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Purchase History */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-orange-100 overflow-hidden"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 sm:px-8 py-4 sm:py-6">
            <h2 className="text-lg sm:text-xl font-black text-white">Purchase History</h2>
          </div>

          <div className="p-6 sm:p-8">
            {purchasesLoading ? (
              <div className="flex justify-center py-10">
                <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
              </div>
            ) : purchases.length === 0 ? (
              <div className="text-center py-10">
                <Package size={48} className="mx-auto text-stone-300 mb-3" />
                <p className="text-stone-500">No purchases yet</p>
              </div>
            ) : (
              <div className="space-y-3 sm:space-y-4">
                {purchases.map((purchase, index) => (
                  <motion.div
                    key={purchase.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 p-4 sm:p-5 rounded-lg sm:rounded-xl border ${statusBg(purchase.status)}`}
                  >
                    <div className="flex items-start gap-3 sm:gap-4 flex-1">
                      <div className="mt-0.5">{statusIcon(purchase.status)}</div>
                      <div className="flex-1">
                        <p className="font-semibold text-sm sm:text-base text-stone-800">{purchase.merch.name}</p>
                        <p className="text-xs sm:text-sm text-stone-500 mt-1">
                          Size: {purchase.size} · Qty: {purchase.qty}
                        </p>
                        <p className="text-xs sm:text-sm text-stone-500">
                          {new Date(purchase.createdAt).toLocaleDateString('en-IN', {
                            year: 'numeric', month: 'short', day: 'numeric',
                          })}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between sm:flex-col sm:items-end gap-3">
                      <p className="font-black text-base sm:text-lg text-orange-600">
                        ₹{purchase.merch.price * purchase.qty}
                      </p>
                      <span className={`text-xs sm:text-sm font-bold uppercase tracking-wider px-2.5 sm:px-3 py-1 rounded-full ${statusText(purchase.status)}`}>
                        {purchase.status}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {purchases.length > 0 && (
              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-stone-200">
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  <div className="text-center">
                    <p className="text-xs sm:text-sm text-stone-600 font-semibold uppercase">Total Orders</p>
                    <p className="text-xl sm:text-2xl font-black text-[#432818] mt-1">{purchases.length}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs sm:text-sm text-stone-600 font-semibold uppercase">Total Spent</p>
                    <p className="text-xl sm:text-2xl font-black text-orange-600 mt-1">₹{totalSpent}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs sm:text-sm text-stone-600 font-semibold uppercase">Completed</p>
                    <p className="text-xl sm:text-2xl font-black text-green-600 mt-1">
                      {purchases.filter((p) => p.status === 'COMPLETED').length}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
