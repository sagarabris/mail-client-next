"use client"

import { Sparkles } from 'lucide-react';

export function Header() {
  return (
    <div 
      className="w-full bg-white border-b border-gray-200/50"
    >
      <header className="container max-w-5xl mx-auto py-4 md:py-6 px-2 md:px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-6 w-6 text-black" />
            <span className="text-xl font-bold text-black">RemoteAgent</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {/* {['Features', 'How It Works', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
              >
                {item}
              </a>
            ))} */}
            <button className="text-sm font-medium text-gray-700 hover:text-black transition-colors bg-black text-white px-4 py-2 rounded-full">clora@remoteagent.com</button>
          </nav>
        </div>
      </header>
    </div>
  );
} 