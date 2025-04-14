"use client"

import { motion } from 'framer-motion';
import { MessageSquare, Send, Clock } from 'lucide-react';

const steps = [
  {
    icon: <MessageSquare className="h-8 w-8 text-black" />,
    number: 1,
    title: 'Select a Prompt',
    description: 'Choose from our dynamic prompts that best match your needs'
  },
  {
    icon: <Send className="h-8 w-8 text-black" />,
    number: 2,
    title: 'Send Your Message',
    description: 'Fill out the form with your details and requirements'
  },
  {
    icon: <Clock className="h-8 w-8 text-black" />,
    number: 3,
    title: 'Get Quick Response',
    description: 'Receive timely responses from our professional team'
  }
];

export function HowItWorks() {
  return (
    <div className="w-full bg-white">
      <section id="how-it-works" className="container max-w-7xl mx-auto py-16 md:py-24 px-2 md:px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-black"
        >
          How It Works
        </motion.h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Remove the dotted line div */}
          
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-8 md:gap-16`}
              >
                {/* Step number with icon */}
                <motion.div 
                  className="relative z-10 flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center">
                    <motion.div 
                      className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-sm"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {step.icon}
                    </motion.div>
                  </div>
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.2 + 1, type: "spring" }}
                    className="absolute top-0 right-0 w-8 h-8 rounded-full bg-black flex items-center justify-center text-white font-bold"
                  >
                    {step.number}
                  </motion.div>
                </motion.div>

                {/* Step content */}
                <div className={`text-center md:text-left ${
                  index % 2 === 1 ? 'md:text-right' : ''
                }`}>
                  <motion.h3 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.7 }}
                    className="text-2xl font-semibold mb-4 text-black"
                  >
                    {step.title}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.9 }}
                    className="text-gray-600 text-lg"
                  >
                    {step.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 