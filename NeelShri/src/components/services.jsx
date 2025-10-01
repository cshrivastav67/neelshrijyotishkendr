import React from 'react';
import { motion } from 'framer-motion';
import { Star, Heart, Calculator, Gem, Zap, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Services = () => {
  const handleServiceClick = (serviceName) => {
    toast({
      title: `🚧 ${serviceName} consultation isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀`
    });
  };

  const services = [
    {
      icon: BookOpen,
      title: "Lal Kitab",
      description: "Ancient remedial astrology with practical solutions for life's challenges",
      color: "from-red-500 to-orange-600",
      bgColor: "bg-red-500/10"
    },
    {
      icon: Heart,
      title: "Reiki Healing",
      description: "Energy healing techniques for physical, emotional and spiritual wellness",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-500/10"
    },
    {
      icon: Zap,
      title: "Spiritual Healing",
      description: "Holistic healing approaches for mind, body and soul transformation",
      color: "from-purple-500 to-violet-600",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: Calculator,
      title: "Numerology",
      description: "Discover your life path and destiny through the power of numbers",
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: Star,
      title: "Sadhna",
      description: "Spiritual practices and meditation guidance for inner growth",
      color: "from-yellow-500 to-amber-600",
      bgColor: "bg-yellow-500/10"
    },
    {
      icon: Gem,
      title: "Gemology",
      description: "Expert gemstone consultation and authentic stone recommendations",
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-500/10"
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive spiritual and astrological services backed by over 10 years of expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`${service.bgColor} backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group`}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
              
              <Button
                onClick={() => handleServiceClick(service.title)}
                className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white font-semibold py-3 rounded-xl transition-all duration-300`}
              >
                Learn More
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-red-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-blue-600/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Services;