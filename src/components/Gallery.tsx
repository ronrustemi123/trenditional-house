import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Camera, Heart, Star } from 'lucide-react';

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const images = [
    {
      src: "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Elegant dining room",
      category: "Ambiance"
    },
    {
      src: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Gourmet dish presentation",
      category: "Cuisine"
    },
    {
      src: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Fine dining setup",
      category: "Experience"
    },
    {
      src: "https://images.pexels.com/photos/1346347/pexels-photo-1346347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Chef preparing dish",
      category: "Craftsmanship"
    },
    {
      src: "https://images.pexels.com/photos/1552635/pexels-photo-1552635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Wine selection",
      category: "Beverages"
    },
    {
      src: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Restaurant ambiance",
      category: "Atmosphere"
    },
    {
      src: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Private dining area",
      category: "Private Dining"
    },
    {
      src: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Dessert presentation",
      category: "Desserts"
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-luxury-cream to-primary-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 border border-primary-600 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-gold-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-primary-600 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Camera className="text-gold-600" size={32} />
            <p className="text-gold-600 font-script text-2xl">Visual Journey</p>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-primary-600 mb-6">
            Our <span className="gradient-text">Gallery</span>
          </h2>
          
          <div className="h-1 w-32 bg-gradient-to-r from-gold-500 to-gold-600 mx-auto mb-6"></div>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A glimpse into our culinary artistry and elegant ambiance where every moment is crafted to perfection
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0, duration: 0 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-600/80 via-primary-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    <div className="flex items-center space-x-2 mb-2">
                      <Star className="text-gold-400" size={16} />
                      <span className="text-gold-300 text-sm font-medium">{image.category}</span>
                    </div>
                    <h3 className="text-lg font-serif font-bold mb-2">{image.alt}</h3>
                    <div className="flex items-center space-x-2">
                      <Heart className="text-gold-400" size={16} />
                      <span className="text-sm">Crafted with passion</span>
                    </div>
                  </div>
                </div>
                
                {/* Hover Border */}
                <div className="absolute inset-0 border-2 border-gold-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gold-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-primary-600 mb-4">
              Experience the Magic
            </h3>
            <p className="text-gray-600 mb-6">
              Every image tells a story of dedication, artistry, and the pursuit of culinary excellence. 
              Come and be part of our story.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#reservations')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Book Your Experience
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;