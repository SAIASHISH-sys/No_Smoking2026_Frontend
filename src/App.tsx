import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Hero from './pages/Hero';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Sales from './pages/Sales';
import Cart from './pages/Cart';
import AdminUsers from './pages/adminpages/AdminUsers';
import AdminOrders from './pages/adminpages/AdminOrders';

function ProtectedRoute({ element }: { element: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Navigate to="/login" replace />;
}

function AdminRoute({ element }: { element: React.ReactNode }) {
  const { user, isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  if (user?.role !== 'ADMIN') return <Navigate to="/profile" replace />;
  return element;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} />
      <Route path="/sales" element={<Sales />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/admin" element={<AdminRoute element={<AdminUsers />} />} />
      <Route path="/admin/orders" element={<AdminRoute element={<AdminOrders />} />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}
