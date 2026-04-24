import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useQuery, useMutation } from '@apollo/client/react';
import { Users, ShoppingBag, CheckCircle, Clock, AlertCircle, Package, LogOut } from 'lucide-react';
import { GET_ALL_USER_PURCHASES } from '../../graphql/queries';
import { UPDATE_PURCHASE_PAYMENT_STATUS } from '../../graphql/mutations';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

type OrderStatus = 'PENDING' | 'COMPLETED' | 'FAILED';

interface Purchase {
  id: number;
  qty: number;
  size: string;
  status: OrderStatus;
  createdAt: string;
  razorpayOrderId: string | null;
  razorpayPaymentId: string | null;
  campaignId: string | null;
  merch: { id: number; name: string; price: number };
  user: { id: number; email: string; name: string; campaignId: string | null };
}

const STATUS_OPTIONS: OrderStatus[] = ['PENDING', 'COMPLETED', 'FAILED'];

function StatusBadge({ status }: { status: OrderStatus }) {
  if (status === 'COMPLETED') return (
    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700">
      <CheckCircle size={12} /> COMPLETED
    </span>
  );
  if (status === 'FAILED') return (
    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-red-100 text-red-700">
      <AlertCircle size={12} /> FAILED
    </span>
  );
  return (
    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-yellow-100 text-yellow-700">
      <Clock size={12} /> PENDING
    </span>
  );
}

function OrderRow({ purchase }: { purchase: Purchase }) {
  const [updateStatus, { loading }] = useMutation<
    { updatePurchasePaymentStatus: { id: number; status: OrderStatus } },
    { purchaseId: number; status: OrderStatus }
  >(UPDATE_PURCHASE_PAYMENT_STATUS, {
    refetchQueries: ['GetAllUserPurchases'],
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid grid-cols-12 gap-3 items-center px-4 py-4 bg-white border border-stone-200 rounded-xl shadow-sm"
    >
      {/* Order ID */}
      <div className="col-span-1">
        <p className="text-xs text-stone-400">ID</p>
        <p className="text-sm font-bold text-stone-700">#{purchase.id}</p>
      </div>

      {/* User */}
      <div className="col-span-3 min-w-0">
        <p className="font-semibold text-stone-800 text-sm truncate">{purchase.user.name}</p>
        <p className="text-xs text-stone-500 truncate">{purchase.user.email}</p>
        {purchase.user.campaignId && (
          <p className="text-xs font-mono text-orange-600">{purchase.user.campaignId}</p>
        )}
      </div>

      {/* Product */}
      <div className="col-span-3 min-w-0">
        <p className="text-sm font-semibold text-stone-700 truncate">{purchase.merch.name}</p>
        <p className="text-xs text-stone-500">
          Size: {purchase.size} · Qty: {purchase.qty} · ₹{purchase.merch.price * purchase.qty}
        </p>
        <p className="text-xs text-stone-400">
          {new Date(purchase.createdAt).toLocaleDateString('en-IN', {
            year: 'numeric', month: 'short', day: 'numeric',
          })}
        </p>
      </div>

      {/* Razorpay */}
      <div className="col-span-2 min-w-0">
        <p className="text-xs text-stone-400 truncate">
          {purchase.razorpayPaymentId ? `Pay: ${purchase.razorpayPaymentId}` : 'No payment ID'}
        </p>
        <p className="text-xs text-stone-400 truncate">
          {purchase.razorpayOrderId ? `Ord: ${purchase.razorpayOrderId}` : ''}
        </p>
      </div>

      {/* Status badge */}
      <div className="col-span-2">
        <StatusBadge status={purchase.status} />
      </div>

      {/* Status change */}
      <div className="col-span-1">
        <select
          value={purchase.status}
          onChange={(e) =>
            updateStatus({ variables: { purchaseId: purchase.id, status: e.target.value as OrderStatus } })
          }
          disabled={loading}
          className="text-xs font-semibold border border-stone-200 rounded-lg px-2 py-1.5 bg-white focus:outline-none focus:border-orange-400 disabled:opacity-50 cursor-pointer w-full"
        >
          {STATUS_OPTIONS.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
    </motion.div>
  );
}

export default function AdminOrders() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { data, loading, error } = useQuery<{ getAllUserPurchases: Purchase[] }>(GET_ALL_USER_PURCHASES);

  const purchases = data?.getAllUserPurchases ?? [];

  const completed = purchases.filter((p) => p.status === 'COMPLETED').length;
  const pending = purchases.filter((p) => p.status === 'PENDING').length;
  const totalRevenue = purchases
    .filter((p) => p.status === 'COMPLETED')
    .reduce((sum, p) => sum + p.merch.price * p.qty, 0);

  const handleLogout = () => { logout(); navigate('/login'); };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Top bar */}
      <div className="bg-[#432818] text-white px-6 py-4 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-3">
          <span className="text-xl font-black tracking-tight">Admin Panel</span>
          <span className="text-orange-400 font-mono text-xs">No Smoking Campaign</span>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-sm font-semibold text-orange-300 hover:text-white transition-colors"
        >
          <LogOut size={16} /> Logout
        </button>
      </div>

      {/* Nav tabs */}
      <div className="bg-white border-b border-stone-200 px-6">
        <div className="flex gap-1 max-w-7xl mx-auto">
          <Link
            to="/admin"
            className="flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 border-transparent text-stone-500 hover:text-stone-800 transition-colors"
          >
            <Users size={16} /> User Registrations
          </Link>
          <Link
            to="/admin/orders"
            className="flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 border-orange-600 text-orange-600"
          >
            <ShoppingBag size={16} /> Merch Orders
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Stats bar */}
        {!loading && purchases.length > 0 && (
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { label: 'Total Orders', value: purchases.length, color: 'text-[#432818]' },
              { label: 'Completed', value: completed, color: 'text-green-600' },
              { label: 'Revenue', value: `₹${totalRevenue}`, color: 'text-orange-600' },
            ].map(({ label, value, color }) => (
              <div key={label} className="bg-white rounded-xl border border-stone-200 shadow-sm p-4 text-center">
                <p className="text-xs text-stone-500 uppercase font-semibold">{label}</p>
                <p className={`text-2xl font-black mt-1 ${color}`}>{value}</p>
              </div>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-black text-[#432818]">Merch Orders</h1>
            <p className="text-stone-500 text-sm mt-1">
              {loading ? 'Loading…' : `${purchases.length} orders · ${pending} pending`}
            </p>
          </div>
        </div>

        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 mb-6">
            Failed to load orders: {error.message}
          </div>
        )}

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-10 h-10 border-4 border-orange-600 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : purchases.length === 0 ? (
          <div className="text-center py-20">
            <Package size={56} className="mx-auto text-stone-300 mb-4" />
            <p className="text-stone-400">No orders yet.</p>
          </div>
        ) : (
          <>
            {/* Table header */}
            <div className="grid grid-cols-12 gap-3 px-4 py-2 text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">
              <div className="col-span-1">ID</div>
              <div className="col-span-3">Customer</div>
              <div className="col-span-3">Product</div>
              <div className="col-span-2">Payment Ref</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-1">Update</div>
            </div>

            <div className="space-y-3">
              {purchases.map((p) => <OrderRow key={p.id} purchase={p} />)}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
