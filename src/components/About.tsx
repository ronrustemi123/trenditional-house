import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, Clock, Heart } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { icon: Award, number: '15+', label: 'Years of Excellence' },
    { icon: Users, number: '50K+', label: 'Happy Guests' },
    { icon: Clock, number: '24/7', label: 'Culinary Passion' },
    { icon: Heart, number: '100%', label: 'Love for Food' },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-luxury-cream to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary-600 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-gold-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-primary-600 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-gold-600 font-script text-2xl mb-4"
              >
                Our Heritage
              </motion.p>
              
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl md:text-6xl font-serif font-bold text-primary-600 mb-8 leading-tight"
              >
                Where Stories
                <span className="gradient-text block">Come to Life</span>
              </motion.h2>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-700 leading-relaxed font-light">
                Nestled in the heart of the city, Trenditional House represents more than just fine dining—it's a celebration of culinary heritage reimagined for the modern palate. Our passionate chefs craft each dish with reverence for traditional techniques while embracing contemporary innovation.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed font-light">
                Every meal tells a story, connecting generations through flavors that have been carefully preserved and artfully elevated. We believe that great cuisine is born from the marriage of time-honored traditions and bold creativity.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="pt-6"
            >
              <div className="h-1 w-32 bg-gradient-to-r from-gold-500 to-gold-600 mb-8"></div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                    className="text-center group"
                  >
                    <div className="bg-gradient-to-br from-primary-600 to-primary-700 p-3 rounded-full w-16 h-16 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="text-white w-full h-full" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary-600 font-serif">{stat.number}</h3>
                    <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative group">
              <motion.img
                whileHover={{ scale: 1.02 }}
                src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Trenditional House interior" 
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover transition-transform duration-500"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-600/30 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-2xl border border-gold-200"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-gold-400 to-gold-600 p-3 rounded-full">
                    <Heart className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-primary-600 text-lg">Crafted with Love</h4>
                    <p className="text-gray-600 text-sm">Every dish tells a story</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;