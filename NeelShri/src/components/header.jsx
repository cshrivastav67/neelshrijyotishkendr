import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };
  const navItems = [{
    name: 'Home',
    id: 'home'
  }, {
    name: 'Services',
    id: 'services'
  }, {
    name: 'Products',
    id: 'products'
  }, {
    name: 'Contact',
    id: 'contact'
  }];
  return <motion.header initial={{
    y: -100,
    opacity: 0
  }} animate={{
    y: 0,
    opacity: 1
  }} transition={{
    duration: 0.8
  }} className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-purple-500/20">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div whileHover={{
          scale: 1.05
        }} className="flex items-center space-x-3">
            <img
                src="https://horizons-cdn.hostinger.com/c5ccb476-8b31-43b9-926a-6ddb25100a4d/12f7e41e32368205aa5e9bec5b84bc58.jpg"
                alt="NeelShri Jyotish Kendr Logo"
                className="w-10 h-10 object-contain rounded-full"
              />
            <span className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">NeelShri Jyotish Kendr</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <motion.button key={item.id} whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.95
          }} onClick={() => scrollToSection(item.id)} className="text-white hover:text-orange-400 transition-colors duration-300 font-medium">
                {item.name}
              </motion.button>)}
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden text-white hover:text-orange-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="text-white hover:text-orange-400 transition-colors duration-300 font-medium text-left">
                  {item.name}
                </button>)}
            </div>
          </motion.div>}
      </nav>
    </motion.header>;
};
export default Header;