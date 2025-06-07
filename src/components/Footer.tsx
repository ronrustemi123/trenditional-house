import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, MapPin, Clock, Phone, Mail, Utensils, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reservations', href: '#reservations' },
    { name: 'Private Dining', href: '#private-dining' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-primary-800 to-black text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-gold-400 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-gold-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-gold-400 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-gold-400 to-gold-600 p-3 rounded-full">
                <Utensils className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-serif font-bold">Trenditional House</h3>
                <p className="text-gold-300 font-script text-lg">Heritage & Haute Cuisine</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              "Flavors that tell a story, experiences that create memories. 
              Where heritage meets innovation on every plate."
            </p>
            
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary-700 p-3 rounded-full hover:bg-gradient-to-br hover:from-gold-500 hover:to-gold-600 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon size={20} className="group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="text-xl font-serif font-bold mb-6 text-gold-300">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  whileHover={{ x: 5 }}
                  className="block text-gray-300 hover:text-gold-300 transition-colors duration-300 text-left"
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h4 className="text-xl font-serif font-bold mb-6 text-gold-300">Contact & Hours</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Clock size={18} className="text-gold-400 mt-1" />
                <div className="text-sm">
                  <p className="text-gray-300 font-medium">Operating Hours</p>
                  <p className="text-gray-400">Mon-Thu: 5:00 PM - 11:00 PM</p>
                  <p className="text-gray-400">Fri-Sat: 5:00 PM - 12:00 AM</p>
                  <p className="text-gray-400">Sunday: 5:00 PM - 10:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-gold-400" />
                <div className="text-sm">
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-gold-400" />
                <div className="text-sm">
                  <p className="text-gray-300">info@trenditionalhouse.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-gold-400 mt-1" />
                <div className="text-sm">
                  <p className="text-gray-300">123 Culinary Avenue</p>
                  <p className="text-gray-400">Gourmet District</p>
                  <motion.a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="inline-block mt-2 text-gold-400 hover:text-gold-300 transition-colors text-xs"
                  >
                    View on Google Maps →
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="border-t border-primary-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; 2024 Trenditional House. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Made with</span>
              <Heart size={16} className="text-gold-400" />
              <span>for culinary excellence</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;