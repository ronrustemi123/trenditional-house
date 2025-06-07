import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Leaf, Flame, Star, ChefHat } from 'lucide-react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('starters');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const categories = [
    { id: 'starters', name: 'Starters', icon: Star },
    { id: 'mains', name: 'Main Courses', icon: ChefHat },
    { id: 'desserts', name: 'Desserts', icon: Star },
    { id: 'drinks', name: 'Beverages', icon: Star }
  ];

  const menuItems = {
    starters: [
      {
        name: 'Heritage Bruschetta',
        description: 'Artisanal sourdough topped with heirloom tomatoes, fresh basil, and aged balsamic reduction',
        price: '$18',
        tags: ['vegan'],
        featured: true
      },
      {
        name: 'Seared Scallops',
        description: 'Pan-seared scallops with cauliflower purée, pancetta crisps, and microgreens',
        price: '$26',
        tags: []
      },
      {
        name: 'Truffle Arancini',
        description: 'Creamy risotto balls infused with black truffle, parmesan, and herb oil',
        price: '$22',
        tags: []
      },
      {
        name: 'Tuna Tartare',
        description: 'Fresh yellowfin tuna with avocado, citrus, and sesame wafer',
        price: '$24',
        tags: []
      }
    ],
    mains: [
      {
        name: 'Wagyu Beef Tenderloin',
        description: 'Grade A5 wagyu with roasted vegetables, truffle jus, and red wine reduction',
        price: '$65',
        tags: [],
        featured: true
      },
      {
        name: 'Heritage Chicken',
        description: 'Free-range chicken breast with wild mushroom risotto and herb jus',
        price: '$38',
        tags: []
      },
      {
        name: 'Spiced Lamb Rack',
        description: 'New Zealand lamb with harissa glaze, Mediterranean vegetables, and mint yogurt',
        price: '$42',
        tags: ['spicy']
      },
      {
        name: 'Wild Mushroom Risotto',
        description: 'Creamy arborio rice with seasonal wild mushrooms, truffle oil, and aged parmesan',
        price: '$28',
        tags: ['vegan']
      }
    ],
    desserts: [
      {
        name: 'Chocolate Decadence',
        description: 'Rich dark chocolate mousse with gold leaf, raspberry coulis, and vanilla cream',
        price: '$16',
        tags: [],
        featured: true
      },
      {
        name: 'Vanilla Bean Crème Brûlée',
        description: 'Classic French custard with Madagascar vanilla and caramelized sugar',
        price: '$14',
        tags: []
      },
      {
        name: 'Seasonal Fruit Tart',
        description: 'Fresh seasonal fruits on almond cream with honey glaze and mint',
        price: '$15',
        tags: ['vegan']
      }
    ],
    drinks: [
      {
        name: 'Signature Cocktails',
        description: 'Craft cocktails featuring premium spirits, house-made syrups, and fresh ingredients',
        price: '$18-24',
        tags: []
      },
      {
        name: 'Wine Selection',
        description: 'Curated collection of old and new world wines by the glass or bottle',
        price: '$12-45',
        tags: []
      },
      {
        name: 'Artisan Coffee',
        description: 'Single-origin coffee beans roasted in-house, served with traditional methods',
        price: '$8-12',
        tags: []
      }
    ]
  };

  return (
    <section id="menu" className="py-24 bg-gradient-to-b from-white to-luxury-cream relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 right-20 w-40 h-40 border-2 border-primary-600 rounded-full"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 border-2 border-gold-400 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold-600 font-script text-2xl mb-4">Culinary Excellence</p>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-primary-600 mb-6">
            Our <span className="gradient-text">Menu</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-gold-500 to-gold-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of dishes, where each creation tells a story of tradition and innovation
          </p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-8 py-4 rounded-full transition-all duration-300 font-medium ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-xl'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-lg border border-gray-200'
              }`}
            >
              <category.icon size={20} />
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Menu Items */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {menuItems[activeCategory].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`group p-8 rounded-2xl transition-all duration-300 relative overflow-hidden ${
                item.featured 
                  ? 'bg-gradient-to-br from-primary-600 to-primary-700 text-white shadow-2xl' 
                  : 'bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl border border-gray-100'
              }`}
            >
              {item.featured && (
                <div className="absolute top-4 right-4">
                  <div className="bg-gold-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Chef's Special
                  </div>
                </div>
              )}
              
              <div className="flex justify-between items-start mb-4">
                <h3 className={`text-2xl font-serif font-bold transition-colors ${
                  item.featured ? 'text-white' : 'text-primary-600 group-hover:text-primary-700'
                }`}>
                  {item.name}
                </h3>
                <span className={`text-2xl font-bold ml-4 ${
                  item.featured ? 'text-gold-300' : 'text-gold-600'
                }`}>
                  {item.price}
                </span>
              </div>
              
              <p className={`leading-relaxed mb-4 ${
                item.featured ? 'text-gray-100' : 'text-gray-600'
              }`}>
                {item.description}
              </p>
              
              <div className="flex gap-3">
                {item.tags.map((tag) => (
                  <span key={tag} className={`flex items-center gap-1 text-sm px-3 py-1 rounded-full ${
                    item.featured 
                      ? 'bg-white/20 text-white' 
                      : 'bg-green-100 text-green-700'
                  }`}>
                    {tag === 'vegan' && <Leaf size={14} />}
                    {tag === 'spicy' && <Flame size={14} />}
                    {tag === 'vegan' && 'Vegan'}
                    {tag === 'spicy' && 'Spicy'}
                  </span>
                ))}
              </div>
              
              {/* Hover Effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                !item.featured ? 'bg-gradient-to-r from-primary-600/5 to-gold-500/5' : ''
              }`}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#reservations')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white px-10 py-4 rounded-full font-medium text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Reserve Your Table
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;