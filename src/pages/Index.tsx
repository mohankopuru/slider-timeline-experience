
import React, { useState, useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import ProfileSection from '@/components/ProfileSection';
import ExperienceSection from '@/components/ExperienceSection';
import InterestsSection from '@/components/InterestsSection';
import { TIMELINE_STAGES } from '@/lib/constants';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import AboutSection from '@/components/AboutSection';

const Index: React.FC = () => {
  const [currentStage, setCurrentStage] = useState(TIMELINE_STAGES[TIMELINE_STAGES.length - 1].id);
  const [isLoaded, setIsLoaded] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Simulate loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  const handleStageChange = (stageId: string) => {
    setCurrentStage(stageId);
    
    // Smooth scroll to content section when stage changes
    const contentSection = document.getElementById('content-section');
    if (contentSection) {
      setTimeout(() => {
        contentSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('Message sent successfully!', {
      description: 'Thanks for reaching out. I\'ll get back to you soon.',
    });
    
    // Reset form
    setName('');
    setEmail('');
    setMessage('');
    setIsSubmitting(false);
  };

  if (!isLoaded) {
    return (
      <div className="fixed inset-0 bg-netflix-black flex items-center justify-center z-50">
        <div className="flex flex-col items-center">
          <div className="text-netflix-red text-4xl font-bold mb-4 animate-netflix-pulse">
            DEVFLIX
          </div>
          <div className="w-12 h-12 border-4 border-netflix-red border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-netflix-black text-white overflow-x-hidden">
      <NavBar />
      
      <main>
        {/* About Section */}
        <AboutSection />
        
        {/* Hero Section with Timeline Slider */}
        <section className="relative">
          <Hero currentStage={currentStage} onStageChange={handleStageChange} />
        </section>
        
        {/* Content Section */}
        <section 
          id="content-section"
          className="relative min-h-screen py-16 bg-gradient-to-b from-netflix-black/80 to-netflix-dark"
        >
          {/* Content divider with Netflix style */}
          <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-transparent to-netflix-black/80 pointer-events-none"></div>
          
          {/* Stage Content */}
          <ProfileSection stageId={currentStage} />
          
          {/* Experience Section */}
          <ExperienceSection />
          
          {/* Interests Section */}
          <InterestsSection />
          
          {/* Contact Section */}
          <section 
            id="contact"
            className="mt-24 py-16 bg-netflix-dark/90 border-t border-white/10"
          >
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-netflix-red">Get in Touch</h2>
                  <p className="text-white/70 text-lg">Have a project in mind or want to chat? Send me a message!</p>
                </div>
                
                <div className="bg-netflix-black/70 backdrop-blur-sm p-6 md:p-10 rounded-lg border border-white/10 shadow-xl">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-white/80 mb-2">
                          Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-netflix-red text-white"
                          placeholder="Your name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-white/80 mb-2">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-netflix-red text-white"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-white/80 mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-netflix-red text-white resize-none"
                        placeholder="Your message..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`netflix-btn w-full py-4 ${isSubmitting ? 'opacity-70' : ''}`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : 'Send Message'}
                    </button>
                  </form>
                  
                  <div className="mt-10 pt-8 border-t border-white/10">
                    <h3 className="text-xl font-semibold mb-4">Other Ways to Connect</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                        <div className="bg-blue-600 p-2 rounded mr-3">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </div>
                        LinkedIn
                      </a>
                      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                        <div className="bg-gray-800 p-2 rounded mr-3">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                          </svg>
                        </div>
                        GitHub
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                        <div className="bg-blue-400 p-2 rounded mr-3">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                          </svg>
                        </div>
                        Twitter
                      </a>
                      <a href="mailto:devflix@example.com" className="flex items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                        <div className="bg-red-500 p-2 rounded mr-3">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        Email
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Footer */}
          <div className="mt-24 pt-10 pb-6 border-t border-white/10 text-center text-white/50 text-sm">
            <div className="max-w-xl mx-auto px-6">
              <p>
                © {new Date().getFullYear()} DEVFLIX • Inspired by Netflix
              </p>
              <p className="mt-2">
                Created with React, Tailwind CSS, and a passion for great UI/UX
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
