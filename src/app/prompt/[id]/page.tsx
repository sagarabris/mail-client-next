"use client"

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Mail, Cog, Mailbox } from 'lucide-react';

enum ProcessState {
  SENDING = 'SENDING',
  PROCESSING = 'PROCESSING',
  RECEIVING = 'RECEIVING',
  COMPLETED = 'COMPLETED'
}

export default function PromptDemo({ params }: { params: { id: string } }) {
  const [state, setState] = useState<ProcessState>(ProcessState.SENDING);
  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const processPrompt = async () => {
      try {
        // Start sending
        setState(ProcessState.SENDING);
        await new Promise(resolve => setTimeout(resolve, 1500)); // Animation delay

        // Processing
        setState(ProcessState.PROCESSING);
        const res = await fetch('/api/process-prompt', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ promptId: params.id }),
        });

        if (!res.ok) {
          throw new Error('Failed to process prompt');
        }

        const data = await res.json();
        
        // Receiving
        setState(ProcessState.RECEIVING);
        await new Promise(resolve => setTimeout(resolve, 1500)); // Animation delay
        
        // Complete
        setState(ProcessState.COMPLETED);
        setResponse(data.data.response);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setState(ProcessState.COMPLETED);
      }
    };

    processPrompt();
  }, [params.id]);

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-red-50 p-4 rounded-lg">
            <h2 className="text-red-800 font-semibold">Error</h2>
            <p className="text-red-600">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Processing Your Request</h1>
        
        <div className="relative h-64 mb-8">
          <AnimatePresence mode="wait">
            {state === ProcessState.SENDING && (
              <motion.div
                key="sending"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -100 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <motion.div
                  animate={{
                    x: [0, 100],
                    y: [-20, 20],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <Mail className="w-16 h-16 text-blue-500" />
                </motion.div>
              </motion.div>
            )}

            {state === ProcessState.PROCESSING && (
              <motion.div
                key="processing"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                >
                  <Cog className="w-16 h-16 text-purple-500" />
                </motion.div>
              </motion.div>
            )}

            {state === ProcessState.RECEIVING && (
              <motion.div
                key="receiving"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, y: 100 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <motion.div
                  animate={{
                    y: [0, -20],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <Mailbox className="w-16 h-16 text-green-500" />
                </motion.div>
              </motion.div>
            )}

            {state === ProcessState.COMPLETED && response && (
              <motion.div
                key="completed"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full">
                  <h2 className="text-xl font-semibold mb-4">Response from Clora</h2>
                  <p className="text-gray-700">{response}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex justify-center space-x-4">
          {Object.values(ProcessState).map((processState) => (
            <div
              key={processState}
              className={`h-2 w-2 rounded-full ${
                state === processState ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 