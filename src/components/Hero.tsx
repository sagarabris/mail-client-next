"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";

const prompts = [
  "🤖 AirBnb Local Guide",
  "🛡️ Market Report",
  "🎯 Business Plan",
  "📄 Summarize Email",
  "📧 Real Estate Agent",
  "📊 Competitor Benchmarking",
  "🔍 Emerging Technologies",
  "🌐 Investment Opportunity Evaluation",
  "👩‍💼 SWOT Analysis",
  "🔍 Product Feature Comparison",
];

export function Hero() {
  const router = useRouter();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedPrompt, setSelectedPrompt] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
    setIsDialogOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePromptClick = (prompt: string) => {
    // Create a URL-friendly version of the prompt
    const promptId = encodeURIComponent(prompt.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase());
    router.push(`/prompt/${promptId}`);
  };

  return (
    <section className="min-h-[85vh] flex items-center justify-center relative bg-white overflow-hidden">
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0, 0, 0, 0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      />
      {/* Sparkles container */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: '2px',
              height: '2px',
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              boxShadow: '0 0 4px 1px rgba(255, 255, 255, 0.7)',
              borderRadius: '50%',
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      <div 
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: 'linear-gradient(to bottom, transparent, white)'
        }}
      />
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
        .marquee-rtl {
          display: flex;
          animation: scroll-rtl 15s linear infinite;
          white-space: nowrap;
          will-change: transform;
        }

        .marquee-ltr {
          display: flex;
          animation: scroll-ltr 12s linear infinite;
          white-space: nowrap;
          will-change: transform;
        }

        @keyframes scroll-rtl {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-ltr {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .marquee-container {
          overflow: hidden;
          mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
        }

        .marquee-rtl:hover,
        .marquee-ltr:hover {
          animation-play-state: paused;
        }
      `}</style>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px] p-6">
          <div className="flex justify-between items-start">
            <DialogTitle className="text-2xl font-semibold">{selectedPrompt}</DialogTitle>
          </div>
          <DialogDescription className="text-sm text-gray-500 mt-2">
            Fill in your details and we'll help you with your request.
          </DialogDescription>
          <form onSubmit={handleSubmit} className="space-y-5 mt-6">
            <div className="space-y-3">
              <Label htmlFor="name" className="text-base">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="h-11 border-gray-200"
              />
            </div>
            <div className="space-y-3">
              <Label htmlFor="email" className="text-base">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="h-11 border-gray-200"
              />
            </div>
            <div className="space-y-3">
              <Label htmlFor="message" className="text-base">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="resize-none min-h-[120px] border-gray-200"
              />
            </div>
            <Button type="submit" className="w-full bg-black hover:bg-gray-800 text-white h-11 text-base">
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <div className="container relative max-w-4xl mx-auto px-4 py-8 md:py-12 z-10">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 border border-green-200 gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-green-800">Now Live</span>
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-black text-center tracking-tight">
          Meet Clora
          <span className="block text-2xl md:text-3xl lg:text-4xl mt-4 font-light text-gray-600">
            World's First Email-Use Agent
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-black max-w-2xl mx-auto mb-8 text-center leading-relaxed font-light">
        Your Remote Agent for daily tasks available 24/7 over email
        </p>

        <div className="space-y-2">
          {/* First row - right to left */}
          <div className="marquee-container">
            <div className="marquee-rtl">
              {[...prompts, ...prompts].map((text, index) => (
                <span 
                  key={`rtl-${index}`} 
                  className="mx-2 text-sm font-medium text-black bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 hover:border-gray-200 transition-all duration-300 cursor-pointer"
                  onClick={() => handlePromptClick(text)}
                >
                  {text}
                </span>
              ))}
            </div>
          </div>

          {/* Second row - left to right */}
          <div className="marquee-container">
            <div className="marquee-ltr">
              {[...prompts.reverse(), ...prompts].map((text, index) => (
                <span 
                  key={`ltr-${index}`} 
                  className="mx-2 text-sm font-medium text-black bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 hover:border-gray-200 transition-all duration-300 cursor-pointer"
                  onClick={() => handlePromptClick(text)}
                >
                  {text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 