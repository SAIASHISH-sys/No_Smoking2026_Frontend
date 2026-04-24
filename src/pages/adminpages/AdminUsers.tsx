import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useQuery, useMutation } from '@apollo/client/react';
import { Users, ShoppingBag, ChevronDown, ChevronUp, CheckCircle, Clock, AlertCircle, LogOut } from 'lucide-react';
import { GET_ALL_USERS } from '../../graphql/queries';
import { UPDATE_USER_PAYMENT_STATUS, UPDATE_PURCHASE_PAYMENT_STATUS } from '../../graphql/mutations';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

type OrderStatus = 'PENDING' | 'COMPLETED' | 'FAILED';

interface Purchase {
  id: number;
  qty: number;
  size: string;
  status: OrderStatus;
  createdAt: string;
  merch: { id: number; name: string; price: number };
}

interface UserRecord {
  id: number;
  name: string;
  email: string;
  campaignId: string | null;
  age: number | null;
  mobileNo: string | null;
  role: string;
  paymentStatus: OrderStatus;
  registrationrazorpayOrderId: string | null;
  registrationrazorpayPaymentId: string | null;
  isVerified: boolean;
  createdAt: string;
  purchases: Purchase[];
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

function StatusSelect({
  value,
  onChange,
  loading,
}: {
  value: OrderStatus;
  onChange: (s: OrderStatus) => void;
  loading: boolean;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as OrderStatus)}
      disabled={loading}
      className="text-xs font-semibold border border-stone-200 rounded-lg px-2 py-1.5 bg-white focus:outline-none focus:border-orange-400 disabled:opacity-50 cursor-pointer"
    >
      {STATUS_OPTIONS.map((s) => (
        <option key={s} value={s}>{s}</option>
      ))}
    </select>
  );
}

function PurchaseRow({ purchase }: { purchase: Purchase }) {
  const [updatePurchaseStatus, { loading }] = useMutation<
    { updatePurchasePaymentStatus: { id: number; status: OrderStatus } },
    { purchaseId: number; status: OrderStatus }
  >(UPDATE_PURCHASE_PAYMENT_STATUS, {
    refetchQueries: ['GetAllUsers'],
  });

  return (
    <div className="flex flex-wrap items-center gap-3 py-2 px-3 bg-stone-50 rounded-lg text-sm border border-stone-100">
      <span className="font-medium text-stone-700 flex-1 min-w-0 truncate">
        {purchase.merch.name}
      </span>
      <span className="text-stone-500 text-xs">
        {purchase.size} · ×{purchase.qty} · ₹{purchase.merch.price * purchase.qty}
      </span>
      <StatusBadge status={purchase.status} />
      <StatusSelect
        value={purchase.status}
        loading={loading}
        onChange={(status) =>
          updatePurchaseStatus({ variables: { purchaseId: purchase.id, status } })
        }
      />
    </div>
  );
}

function UserRow({ user }: { user: UserRecord }) {
  const [expanded, setExpanded] = useState(false);
  const [updateRegStatus, { loading: regLoading }] = useMutation<
    { updateUserPaymentStatus: { id: number; paymentStatus: OrderStatus } },
    { userId: number; status: OrderStatus }
  >(UPDATE_USER_PAYMENT_STATUS, {
    refetchQueries: ['GetAllUsers'],
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm"
    >
      {/* Main row */}
      <div className="grid grid-cols-12 gap-3 items-center px-4 py-4">
        <div className="col-span-3 min-w-0">
          <p className="font-semibold text-stone-800 text-sm truncate">{user.name}</p>
          <p className="text-xs text-stone-500 truncate">{user.email}</p>
        </div>
        <div className="col-span-2">
          <p className="text-xs text-stone-500">Campaign ID</p>
          <p className="text-sm font-mono font-semibold text-stone-700">{user.campaignId ?? '—'}</p>
        </div>
        <div className="col-span-2">
          <p className="text-xs text-stone-500">Mobile</p>
          <p className="text-sm text-stone-700">{user.mobileNo ?? '—'}</p>
        </div>
        <div className="col-span-2">
          <p className="text-xs text-stone-500 mb-1">Reg. Payment</p>
          <StatusBadge status={user.paymentStatus} />
        </div>
        <div className="col-span-2">
          <p className="text-xs text-stone-500 mb-1">Change Status</p>
          <StatusSelect
            value={user.paymentStatus}
            loading={regLoading}
            onChange={(status) => updateRegStatus({ variables: { userId: user.id, status } })}
          />
        </div>
        <div className="col-span-1 flex justify-end">
          <button
            onClick={() => setExpanded(!expanded)}
            className="p-1.5 rounded-lg hover:bg-stone-100 transition-colors text-stone-500"
            title={expanded ? 'Hide purchases' : 'Show purchases'}
          >
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            <span className="sr-only">{user.purchases.length} purchases</span>
          </button>
        </div>
      </div>

      {/* Purchases section */}
      {expanded && (
        <div className="border-t border-stone-100 bg-stone-50 px-4 py-3 space-y-2">
          <p className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">
            Merch Purchases ({user.purchases.length})
          </p>
          {user.purchases.length === 0 ? (
            <p className="text-xs text-stone-400 italic">No merch purchased yet.</p>
          ) : (
            user.purchases.map((p) => <PurchaseRow key={p.id} purchase={p} />)
          )}
        </div>
      )}
    </motion.div>
  );
}

export default function AdminUsers() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { data, loading, error } = useQuery<{ getAllUsers: UserRecord[] }>(GET_ALL_USERS);

  const users = data?.getAllUsers ?? [];

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
            className="flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 border-orange-600 text-orange-600"
          >
            <Users size={16} /> User Registrations
          </Link>
          <Link
            to="/admin/orders"
            className="flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 border-transparent text-stone-500 hover:text-stone-800 transition-colors"
          >
            <ShoppingBag size={16} /> Merch Orders
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-black text-[#432818]">User Registrations</h1>
            <p className="text-stone-500 text-sm mt-1">
              {loading ? 'Loading…' : `${users.length} registered users`}
            </p>
          </div>
        </div>

        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 mb-6">
            Failed to load users: {error.message}
          </div>
        )}

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-10 h-10 border-4 border-orange-600 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <>
            {/* Table header */}
            <div className="grid grid-cols-12 gap-3 px-4 py-2 text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">
              <div className="col-span-3">Name / Email</div>
              <div className="col-span-2">Campaign ID</div>
              <div className="col-span-2">Mobile</div>
              <div className="col-span-2">Reg. Payment</div>
              <div className="col-span-2">Change Status</div>
              <div className="col-span-1 text-right">Orders</div>
            </div>

            <div className="space-y-3">
              {users.map((u) => <UserRow key={u.id} user={u} />)}
            </div>

            {users.length === 0 && !loading && (
              <div className="text-center py-20 text-stone-400">No registered users yet.</div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
