import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTypingComplete(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary bg-opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-coral bg-opacity-5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1000ms' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-highlight bg-opacity-3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2000ms' }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left animate-fade-in">
            <p className="text-secondary font-mono text-lg mb-4" data-testid="greeting">
              Hi, my name is
            </p>
            <h1 className="text-6xl lg:text-7xl font-bold mb-6 text-glow" data-testid="name">
              Alex Chen
            </h1>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate mb-8" data-testid="tagline">
              I build things for the web.
            </h2>
            <div 
              className={`font-mono text-xl text-secondary mb-8 w-fit ${
                typingComplete ? 'typing-animation' : ''
              }`}
              data-testid="typing-text"
            >
              Full Stack Developer & UI/UX Enthusiast
            </div>
            <p className="text-lg text-slate leading-relaxed max-w-2xl mb-12" data-testid="description">
              I'm a passionate full-stack developer specializing in building exceptional digital experiences. 
              Currently focused on creating accessible, human-centered products with modern technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="glassmorphism px-8 py-4 rounded-lg text-secondary border-secondary hover:bg-secondary hover:text-primary-foreground transition-all duration-300 glow-effect"
                data-testid="button-view-work"
              >
                View My Work
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 rounded-lg border border-slate text-slate hover:bg-slate hover:text-primary transition-all duration-300"
                data-testid="button-get-in-touch"
              >
                Get In Touch
              </Button>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="glassmorphism rounded-2xl p-8 animate-slide-up" data-testid="hero-image">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Modern developer workspace setup with multiple monitors" 
                className="rounded-xl w-full h-auto glow-effect" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
