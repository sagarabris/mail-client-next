"use client"

import React from 'react';
import { cn } from '@/lib/utils';

interface PromptBubbleProps {
  text: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const PromptBubble = ({ text, icon, onClick, className }: PromptBubbleProps) => {
  return (
    <button 
      className={cn(
        "py-2 md:py-3 px-3 md:px-5 rounded-full bg-gray-50/80 backdrop-blur-sm border border-gray-300/50 shadow-sm",
        "hover:shadow-md hover:bg-white/80 active:scale-95 transition-all duration-300",
        "flex items-center gap-2 md:gap-3 text-gray-800", 
        className
      )}
      onClick={onClick}
    >
      {icon && <span className="text-black">{icon}</span>}
      <span className="text-xs md:text-sm font-medium whitespace-nowrap">{text}</span>
    </button>
  );
};

export default PromptBubble;
