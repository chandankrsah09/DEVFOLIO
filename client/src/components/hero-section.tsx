import { useEffect, useState } from "react";

export default function HeroSection() {
  const [typingText, setTypingText] = useState("");
  const fullText = "Full Stack Developer & UI/UX Enthusiast";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypingText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary bg-opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-coral bg-opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-highlight bg-opacity-5 rounded-full blur-3xl animate-pulse"></div>
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
            <div className="font-mono text-xl text-secondary mb-8 h-8" data-testid="typing-text">
              {typingText}
              <span className="animate-pulse">|</span>
            </div>
            <p className="text-lg text-slate leading-relaxed max-w-2xl mb-12" data-testid="description">
              I'm a passionate full-stack developer specializing in building exceptional digital experiences. 
              Currently focused on creating accessible, human-centered products with modern technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={scrollToProjects}
                className="glassmorphism px-8 py-4 rounded-lg text-secondary border border-secondary hover:bg-secondary hover:text-primary-foreground transition-all duration-300 glow-effect"
                data-testid="button-view-work"
              >
                View My Work
              </button>
              <button 
                onClick={scrollToContact}
                className="px-8 py-4 rounded-lg border border-slate text-slate hover:bg-slate hover:text-primary transition-all duration-300"
                data-testid="button-get-in-touch"
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="glassmorphism rounded-2xl p-8 animate-slide-up">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Modern developer workspace setup with multiple monitors" 
                className="rounded-xl w-full h-auto glow-effect"
                data-testid="hero-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
