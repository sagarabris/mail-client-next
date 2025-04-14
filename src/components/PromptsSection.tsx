"use client"

import { useState } from 'react';
import PromptBubble from './PromptBubble';
import { ContactDialog } from './ContactDialog';
import { Zap, Bot, ShoppingBag, FileSearch } from 'lucide-react';

// Define the prompt data structure
interface Prompt {
  id: string;
  text: string;
  icon: React.ReactNode;
}

const prompts: Prompt[] = [
  { 
    id: 'general', 
    text: 'generate an agent for tweet every monday',
    icon: <Zap className="h-5 w-5" />
  },
  { 
    id: 'support', 
    text: 'content moderation',
    icon: <Bot className="h-5 w-5" />
  },
  { 
    id: 'pricing', 
    text: 'personalized recommendations on e-commerce sites',
    icon: <ShoppingBag className="h-5 w-5" />
  },
  { 
    id: 'document', 
    text: 'summarize a document',
    icon: <FileSearch className="h-5 w-5" />
  },
];

export function PromptsSection() {
  const [selectedPrompt, setSelectedPrompt] = useState<Prompt | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handlePromptClick = (prompt: Prompt) => {
    setSelectedPrompt(prompt);
    setIsDialogOpen(true);
  };

  return (
    <div className="w-full overflow-hidden bg-white">
      <div className="container max-w-7xl mx-auto pt-2 pb-6 md:pb-8 px-4">
        <div className="space-y-8">
          {/* First row - moving right to left */}
          <div className="relative w-full overflow-hidden">
            <div className="flex space-x-4 animate-marquee-rtl">
              {[...prompts, ...prompts].map((prompt, index) => (
                <div key={`${prompt.id}-${index}-1`} className="flex-shrink-0">
                  <PromptBubble 
                    text={prompt.text}
                    icon={prompt.icon}
                    onClick={() => handlePromptClick(prompt)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Second row - moving left to right */}
          <div className="relative w-full overflow-hidden">
            <div className="flex space-x-4 animate-marquee-ltr">
              {[...prompts, ...prompts].map((prompt, index) => (
                <div key={`${prompt.id}-${index}-2`} className="flex-shrink-0">
                  <PromptBubble 
                    text={prompt.text}
                    icon={prompt.icon}
                    onClick={() => handlePromptClick(prompt)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {selectedPrompt && (
          <ContactDialog 
            prompt={selectedPrompt}
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
          />
        )}
      </div>
    </div>
  );
}
