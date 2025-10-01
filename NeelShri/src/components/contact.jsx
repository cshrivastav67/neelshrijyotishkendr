import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent (Simulation)",
      description: "A full backend is needed to send this message to an email. You can request this integration!",
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "7428165559",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Mail,
      title: "Email",
      details: "neelshri7@gmail.com",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Available for Online Consultations",
      color: "from-purple-500 to-violet-600"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to discover your destiny? Contact us for personalized consultations and spiritual guidance
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 group"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{info.title}</h4>
                      <p className="text-gray-300">{info.details}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden"
            >
              <img class="w-full h-64 object-cover" alt="Lal Kitab book with gemstones and spiritual items" src="https://images.unsplash.com/photo-1685478236879-54b404c05b74" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-bold mb-2">Professional Consultations</h4>
                <p className="text-gray-200">Personalized guidance for your spiritual journey</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10"
          >
            <h3 className="text-3xl font-bold text-white mb-8">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors duration-300"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors duration-300"
                    placeholder="Your phone number"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors duration-300"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Service Interest</label>
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-orange-500 transition-colors duration-300">
                  <option value="">Select a service</option>
                  <option value="lal-kitab">Lal Kitab</option>
                  <option value="reiki">Reiki Healing</option>
                  <option value="numerology">Numerology</option>
                  <option value="gemology">Gemology</option>
                  <option value="sadhna">Sadhna</option>
                  <option value="healing">Spiritual Healing</option>
                </select>
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Message</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors duration-300 resize-none"
                  placeholder="Tell us about your consultation needs..."
                  required
                ></textarea>
              </div>
              
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;