"use client"

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";

const prompts = [
  "🤖 Create AI-powered social media content",
  "🛡️ Smart content moderation for your platform",
  "🎯 Generate personalized recommendations",
  "📄 Summarize documents instantly",
  "📧 Automate email responses",
  "📊 Analyze data in real-time",
  "🔍 Extract insights from text",
  "🌐 Translate content automatically"
];

export function Hero() {
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
    setSelectedPrompt(prompt);
    setIsDialogOpen(true);
  };

  return (
    <section className="min-h-[85vh] flex items-center justify-center bg-white">
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

      <div className="container max-w-4xl mx-auto px-4 py-8 md:py-12">
        <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold mb-8 text-black text-center whitespace-nowrap leading-none">
          Connect With Us Instantly
        </h1>
        
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-12 text-center">
          Simple, efficient communication with our team through dynamic prompts. 
          Get the answers you need without the hassle.
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