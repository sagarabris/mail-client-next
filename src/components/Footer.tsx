"use client"

import { MapPin, Sparkles } from 'lucide-react';

export function Footer() {
  return (
    <div className="w-full bg-gray-50 border-t border-gray-200/70">
      <footer className="container max-w-7xl mx-auto py-6 px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-6 w-6 text-black" />
            <span className="text-xl font-bold text-black">RemoteAgent</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="h-5 w-5 mr-2 text-black" />
            <span>123 Business Ave, Suite 100, City, ST 12345</span>
          </div>
        </div>
      </footer>
    </div>
  );
} 