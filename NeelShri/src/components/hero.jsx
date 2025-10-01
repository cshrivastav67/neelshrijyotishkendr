import React from 'react';
import { motion } from 'framer-motion';
import { Star, Sparkles, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Hero = () => {
  const handleConsultation = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-4 h-4 text-orange-400"
        >
          <Star className="w-full h-full" />
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-40 right-20 w-6 h-6 text-purple-400"
        >
          <Sparkles className="w-full h-full" />
        </motion.div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-40 left-20 w-5 h-5 text-blue-400"
        >
          <Moon className="w-full h-full" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
              NeelShri
            </span>
            <br />
            <span className="text-white">Jyotish Kendr</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 mb-4 leading-relaxed"
          >
            Expert Astrologer & Gemologist with <span className="text-orange-400 font-semibold">10+ Years</span> of experience in 
            <span className="text-purple-400"> Lal Kitab</span>, 
            <span className="text-blue-400"> Reiki</span>, 
            <span className="text-green-400"> Healing</span>, 
            <span className="text-pink-400"> Numerology</span> and 
            <span className="text-yellow-400"> Sadhna</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg text-amber-300 mb-8 font-semibold animated-gradient"
          >
            Enhance your energy that will lead your spiritual life to success.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button
              onClick={handleConsultation}
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Book Consultation
            </Button>
            <Button
              variant="outline"
              onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300"
            >
              Explore Services
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Content - Images */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex justify-center items-center"
        >
          <div className="relative w-[300px] h-[450px]">
            {/* Astrological Effect Background */}
            <motion.div 
              className="absolute inset-0 rounded-3xl overflow-hidden"
              style={{
                background: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '1rem 1rem'
              }}
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear'
              }}
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-orange-500/20 rounded-3xl"
            />

            {/* Main Profile Image */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative z-10 w-full h-full p-2"
            >
              <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl">
                <img
                  src="https://horizons-cdn.hostinger.com/c5ccb476-8b31-43b9-926a-6ddb25100a4d/471039c16f5a1508aceb7e8ee962c564.jpg"
                  alt="NeelShri - Expert Astrologer and Gemologist"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Star Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute -top-4 -right-4 z-20 w-16 h-16 bg-black/80 rounded-full p-2 border-2 border-orange-500 flex items-center justify-center"
            >
              <Star className="w-8 h-8 text-orange-400" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;