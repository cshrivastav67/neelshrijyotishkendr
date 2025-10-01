import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, ShoppingCart, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const OrderModal = ({ product, onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Order Placed (Simulation)",
      description: `Your order for ${product.title} has been recorded. A full backend is needed for real orders, OTP, and notifications.`,
    });
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: -20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: -20 }}
        className="bg-slate-900 rounded-2xl w-full max-w-md p-8 border border-purple-500/50 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <Button variant="ghost" size="icon" className="absolute top-4 right-4 text-gray-400 hover:text-white" onClick={onClose}>
          <X />
        </Button>
        <h3 className="text-2xl font-bold text-white mb-2">Order: {product.title}</h3>
        <p className="text-xl font-bold text-amber-400 mb-6">{product.price}</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white font-medium mb-2">Full Name</label>
            <input type="text" placeholder="Your full name" required className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500" />
          </div>
          <div>
            <label className="block text-white font-medium mb-2">Phone Number (for OTP)</label>
            <input type="tel" placeholder="Your phone number" required className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500" />
          </div>
          <div>
            <label className="block text-white font-medium mb-2">Shipping Address</label>
            <textarea rows="3" placeholder="Your complete address" required className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 resize-none"></textarea>
          </div>
          <Button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold py-3 rounded-xl flex items-center justify-center space-x-2">
            <ShoppingCart className="w-5 h-5" />
            <span>Confirm Order</span>
          </Button>
          <p className="text-xs text-gray-500 text-center pt-2">Note: OTP and notifications require backend integration.</p>
        </form>
      </motion.div>
    </motion.div>
  );
};

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const productCategories = [
    "Bracelets", "Mala", "Stone Certified", "Pyramids", "Yantras", 
    "LED Items", "Reiki Products", "Oils/Perfumes", "Lal Kitab"
  ];

  const diwaliOffer = {
    title: "Dhan Laxmi Kuber Potli",
    description: "Special Diwali Offer! Bring home prosperity and wealth.",
    price: "₹999",
    image: "https://horizons-cdn.hostinger.com/c5ccb476-8b31-43b9-926a-6ddb25100a4d/a93f0fcc773b9b5459798e229a145212.jpg",
    alt: "Dhan Laxmi Kuber Potli red bags for Diwali",
    color: "from-amber-500 to-red-600"
  };

  return (
    <>
      <AnimatePresence>
        {selectedProduct && <OrderModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
      </AnimatePresence>
      <section id="products" className="py-20 bg-black/20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Spiritual Products
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Authentic spiritual products and remedial items for your astrological needs.
            </p>
          </motion.div>

          {/* Diwali Offer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg rounded-3xl overflow-hidden border border-amber-500/50 mb-16 shadow-2xl shadow-amber-500/10"
          >
            <div className="grid md:grid-cols-2 items-center">
              <div className="p-8 md:p-12 order-2 md:order-1">
                <h3 className="text-3xl font-bold text-white mb-3">{diwaliOffer.title}</h3>
                <p className="text-amber-300 font-semibold text-lg mb-4">Special Diwali Offer</p>
                <p className="text-gray-300 mb-6 leading-relaxed">{diwaliOffer.description}</p>
                
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-3xl font-bold bg-gradient-to-r ${diwaliOffer.color} bg-clip-text text-transparent`}>
                    {diwaliOffer.price}
                  </span>
                </div>
                
                <Button
                  onClick={() => setSelectedProduct(diwaliOffer)}
                  className={`w-full bg-gradient-to-r ${diwaliOffer.color} hover:opacity-90 text-white font-semibold py-3 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2`}
                >
                  <Gift className="w-5 h-5" />
                  <span>Order Now</span>
                </Button>
              </div>
              <div className="relative h-64 md:h-full order-1 md:order-2">
                <img className="w-full h-full object-cover" alt={diwaliOffer.alt} src={diwaliOffer.image} />
                <div className={`absolute inset-0 bg-gradient-to-t ${diwaliOffer.color} opacity-20`}></div>
              </div>
            </div>
          </motion.div>

          {/* Product Categories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-white mb-6">Our Product Categories</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {productCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white/10 border border-white/20 rounded-full px-6 py-2 text-white font-medium cursor-pointer hover:bg-white/20 transition-colors"
                  onClick={() => toast({ title: `🚧 Browsing ${category} isn't implemented yet. You can request this feature!`})}
                >
                  {category}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Products;