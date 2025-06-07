import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Star, Wine, Utensils, Crown, Calendar, Gift, Sparkles } from 'lucide-react';

const PrivateDining = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: Users,
      title: 'Intimate Gatherings',
      description: '2-12 guests',
      detail: 'Perfect for special celebrations'
    },
    {
      icon: Star,
      title: 'Personalized Service',
      description: 'Dedicated staff',
      detail: 'Exclusive attention to every detail'
    },
    {
      icon: Wine,
      title: 'Curated Pairings',
      description: 'Wine & cocktails',
      detail: 'Expert sommelier selections'
    },
    {
      icon: Utensils,
      title: 'Custom Menus',
      description: "Chef's selection",
      detail: 'Tailored to your preferences'
    }
  ];

  const experiences = [
    {
      icon: Crown,
      title: 'Anniversary Celebrations',
      description: 'Romantic settings with personalized touches'
    },
    {
      icon: Gift,
      title: 'Corporate Events',
      description: 'Professional atmosphere for business dining'
    },
    {
      icon: Calendar,
      title: 'Birthday Parties',
      description: 'Memorable celebrations with custom cakes'
    },
    {
      icon: Sparkles,
      title: 'Special Occasions',
      description: 'Any milestone deserves our finest service'
    }
  ];

  return (
    <section id="private-dining" className="py-24 bg-gradient-to-b from-primary-600 to-primary-800 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 border border-gold-400 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 border border-gold-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-gold-400 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-gold-300 font-script text-2xl mb-4"
              >
                Exclusive Experiences
              </motion.p>
              
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl md:text-6xl font-serif font-bold mb-8 leading-tight"
              >
                Private <span className="gradient-text">Dining</span>
              </motion.h2>
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl text-gray-200 leading-relaxed"
            >
              Elevate your special occasions with our exclusive private dining experiences. 
              Whether it's an intimate celebration, corporate event, or milestone gathering, 
              our dedicated team creates unforgettable moments tailored to your vision.
            </motion.p>
          </motion.div>
            
            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="grid grid-cols-2 gap-6 py-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center group p-4 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                >
                  <div className="bg-gradient-to-br from-gold-400 to-gold-600 p-3 rounded-full w-16 h-16 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="text-white w-full h-full" />
                  </div>
                  <h3 className="font-serif font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gold-300 text-sm font-medium mb-1">{feature.description}</p>
                  <p className="text-gray-300 text-xs">{feature.detail}</p>
                </motion.div>
              ))}
            </motion.div>
            

            {/* Experience Types */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1, duration: 0.8 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-serif font-bold text-gold-300 mb-4">Perfect For:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 1.1 + index * 0.1, duration: 0.6 }}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
                  >
                    <exp.icon className="text-gold-400" size={20} />
                    <div>
                      <h4 className="font-semibold text-sm">{exp.title}</h4>
                      <p className="text-gray-300 text-xs">{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.3, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#reservations')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform shadow-xl hover:shadow-2xl"
            >
              Inquire Now
            </motion.button>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative group">
              <motion.img
                whileHover={{ scale: 1.02 }}
                src="https://images.pexels.com/photos/3201921/pexels-photo-3201921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Private dining room" 
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover transition-transform duration-500"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-600/40 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute -top-8 -left-8 bg-white p-6 rounded-xl shadow-2xl border border-gold-200"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-primary-600 to-primary-700 p-3 rounded-full">
                    <Crown className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-primary-600 text-lg">VIP Experience</h4>
                    <p className="text-gray-600 text-sm">Luxury redefined</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-2xl border border-gold-200"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-gold-400 to-gold-600 p-3 rounded-full">
                    <Sparkles className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-primary-600 text-lg">Memorable Moments</h4>
                    <p className="text-gray-600 text-sm">Crafted with care</p>
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

export default PrivateDining;