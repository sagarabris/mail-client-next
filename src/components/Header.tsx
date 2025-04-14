"use client"

import { Sparkles } from 'lucide-react';

export function Header() {
  return (
    <div 
      className="w-full bg-white sticky top-0 z-50 border-b border-gray-200/50 backdrop-blur-sm"
    >
      <header className="container max-w-7xl mx-auto py-4 md:py-6 px-2 md:px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-6 w-6 text-black" />
            <span className="text-xl font-bold text-black">RemoteAgent</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {['Features', 'How It Works', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>
    </div>
  );
} 