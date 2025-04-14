"use client"

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Sparkles } from 'lucide-react';

const fadeInUpVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export function Footer() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-gray-50 border-t border-gray-200/70"
    >
      <footer className="container max-w-7xl mx-auto py-12 md:py-16 px-2 md:px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <motion.div
            variants={fadeInUpVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <motion.div 
              className="flex items-center space-x-2 mb-4 md:mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Sparkles className="h-6 w-6 text-black" />
              <span className="text-xl font-bold text-black">RemoteAgent</span>
            </motion.div>
            <p className="text-gray-600 mb-6">
              Simplifying communication between you and our team with our dynamic prompt system.
            </p>
          </motion.div>
          
          <motion.div
            variants={fadeInUpVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4 md:mb-6 text-black">Quick Links</h3>
            <ul className="space-y-3">
              {['Features', 'How It Works', 'Contact'].map((link, index) => (
                <motion.li 
                  key={link}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <a 
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            variants={fadeInUpVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4 md:mb-6 text-black">Contact Info</h3>
            <ul className="space-y-4">
              {[
                { icon: <Mail className="h-5 w-5 mr-3 text-black" />, text: 'remoteagent@gmail.com' },
                { icon: <Phone className="h-5 w-5 mr-3 text-black" />, text: '+1 (555) 123-4567' },
                { icon: <MapPin className="h-5 w-5 mr-3 text-black" />, text: '123 Business Ave, Suite 100, City, ST 12345' }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.span
                    whileHover={{ rotate: 20 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.icon}
                  </motion.span>
                  <span className="text-gray-600">{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-gray-200 mt-8 md:mt-12 pt-6 md:pt-8 text-center text-gray-600"
        >
          <p>&copy; {new Date().getFullYear()} RemoteAgent. All rights reserved.</p>
        </motion.div>
      </footer>
    </motion.div>
  );
} 