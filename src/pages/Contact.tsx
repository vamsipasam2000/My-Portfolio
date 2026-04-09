import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    try {
      const response = await fetch("https://formsubmit.co/ajax/vamsipasam2k@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: `${firstName} ${lastName}`,
            email: email,
            subject: subject,
            message: message,
            _subject: `New Portfolio Contact: ${subject}`,
            _replyto: email
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (err) {
      setError('Something went wrong. Please try again or email me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-gray-100 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-400 mb-12">
            Whether you have a question about my research, want to discuss a potential opportunity, or just want to say hi, I'll try my best to get back to you!
          </p>

          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-brand-surface border border-brand-border rounded-2xl p-12 text-center"
            >
              <CheckCircle2 className="h-16 w-16 text-brand-accent mx-auto mb-6" />
              <h2 className="text-2xl font-display font-bold text-gray-100 mb-4">Message Sent!</h2>
              <p className="text-gray-400 mb-8">
                Thanks for reaching out. I'll get back to you as soon as possible.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="inline-flex items-center justify-center rounded-lg bg-brand-surface border border-brand-border px-6 py-3 text-sm font-medium text-gray-100 shadow-sm hover:bg-brand-border transition-all"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-brand-surface border border-brand-border rounded-2xl p-8 sm:p-10">
              {error && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-sm">
                  {error}
                </div>
              )}
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName"
                    required
                    className="w-full bg-brand-bg border border-brand-border rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName"
                    required
                    className="w-full bg-brand-bg border border-brand-border rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  className="w-full bg-brand-bg border border-brand-border rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
                  placeholder="john.doe@example.com"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  required
                  className="w-full bg-brand-bg border border-brand-border rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
                  placeholder="Discussing an AI opportunity"
                />
              </div>
              
              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={6}
                  required
                  className="w-full bg-brand-bg border border-brand-border rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all resize-none"
                  placeholder="Hi Vamsi, I'd like to talk about..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center rounded-lg bg-brand-accent px-6 py-4 text-base font-medium text-brand-bg shadow-sm hover:bg-brand-accent-hover transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    Sending...
                    <Loader2 className="ml-2 h-5 w-5 animate-spin" />
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
