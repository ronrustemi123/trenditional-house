import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Calendar, Users, MessageSquare, CheckCircle } from 'lucide-react';

const Reservations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Reservation submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      description: 'Call us for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'reservations@trenditionalhouse.com',
      description: 'Send us your inquiries'
    },
    {
      icon: MapPin,
      title: 'Address',
      content: '123 Culinary Avenue, Gourmet District',
      description: 'Visit our elegant location'
    },
    {
      icon: Clock,
      title: 'Hours',
      content: 'Available from 17:00 – 23:00',
      description: 'Daily dining hours'
    }
  ];

  return (
    <section id="reservations" className="py-24 bg-gradient-to-b from-white to-luxury-cream relative overflow-hidden">
      {/* Background Elements */}


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Calendar className="text-gold-600" size={32} />
            <p className="text-gold-600 font-script text-2xl">Book Your Table</p>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-primary-600 mb-6">
            <span className="gradient-text">Reservations</span>
          </h2>
          
          <div className="h-1 w-32 bg-gradient-to-r from-gold-500 to-gold-600 mx-auto mb-6"></div>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Secure your table for an unforgettable dining experience where culinary artistry meets exceptional service
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 p-8 rounded-2xl text-white shadow-2xl">
              <h3 className="text-3xl font-serif font-bold mb-8 text-center">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start space-x-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="bg-gold-500 p-3 rounded-full">
                      <info.icon size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-1">{info.title}</h4>
                      <p className="text-gold-200 font-medium mb-1">{info.content}</p>
                      <p className="text-gray-300 text-sm">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Policy Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="bg-gold-50 p-6 rounded-xl border-l-4 border-gold-500 shadow-lg"
            >
              <h4 className="font-serif font-bold text-primary-600 text-xl mb-3">Reservation Policy</h4>
              <div className="space-y-2 text-gray-700">
                <p className="text-sm leading-relaxed">
                  • We recommend booking at least 48 hours in advance
                </p>
                <p className="text-sm leading-relaxed">
                  • For parties of 8 or more, please call directly
                </p>
                <p className="text-sm leading-relaxed">
                  • Reservations are held for 15 minutes past scheduled time
                </p>
                <p className="text-sm leading-relaxed">
                  • Dress code: Smart casual to formal attire
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Reservation Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-2xl shadow-2xl border border-gold-200"
          >
            <h3 className="text-3xl font-serif font-bold text-primary-600 mb-8 text-center">
              Reserve Your Table
            </h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="text-green-500 mx-auto mb-4" size={64} />
                <h4 className="text-2xl font-serif font-bold text-primary-600 mb-2">
                  Reservation Submitted!
                </h4>
                <p className="text-gray-600">
                  We'll contact you shortly to confirm your reservation.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      required
                      onChange={(e) => handleChange('name', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}

                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-2">
                      Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={(e) => handleChange('date', e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-300"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    <label htmlFor="time" className="block text-sm font-semibold text-gray-700 mb-2">
                      Time *
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={(e) => handleChange('time', e.target.value)}

                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-300"
                    >
                      <option value="">Select time</option>
                      <option value="17:00">5:00 PM</option>
                      <option value="17:30">5:30 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="18:30">6:30 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="19:30">7:30 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="20:30">8:30 PM</option>
                      <option value="21:00">9:00 PM</option>
                      <option value="21:30">9:30 PM</option>
                      <option value="22:00">10:00 PM</option>
                    </select>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6, duration: 0.6 }}
                  >
                    <label htmlFor="guests" className="block text-sm font-semibold text-gray-700 mb-2">
                      Guests *
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={(e) => handleChange('guests', e.target.value)}

                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-300"
                    >
                      <option value="">Select guests</option>
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5 Guests</option>
                      <option value="6">6 Guests</option>
                      <option value="7">7 Guests</option>
                      <option value="8+">8+ Guests</option>
                    </select>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Special Requests
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}

                    rows={4}
                    placeholder="Any special dietary requirements, allergies, or occasion details..."
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-300 resize-none"
                  />
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform shadow-lg hover:shadow-xl"
                >
                  Request Reservation
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Reservations;