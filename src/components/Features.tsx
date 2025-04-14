"use client"

import { Clock, CheckSquare, Bell } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Clock,
    title: "Available 24×7 Over Email",
    description: "Ready to assist you any time of day or night"
  },
  {
    icon: CheckSquare,
    title: "Completes Tasks Autonomously",
    description: "Works independently to solve your problems"
  },
  {
    icon: Bell,
    title: "Reminds You about What Matters",
    description: "Keeps track of your priorities so you don't have to"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-black">
            Your Personal Email Assistant
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Clora lives inside your inbox and becomes a member of your personal team
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                <div className="
                  p-8 rounded-2xl border border-gray-100 bg-white
                  transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,0,0,0.05)]
                  hover:-translate-y-1
                ">
                  <div className="
                    inline-block p-4 rounded-xl mb-6
                    bg-gray-50 border border-gray-100
                  ">
                    <Icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-black">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
                {/* Subtle hover effect */}
                <div className="
                  absolute -z-10 inset-0 rounded-2xl opacity-0
                  group-hover:opacity-100 transition-opacity duration-300
                  bg-gradient-to-b from-gray-50/50 to-transparent
                " />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
} 