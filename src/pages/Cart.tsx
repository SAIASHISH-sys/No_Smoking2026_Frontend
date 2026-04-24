import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trash2, ArrowRight, ShoppingCart, CheckCircle, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useMutation } from '@apollo/client/react';
import { CHECKOUT_CART, VERIFY_CART_PAYMENT } from '../graphql/mutations';
import { useRazorpay } from '../hooks/useRazorpay';

export default function Cart() {
  const { items, removeFromCart, updateQuantity, clearCart, getTotalPrice, getTotalItems } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const { initiatePayment, loading: isCheckingOut, error: checkoutError, clearError } = useRazorpay();

  const [checkoutCart] = useMutation<{
    checkoutCart: { razorpayOrderId: string; purchaseIds: number[]; totalAmount: number };
  }>(CHECKOUT_CART);

  const [verifyCartPayment] = useMutation<{ verifyCartPayment: boolean }>(VERIFY_CART_PAYMENT);

  const handleCheckout = async () => {
    if (!user) { navigate('/login'); return; }
    clearError();

    const cartItems = items.map((item) => ({
      merchId: parseInt(item.id.split('-')[0], 10),
      qty: item.quantity,
      size: item.size,
    }));

    const { data } = await checkoutCart({ variables: { items: cartItems } });
    if (!data?.checkoutCart) return;

    const { razorpayOrderId, purchaseIds, totalAmount } = data.checkoutCart;

    await initiatePayment({
      orderId: razorpayOrderId,
      amount: Math.round(totalAmount * 1.18),
      description: `Cart checkout (${items.length} item${items.length > 1 ? 's' : ''})`,
      prefill: { name: user.name, email: user.email, contact: user.mobileNo ?? '' },
      onSuccess: async (response) => {
        const { data: verifyData } = await verifyCartPayment({
          variables: {
            purchaseIds,
            razorpayOrderId: response.razorpay_order_id,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpaySignature: response.razorpay_signature,
          },
        });
        if (verifyData?.verifyCartPayment) {
          clearCart();
          navigate('/');
        }
      },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFBF7] to-orange-50">
      <Navbar />

      <div className="pt-20 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-stone-600 mb-8 sm:mb-12"
          >
            <a href="/" className="hover:text-orange-600 transition-colors">Home</a>
            <span className="mx-2">/</span>
            <a href="/sales" className="hover:text-orange-600 transition-colors">Store</a>
            <span className="mx-2">/</span>
            <span className="text-orange-600 font-semibold">Cart</span>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 sm:mb-12"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#432818]">
              Shopping Cart
            </h1>
            <p className="text-stone-600 text-base sm:text-lg mt-2">
              {getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'} in your cart
            </p>
          </motion.div>

          {items.length === 0 ? (
            // Empty Cart State
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 sm:py-16 bg-white rounded-2xl sm:rounded-3xl border border-orange-100 shadow-lg"
            >
              <ShoppingCart size={64} className="mx-auto text-stone-300 mb-4" />
              <h2 className="text-2xl sm:text-3xl font-bold text-stone-700 mb-2">Your cart is empty</h2>
              <p className="text-stone-600 mb-6 sm:mb-8">Start shopping to add items to your cart</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/sales')}
                className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold transition-all"
              >
                Continue Shopping
                <ArrowRight size={18} />
              </motion.button>
            </motion.div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-lg sm:rounded-2xl p-4 sm:p-6 border border-orange-100 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                      {/* Product Image */}
                      <div className="sm:w-28 sm:h-28 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1">
                        <h3 className="font-bold text-stone-800 text-sm sm:text-base mb-1">
                          {item.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-stone-500 mb-2 sm:mb-3">
                          Size: <span className="font-semibold text-stone-700">{item.size}</span>
                        </p>
                        <p className="text-lg sm:text-2xl font-black text-orange-600">
                          ₹{item.price}
                        </p>
                      </div>

                      {/* Quantity & Actions */}
                      <div className="flex flex-col justify-between items-end gap-4">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>

                        <div className="flex items-center gap-2 bg-stone-100 rounded-lg p-1">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center font-bold text-sm hover:bg-stone-200 rounded transition-colors"
                          >
                            −
                          </button>
                          <span className="w-6 text-center font-bold text-sm">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center font-bold text-sm hover:bg-stone-200 rounded transition-colors"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Subtotal */}
                    <div className="mt-4 pt-4 border-t border-stone-200 text-right">
                      <p className="text-xs sm:text-sm text-stone-600">Subtotal</p>
                      <p className="text-xl sm:text-2xl font-black text-orange-600">
                        ₹{item.price * item.quantity}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Order Summary */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="lg:col-span-1 h-fit sticky top-32"
              >
                <div className="bg-white rounded-lg sm:rounded-2xl p-6 sm:p-8 border border-orange-100 shadow-lg">
                  <h3 className="text-xl sm:text-2xl font-black text-[#432818] mb-6">
                    Order Summary
                  </h3>

                  {/* Summary Items */}
                  <div className="space-y-3 sm:space-y-4 mb-6 pb-6 border-b border-stone-200">
                    <div className="flex justify-between text-sm sm:text-base text-stone-600">
                      <span>Subtotal</span>
                      <span className="font-bold text-stone-800">₹{getTotalPrice()}</span>
                    </div>
                    <div className="flex justify-between text-sm sm:text-base text-stone-600">
                      <span>Shipping</span>
                      <span className="font-bold text-green-600">Free</span>
                    </div>
                    <div className="flex justify-between text-sm sm:text-base text-stone-600">
                      <span>Tax (18% GST)</span>
                      <span className="font-bold text-stone-800">₹{Math.round(getTotalPrice() * 0.18)}</span>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="mb-6 sm:mb-8 p-4 bg-orange-50 rounded-lg">
                    <p className="text-stone-600 text-sm mb-1">Total Amount</p>
                    <p className="text-2xl sm:text-3xl font-black text-orange-600">
                      ₹{Math.round(getTotalPrice() * 1.18)}
                    </p>
                  </div>

                  {/* Error */}
                  {checkoutError && (
                    <p className="mb-4 text-sm text-red-600 bg-red-50 rounded-lg p-3">
                      {checkoutError}
                    </p>
                  )}

                  {/* Checkout Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleCheckout}
                    disabled={isCheckingOut}
                    className={`w-full py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold transition-all flex items-center justify-center gap-2 text-sm sm:text-base ${
                      isCheckingOut
                        ? 'bg-green-600 text-white'
                        : 'bg-gradient-to-r from-orange-600 to-orange-700 text-white hover:from-orange-700 hover:to-orange-800'
                    }`}
                  >
                    {isCheckingOut ? (
                      <>
                        <CheckCircle size={18} />
                        Processing...
                      </>
                    ) : (
                      <>
                        Proceed to Checkout
                        <ArrowRight size={18} />
                      </>
                    )}
                  </motion.button>

                  {/* Info */}
                  <div className="mt-6 space-y-3">
                    <div className="flex gap-2 text-xs sm:text-sm text-stone-600">
                      <Truck size={16} className="flex-shrink-0 text-orange-600 mt-0.5" />
                      <span>Free shipping on orders above ₹500</span>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-500">
                      Delivery expected in 3-5 business days
                    </p>
                  </div>

                  {/* Continue Shopping */}
                  <button
                    onClick={() => navigate('/sales')}
                    className="w-full mt-4 py-2 sm:py-3 rounded-lg font-semibold text-stone-700 hover:text-orange-600 transition-colors text-xs sm:text-sm"
                  >
                    ← Continue Shopping
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
