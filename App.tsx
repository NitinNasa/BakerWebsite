/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Star, 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook, 
  Twitter, 
  ChevronRight, 
  Menu, 
  X,
  Clock,
  CheckCircle2,
  Gift,
  Cake,
  Cookie,
  UtensilsCrossed
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-bakery-orange rounded-full flex items-center justify-center text-white font-serif font-bold text-xl">NB</div>
          <span className={`text-2xl font-serif font-bold tracking-tight ${isScrolled ? 'text-bakery-brown' : 'text-bakery-brown'}`}>Nik Baker's</span>
        </div>

        <div className="hidden md:flex items-center gap-8 font-medium">
          <a href="#cakes" className="hover:text-bakery-orange transition-colors">Cakes</a>
          <a href="#breads" className="hover:text-bakery-orange transition-colors">Breads</a>
          <a href="#gifts" className="hover:text-bakery-orange transition-colors">Gifts</a>
          <a href="#stores" className="hover:text-bakery-orange transition-colors">Stores</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-bakery-brown/5 rounded-full transition-colors">
            <ShoppingBag className="w-6 h-6" />
          </button>
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
          <button className="hidden md:block bg-bakery-brown text-white px-6 py-2 rounded-full font-semibold hover:bg-bakery-orange transition-all">
            Order Now
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 flex flex-col gap-4 md:hidden"
          >
            <a href="#cakes" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">Cakes</a>
            <a href="#breads" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">Breads</a>
            <a href="#gifts" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">Gifts</a>
            <a href="#stores" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">Stores</a>
            <button className="bg-bakery-orange text-white py-3 rounded-xl font-bold">Order Now</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=2000" 
        alt="Fresh Bakery" 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-bakery-cream via-bakery-cream/80 to-transparent"></div>
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-2 mb-6 bg-white/50 backdrop-blur-sm w-fit px-4 py-2 rounded-full border border-bakery-brown/10">
          <div className="flex text-yellow-500">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
          </div>
          <span className="text-sm font-semibold">Rated by 20,000+ happy customers</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 text-bakery-brown">
          Fresh Artisan Bread & <span className="text-bakery-orange italic">Celebration Cakes</span> Baked Daily
        </h1>
        
        <p className="text-xl text-bakery-brown/80 mb-10 max-w-lg leading-relaxed">
          Premium bakery creations made with the finest ingredients. Delivered fresh or available at your nearest store.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button className="btn-primary flex items-center justify-center gap-2">
            Order Cake Today <ChevronRight className="w-5 h-5" />
          </button>
          <button className="btn-secondary">
            Browse Fresh Bread
          </button>
        </div>

        <div className="flex items-center gap-6 text-sm font-medium text-bakery-brown/70">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-bakery-orange" />
            Same-day pickup available
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-bakery-orange" />
            100% Fresh Ingredients
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const QuickShop = () => {
  const categories = [
    { title: 'Birthday Cakes', icon: <Cake className="w-8 h-8" />, desc: 'Make every birthday magical.', img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800' },
    { title: 'Fresh Breads', icon: <UtensilsCrossed className="w-8 h-8" />, desc: 'Artisan loaves, baked daily.', img: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&q=80&w=800' },
    { title: 'Gourmet Cookies', icon: <Cookie className="w-8 h-8" />, desc: 'Buttery, crunchy perfection.', img: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=800' },
    { title: 'Gift Boxes', icon: <Gift className="w-8 h-8" />, desc: 'Handcrafted chocolate luxury.', img: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?auto=format&fit=crop&q=80&w=800' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Quick Shop</h2>
          <p className="text-bakery-brown/60 max-w-2xl mx-auto">Skip the line and order your favorites directly to your doorstep.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-lg"
            >
              <img src={cat.img} alt={cat.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-bakery-brown via-bakery-brown/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="mb-4 p-3 bg-white/20 backdrop-blur-md w-fit rounded-2xl">
                  {cat.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{cat.title}</h3>
                <p className="text-white/80 mb-6 text-sm">{cat.desc}</p>
                <button className="w-full py-3 bg-white text-bakery-brown rounded-xl font-bold transition-colors hover:bg-bakery-orange hover:text-white">
                  Shop Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Bestsellers = () => {
  const products = [
    { name: 'Belgian Chocolate Cake', price: '₹1,200', rating: 4.9, img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=400' },
    { name: 'Sourdough Country Loaf', price: '₹250', rating: 4.8, img: 'https://images.unsplash.com/photo-1585478259715-876acc5be8eb?auto=format&fit=crop&q=80&w=400' },
    { name: 'Red Velvet Cupcakes', price: '₹450', rating: 4.7, img: 'https://images.unsplash.com/photo-1614707267537-b85aba00c4b7?auto=format&fit=crop&q=80&w=400' },
    { name: 'Butter Croissants (Pack of 4)', price: '₹380', rating: 5.0, img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=400' },
    { name: 'Assorted Macarons', price: '₹600', rating: 4.8, img: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&q=80&w=400' },
    { name: 'Dark Chocolate Truffles', price: '₹850', rating: 4.9, img: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?auto=format&fit=crop&q=80&w=400' },
  ];

  return (
    <section className="py-24 bg-bakery-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-bakery-orange font-bold tracking-widest uppercase text-sm mb-2 block">Most ordered this week</span>
            <h2 className="text-4xl md:text-5xl font-bold">Customer Favorites</h2>
          </div>
          <button className="text-bakery-brown font-bold flex items-center gap-2 hover:text-bakery-orange transition-colors">
            View All Bestsellers <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((prod, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                <img src={prod.img} alt={prod.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-bakery-orange">
                  BESTSELLER
                </div>
              </div>
              <div className="px-2">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-bakery-brown">{prod.name}</h3>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-bold text-bakery-brown">{prod.rating}</span>
                  </div>
                </div>
                <p className="text-2xl font-serif font-bold text-bakery-orange mb-6">{prod.price}</p>
                <button className="w-full py-4 bg-bakery-brown text-white rounded-2xl font-bold hover:bg-bakery-orange transition-all flex items-center justify-center gap-2">
                  <ShoppingBag className="w-5 h-5" /> Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SocialProof = () => (
  <section className="py-24 bg-bakery-brown text-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Trusted by <span className="text-bakery-orange italic">50,000+</span> bakery lovers
          </h2>
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10">
              <div className="flex text-bakery-orange mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-xl italic mb-6 leading-relaxed">
                "Absolutely love their sourdough and chocolate cake. Always fresh and beautifully packed. The best bakery in town, hands down!"
              </p>
              <div className="flex items-center gap-4">
                <img src="https://i.pravatar.cc/150?u=1" alt="Customer" className="w-12 h-12 rounded-full border-2 border-bakery-orange" />
                <div>
                  <h4 className="font-bold">Ananya Sharma</h4>
                  <p className="text-sm text-white/60">Verified Customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=400" alt="Bakery" className="rounded-3xl w-full h-64 object-cover" referrerPolicy="no-referrer" />
            <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=400" alt="Cake" className="rounded-3xl w-full h-64 object-cover mt-8" referrerPolicy="no-referrer" />
            <img src="https://images.unsplash.com/photo-1585478259715-876acc5be8eb?auto=format&fit=crop&q=80&w=400" alt="Bread" className="rounded-3xl w-full h-64 object-cover -mt-8" referrerPolicy="no-referrer" />
            <img src="https://images.unsplash.com/photo-1548943487-a2e4e43b4853?auto=format&fit=crop&q=80&w=400" alt="Chocolate" className="rounded-3xl w-full h-64 object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-bakery-orange p-8 rounded-full shadow-2xl animate-pulse">
            <Instagram className="w-10 h-10" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const OccasionCakes = () => {
  const occasions = [
    { name: 'Birthday Cakes', img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=600' },
    { name: 'Anniversary Cakes', img: 'https://images.unsplash.com/photo-1535141192574-5d4897c825a0?auto=format&fit=crop&q=80&w=600' },
    { name: 'Kids Celebration', img: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&q=80&w=600' },
    { name: 'Corporate Gifts', img: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?auto=format&fit=crop&q=80&w=600' },
  ];

  return (
    <section id="cakes" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Cakes for Every Occasion</h2>
          <p className="text-bakery-brown/60">Capture high-intent moments with our specialized celebration ranges.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {occasions.map((occ, i) => (
            <div key={i} className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer">
              <img src={occ.img} alt={occ.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">{occ.name}</h3>
                <button className="bg-white text-bakery-brown px-6 py-2 rounded-full font-bold opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GiftSection = () => (
  <section id="gifts" className="py-24 bg-bakery-cream">
    <div className="max-w-7xl mx-auto px-4 md:px-8 bg-white rounded-[3rem] overflow-hidden shadow-xl border border-bakery-brown/5">
      <div className="grid md:grid-cols-2 items-center">
        <div className="p-12 md:p-20">
          <span className="text-bakery-orange font-bold tracking-widest uppercase text-sm mb-4 block">Premium Gifting</span>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">Send Happiness in a Box</h2>
          <p className="text-xl text-bakery-brown/70 mb-10 leading-relaxed">
            Show your appreciation with our premium chocolate gift boxes and gourmet baskets. Perfect for celebrations and corporate gifting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button className="btn-primary">Send a Gift Today</button>
          </div>
          <p className="text-sm font-medium text-bakery-brown/50 italic">
            * Next-day delivery available for gift boxes.
          </p>
        </div>
        <div className="h-[600px]">
          <img 
            src="https://images.unsplash.com/photo-1548943487-a2e4e43b4853?auto=format&fit=crop&q=80&w=1000" 
            alt="Gift Box" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  </section>
);

const BrandAuthority = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800" 
            alt="Chef at work" 
            className="rounded-[3rem] shadow-2xl"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-10 -right-10 bg-bakery-orange p-10 rounded-[2rem] text-white hidden lg:block">
            <p className="text-4xl font-serif font-bold mb-2">25+</p>
            <p className="text-sm font-bold uppercase tracking-widest">Years of Craft</p>
          </div>
        </div>
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">A Passion for Artisan Baking</h2>
          <p className="text-xl text-bakery-brown/70 mb-10 leading-relaxed">
            Nik Baker’s was founded by a professionally trained baker with international experience, bringing authentic European baking techniques to India. Every loaf and every cake tells a story of craftsmanship and quality.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: 'Premium Ingredients', desc: 'Sourced globally for authentic taste.' },
              { title: 'Freshly Baked Daily', desc: 'No preservatives, just pure freshness.' },
              { title: 'International Recipes', desc: 'European techniques meet local love.' },
              { title: 'Handcrafted Love', desc: 'Every product is a piece of art.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-bakery-cream rounded-2xl flex items-center justify-center text-bakery-orange">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">{item.title}</h4>
                  <p className="text-sm text-bakery-brown/60">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const StoreLocator = () => {
  const cities = ['Chandigarh', 'Ludhiana', 'Amritsar', 'Panchkula', 'Mohali', 'Patiala', 'Delhi NCR'];
  
  return (
    <section id="stores" className="py-24 bg-bakery-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-bakery-brown text-white rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 hidden lg:block">
            <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800" alt="Store" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="relative z-10 max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Find a Nik Baker’s Near You</h2>
            <p className="text-xl text-white/70 mb-10">Visit our artisan stores for the full sensory experience of freshly baked goodness.</p>
            
            <div className="flex flex-wrap gap-3 mb-12">
              {cities.map((city, i) => (
                <span key={i} className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium border border-white/10">
                  {city}
                </span>
              ))}
            </div>

            <button className="btn-primary flex items-center gap-2">
              <MapPin className="w-5 h-5" /> Find My Nearest Store
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-white pt-24 pb-32 border-t border-bakery-brown/5">
    <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
      <div className="col-span-1 lg:col-span-1">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-10 h-10 bg-bakery-orange rounded-full flex items-center justify-center text-white font-serif font-bold text-xl">NB</div>
          <span className="text-2xl font-serif font-bold tracking-tight">Nik Baker's</span>
        </div>
        <p className="text-bakery-brown/60 mb-8 leading-relaxed">
          Premium artisan bakery known for fresh breads, gourmet cakes, and handcrafted chocolates.
        </p>
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 bg-bakery-cream rounded-full flex items-center justify-center text-bakery-brown hover:bg-bakery-orange hover:text-white transition-all"><Instagram className="w-5 h-5" /></a>
          <a href="#" className="w-10 h-10 bg-bakery-cream rounded-full flex items-center justify-center text-bakery-brown hover:bg-bakery-orange hover:text-white transition-all"><Facebook className="w-5 h-5" /></a>
          <a href="#" className="w-10 h-10 bg-bakery-cream rounded-full flex items-center justify-center text-bakery-brown hover:bg-bakery-orange hover:text-white transition-all"><Twitter className="w-5 h-5" /></a>
        </div>
      </div>

      <div>
        <h4 className="font-bold text-lg mb-6">Quick Links</h4>
        <ul className="space-y-4 text-bakery-brown/60 font-medium">
          <li><a href="#" className="hover:text-bakery-orange transition-colors">Our Story</a></li>
          <li><a href="#" className="hover:text-bakery-orange transition-colors">Bestsellers</a></li>
          <li><a href="#" className="hover:text-bakery-orange transition-colors">Gift Baskets</a></li>
          <li><a href="#" className="hover:text-bakery-orange transition-colors">Store Locator</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-lg mb-6">Customer Care</h4>
        <ul className="space-y-4 text-bakery-brown/60 font-medium">
          <li><a href="#" className="hover:text-bakery-orange transition-colors">Track Order</a></li>
          <li><a href="#" className="hover:text-bakery-orange transition-colors">Shipping Policy</a></li>
          <li><a href="#" className="hover:text-bakery-orange transition-colors">FAQs</a></li>
          <li><a href="#" className="hover:text-bakery-orange transition-colors">Contact Us</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-lg mb-6">Newsletter</h4>
        <p className="text-sm text-bakery-brown/60 mb-6">Subscribe to get special offers and first look at new launches.</p>
        <div className="flex gap-2">
          <input type="email" placeholder="Email address" className="bg-bakery-cream border-none rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-bakery-orange outline-none" />
          <button className="bg-bakery-brown text-white p-3 rounded-xl hover:bg-bakery-orange transition-colors">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 border-t border-bakery-brown/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-bakery-brown/40 font-medium">
      <p>© 2024 Nik Baker's. All rights reserved.</p>
      <div className="flex gap-8">
        <a href="#" className="hover:text-bakery-orange">Privacy Policy</a>
        <a href="#" className="hover:text-bakery-orange">Terms of Service</a>
      </div>
    </div>
  </footer>
);

const StickyMobileCTA = () => (
  <div className="sticky-mobile-cta">
    <button className="flex flex-col items-center gap-1 text-bakery-brown/60 hover:text-bakery-orange transition-colors">
      <Cake className="w-5 h-5" />
      <span className="text-[10px] font-bold uppercase">Order Cake</span>
    </button>
    <button className="flex flex-col items-center gap-1 text-bakery-brown/60 hover:text-bakery-orange transition-colors">
      <UtensilsCrossed className="w-5 h-5" />
      <span className="text-[10px] font-bold uppercase">Shop Bread</span>
    </button>
    <button className="bg-bakery-orange text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
      Order Now
    </button>
    <button className="flex flex-col items-center gap-1 text-bakery-brown/60 hover:text-bakery-orange transition-colors">
      <Phone className="w-5 h-5" />
      <span className="text-[10px] font-bold uppercase">Call Store</span>
    </button>
  </div>
);

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <QuickShop />
        <Bestsellers />
        <SocialProof />
        <OccasionCakes />
        <GiftSection />
        <BrandAuthority />
        <StoreLocator />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
