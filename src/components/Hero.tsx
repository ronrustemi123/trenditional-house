import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Parallax Effect */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat parallax"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-600/80 via-primary-600/60 to-black/80" />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <Star className="text-gold-400 opacity-30" size={24} />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
          <Star className="text-gold-400 opacity-20" size={16} />
        </div>
        <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '4s' }}>
          <Star className="text-gold-400 opacity-25" size={20} />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-gold-300 font-script text-2xl md:text-3xl mb-4"
          >
            Welcome to
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold mb-6 tracking-wide text-shadow"
          >
            <span className="gradient-text">Trenditional</span>
            <br />
            <span className="text-white">House</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '200px' }}
            transition={{ delay: 1, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mb-8"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-xl md:text-3xl font-light tracking-wider opacity-90 mb-12 font-serif"
          >
            A Fusion of Heritage & Haute Cuisine
          </motion.p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="space-y-6"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(212, 175, 55, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#reservations')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white px-12 py-4 text-lg font-medium tracking-wide transition-all duration-300 transform shadow-2xl relative overflow-hidden group"
          >
            <span className="relative z-10">Reserve Your Table</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold-600 to-gold-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </motion.button>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="text-gold-200 text-sm font-light"
          >
            Experience culinary excellence where tradition meets innovation
          </motion.p>
        </motion.div>
      </div>
      

    </section>
  );
};

export default Hero;