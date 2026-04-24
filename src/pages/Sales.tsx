import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, ArrowRight, Heart, Package } from 'lucide-react';
import { useQuery } from '@apollo/client/react';
import { useCart, type CartItem } from '../context/CartContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { GET_ALL_MERCH } from '../graphql/queries';

const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
const PLACEHOLDER_IMAGE =
  'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=85&auto=format&fit=crop';

interface Merch {
  id: number;
  name: string;
  price: number;
}

export default function Sales() {
  const [selectedSize, setSelectedSize] = useState<string>('M');
  const [quantity, setQuantity] = useState<number>(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [liked, setLiked] = useState(false);
  const [activeMerchId, setActiveMerchId] = useState<number | null>(null);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const { data, loading, error } = useQuery<{ getAllMerch: Merch[] }>(GET_ALL_MERCH);

  const merch = data?.getAllMerch ?? [];
  const product = merch.find((m) => m.id === activeMerchId) ?? merch[0] ?? null;

  const handleAddToCart = () => {
    if (!product) return;
    const cartItem: CartItem = {
      id: `${product.id}-${selectedSize}`,
      name: product.name,
      price: product.price,
      size: selectedSize,
      quantity,
      image: PLACEHOLDER_IMAGE,
    };
    addToCart(cartItem);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    setTimeout(() => navigate('/cart'), 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFBF7] to-orange-50">
      <Navbar />

      <div className="pt-24 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-stone-600 mb-8 sm:mb-12"
          >
            <a href="/" className="hover:text-orange-600 transition-colors">Home</a>
            <span className="mx-2">/</span>
            <span className="text-orange-600 font-semibold">Store</span>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#432818]">Official Store</h1>
            <p className="text-stone-600 text-base sm:text-lg mt-2">
              Exclusive merchandise from the Shaastra No-Smoking Campaign
            </p>
          </motion.div>

          {/* Loading */}
          {loading && (
            <div className="flex justify-center items-center py-24">
              <div className="w-10 h-10 border-4 border-orange-600 border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="p-6 bg-red-50 border border-red-200 rounded-xl text-red-700 text-center">
              Failed to load products: {error.message}
            </div>
          )}

          {/* Merch tab picker (when multiple items) */}
          {!loading && merch.length > 1 && (
            <div className="flex flex-wrap gap-3 mb-10">
              {merch.map((m) => (
                <button
                  key={m.id}
                  onClick={() => { setActiveMerchId(m.id); setSelectedSize('M'); setQuantity(1); }}
                  className={`px-4 py-2 rounded-full font-semibold text-sm transition-all border ${
                    (activeMerchId ?? merch[0]?.id) === m.id
                      ? 'bg-orange-600 text-white border-orange-600'
                      : 'bg-white text-stone-700 border-stone-200 hover:border-orange-400'
                  }`}
                >
                  {m.name}
                </button>
              ))}
            </div>
          )}

          {/* Empty state */}
          {!loading && !error && merch.length === 0 && (
            <div className="text-center py-24">
              <Package size={64} className="mx-auto text-stone-300 mb-4" />
              <p className="text-stone-500 text-lg">No products available yet.</p>
            </div>
          )}

          {/* Product Detail */}
          {product && (
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                  <img
                    src={PLACEHOLDER_IMAGE}
                    alt={product.name}
                    className="w-full h-96 sm:h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <button
                    onClick={() => setLiked(!liked)}
                    className="absolute top-4 sm:top-6 right-4 sm:right-6 p-2.5 sm:p-3 rounded-full bg-white/90 hover:bg-white transition-all shadow-lg hover:scale-110"
                  >
                    <Heart size={20} className={liked ? 'fill-red-600 text-red-600' : 'text-stone-600'} />
                  </button>
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 bg-orange-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider">
                    Best Seller
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-200 rounded-full mix-blend-multiply blur-2xl opacity-60 -z-10" />
              </motion.div>

              {/* Details */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-orange-500 font-mono text-xs sm:text-sm font-bold uppercase tracking-widest">
                  Limited Edition
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#432818] mt-3 sm:mt-4">
                  {product.name}
                </h2>

                <div className="flex items-center gap-2 mt-3 sm:mt-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  <span className="text-stone-600 text-sm">(248 reviews)</span>
                </div>

                <p className="text-stone-600 text-sm sm:text-base leading-relaxed mt-4 sm:mt-6">
                  Premium quality campaign merchandise made from 100% organic cotton for comfort and durability.
                </p>

                <div className="mt-6 sm:mt-8 flex items-baseline gap-3 sm:gap-4">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black text-orange-600">
                    ₹{product.price}
                  </span>
                  <span className="text-lg sm:text-xl line-through text-stone-400">
                    ₹{Math.round(product.price * 1.33)}
                  </span>
                  <span className="text-xs sm:text-sm bg-red-100 text-red-700 px-2 py-1 rounded-full font-bold">
                    25% OFF
                  </span>
                </div>

                <div className="mt-6 sm:mt-8 space-y-2 sm:space-y-3">
                  {['100% Organic Cotton', 'Eco-Friendly Printing', 'Premium Quality', 'Free Shipping on Orders Above ₹500'].map((f) => (
                    <div key={f} className="flex items-center gap-3 text-sm sm:text-base text-stone-600">
                      <span className="text-orange-600">✓</span> {f}
                    </div>
                  ))}
                </div>

                {/* Size */}
                <div className="mt-8 sm:mt-10">
                  <label className="block text-sm sm:text-base font-bold text-[#432818] mb-3">Select Size</label>
                  <div className="grid grid-cols-6 gap-2 sm:gap-3">
                    {SIZES.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`py-2 sm:py-3 rounded-lg font-bold text-xs sm:text-sm uppercase tracking-wider transition-all ${
                          selectedSize === size
                            ? 'bg-orange-600 text-white border-2 border-orange-600'
                            : 'bg-stone-100 text-stone-700 border-2 border-stone-200 hover:border-orange-400'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div className="mt-8 sm:mt-10">
                  <label className="block text-sm sm:text-base font-bold text-[#432818] mb-3">Quantity</label>
                  <div className="flex items-center gap-4 w-32">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 rounded-lg bg-stone-100 hover:bg-stone-200 transition-colors font-bold text-lg"
                    >−</button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-12 h-10 text-center border-2 border-stone-200 rounded-lg font-bold focus:border-orange-400 outline-none"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 rounded-lg bg-stone-100 hover:bg-stone-200 transition-colors font-bold text-lg"
                    >+</button>
                  </div>
                </div>

                {/* Buttons */}
                <div className="mt-8 sm:mt-12 space-y-3 sm:space-y-4">
                  <button
                    onClick={handleBuyNow}
                    className="w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold hover:from-orange-700 hover:to-orange-800 transition-all flex items-center justify-center gap-2 group text-sm sm:text-base"
                  >
                    Buy Now
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={handleAddToCart}
                    className={`w-full py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold transition-all flex items-center justify-center gap-2 text-sm sm:text-base ${
                      addedToCart ? 'bg-green-600 text-white' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    <ShoppingCart size={18} />
                    {addedToCart ? '✓ Added to Cart' : 'Add to Cart'}
                  </button>
                </div>

                <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-xs sm:text-sm text-green-700 font-semibold">
                    ✓ In Stock — Delivery in 3-5 business days
                  </p>
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
