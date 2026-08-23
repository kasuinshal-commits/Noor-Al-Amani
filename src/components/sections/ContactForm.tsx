import { useState } from 'react';
import type { FormEvent } from 'react';
import { Button } from '../ui/Button';
import { Send } from 'lucide-react';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg border border-neutral-100">
      <h3 className="text-2xl font-bold text-primary mb-6">Send us a Message</h3>
      
      {isSuccess && (
        <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg border border-green-200">
          Thank you for reaching out! Your message has been sent successfully. We will get back to you shortly.
        </div>
      )}

      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
          <input
            type="text"
            id="name"
            required
            className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
            placeholder="John Doe"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              id="phone"
              className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
              placeholder="+971 50 123 4567"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
          <textarea
            id="message"
            required
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all resize-y"
            placeholder="How can we help you?"
          ></textarea>
        </div>

        <Button type="submit" className="w-full gap-2" isLoading={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
          {!isSubmitting && <Send className="w-4 h-4" />}
        </Button>
      </div>
    </form>
  );
}