import { ShoppingCart, User, Tag, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useAuth();
  const { getTotalItems } = useCart();
  const cartCount = getTotalItems();

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-orange-100 px-4 sm:px-6 py-3 sm:py-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 font-extrabold text-lg sm:text-2xl text-orange-700 tracking-tighter hover:opacity-80 transition-opacity">
          <img src="/Shaastra logo Black.png" alt="Shaastra" className="h-10 sm:h-14 ml-2 w-auto" />
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6 font-semibold text-xs uppercase tracking-widest text-stone-500">
            <Link to="/sales" className="hover:text-orange-600 flex items-center gap-1 transition-colors">
              <Tag size={14} /> Sales
            </Link>
            <Link to="/cart" className="hover:text-orange-600 flex items-center gap-1 transition-colors relative">
              <ShoppingCart size={14} /> Cart
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
          {isAuthenticated ? (
            <Link
              to="/profile"
              className="p-2 rounded-full bg-orange-50 text-orange-700 hover:bg-orange-100 transition-colors"
            >
              <User size={24} />
            </Link>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-700 transition-colors text-sm"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-3">
          <Link
            to="/cart"
            className="p-2 rounded-full bg-orange-50 text-orange-700 hover:bg-orange-100 transition-colors relative"
          >
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
          {isAuthenticated ? (
            <Link
              to="/profile"
              className="p-2 rounded-full bg-orange-50 text-orange-700 hover:bg-orange-100 transition-colors"
            >
              <User size={20} />
            </Link>
          ) : (
            <Link
              to="/login"
              className="px-3 py-1.5 bg-orange-600 text-white rounded-full font-semibold text-xs hover:bg-orange-700 transition-colors"
            >
              Login
            </Link>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg hover:bg-orange-50 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-orange-100 p-4 mt-1 space-y-4">
          <Link
            to="/sales"
            className="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-orange-50 text-stone-700 font-semibold text-sm uppercase tracking-widest transition-colors"
          >
            <Tag size={16} /> Sales
          </Link>
          <Link
            to="/cart"
            className="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-orange-50 text-stone-700 font-semibold text-sm uppercase tracking-widest transition-colors"
          >
            <ShoppingCart size={16} /> Cart {cartCount > 0 && `(${cartCount})`}
          </Link>
          {!isAuthenticated && (
            <Link
              to="/login"
              className="block py-2 px-3 rounded-lg hover:bg-orange-50 text-stone-700 font-semibold text-sm uppercase tracking-widest transition-colors"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
