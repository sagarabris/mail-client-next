"use client"

import { motion } from 'framer-motion';
import { MessageSquare, Bot, Clock, Shield } from 'lucide-react';

const features = [
  {
    title: "Dynamic Prompts",
    description: "Choose from intelligent prompts designed to address your specific needs quickly.",
    icon: <MessageSquare className="w-8 h-8" />
  },
  {
    title: "AI-Powered Assistance",
    description: "Leverage advanced AI to get personalized solutions for your unique requirements.",
    icon: <Bot className="w-8 h-8" />
  },
  {
    title: "Quick Response",
    description: "Get timely answers to your questions without unnecessary back and forth.",
    icon: <Clock className="w-8 h-8" />
  },
  {
    title: "Secure Messaging",
    description: "Your information is protected with industry standard security protocols.",
    icon: <Shield className="w-8 h-8" />
  }
];

export function Features() {
  return (
    <div className="w-full bg-white">
      <section id="features" className="container max-w-7xl mx-auto py-20 px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-black"
        >
          Our Features
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="mb-6 text-black">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
} 