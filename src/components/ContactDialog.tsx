"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Check, Loader2, Mail } from 'lucide-react';
import { toast } from 'sonner';

interface ContactDialogProps {
  prompt: {
    id: string;
    text: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

// This would be replaced with a real email sending function in production
const simulateEmailSend = async (data: any): Promise<{ success: boolean; message: string }> => {
  // Simulate network request
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: "Thank you for your message. We'll get back to you soon!"
      });
    }, 2000); // 2 second delay to simulate network request
  });
};

export function ContactDialog({ prompt, isOpen, onClose }: ContactDialogProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    
    try {
      // In production, this would send an actual email to remoteagent@gmail.com
      const result = await simulateEmailSend({
        name,
        email,
        message,
        promptId: prompt.id,
        promptText: prompt.text,
        // This would be sent to remoteagent@gmail.com in production
      });
      
      setSubmitResult(result);
    } catch (error) {
      setSubmitResult({
        success: false,
        message: "There was an error sending your message. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
    setSubmitResult(null);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">{prompt.text}</DialogTitle>
          <DialogDescription>
            Fill out the form below and we'll get back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>

        <AnimatePresence mode="wait">
          {/* Show form if not submitted or if submission failed */}
          {(!submitResult || !submitResult.success) && (
            <motion.form 
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              onSubmit={handleSubmit} 
              className="space-y-4 pt-4"
            >
              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Label htmlFor="name">Your Name *</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  required
                />
              </motion.div>
              
              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Label htmlFor="email">Your Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="johndoe@example.com"
                  required
                />
              </motion.div>
              
              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us more about your inquiry..."
                  rows={3}
                  className="resize-none"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Mail className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </motion.div>
            </motion.form>
          )}
          
          {/* Show success message after submission */}
          {submitResult && submitResult.success && (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="flex flex-col items-center justify-center py-6 space-y-4"
            >
              <motion.div 
                className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center"
                initial={{ rotate: -180, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ type: "spring", duration: 0.5, delay: 0.2 }}
              >
                <Check className="h-6 w-6 text-green-600" />
              </motion.div>
              <motion.h3 
                className="text-lg font-medium text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                {submitResult.message}
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                <Button onClick={handleClose} className="mt-4">
                  Close
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
} 