import { useEffect, useState } from "react";

export default function HeroSection() {
  const [typingText, setTypingText] = useState("");
  const fullText = "Full Stack Developer & SDE";

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
              Chandan Kumar Sah
            </h1>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate mb-8" data-testid="tagline">
              I build things for the web.
            </h2>
            <div className="font-mono text-xl text-secondary mb-8 h-8" data-testid="typing-text">
              {typingText}
              <span className="animate-pulse">|</span>
            </div>
            <p className="text-lg text-slate leading-relaxed max-w-2xl mb-12" data-testid="description">
              Result-driven computer science graduate with 6+ months of hands-on experience as a full stack developer. 
              Currently working at Mithila Stack, developing scalable applications using React, Node.js, and TypeScript.
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
              <div className="bg-black rounded-xl w-full h-96 relative overflow-hidden glow-effect border border-secondary border-opacity-30" data-testid="dynamic-screen">
                {/* Screen Header */}
                <div className="bg-slate bg-opacity-20 p-2 flex items-center justify-between border-b border-secondary border-opacity-30">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-coral rounded-full"></div>
                    <div className="w-3 h-3 bg-highlight rounded-full"></div>
                    <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  </div>
                  <div className="text-slate text-xs font-mono">terminal</div>
                </div>
                
                {/* Terminal Content */}
                <div className="p-4 h-full overflow-hidden">
                  <div className="space-y-2 text-sm font-mono">
                    <div className="text-secondary animate-pulse">
                      <span className="text-highlight">$</span> npm start
                    </div>
                    <div className="text-slate animate-fade-in" style={{animationDelay: '0.5s'}}>
                      Starting development server...
                    </div>
                    <div className="text-secondary animate-fade-in" style={{animationDelay: '1s'}}>
                      ✓ Server running on port 3000
                    </div>
                    <div className="text-slate animate-fade-in" style={{animationDelay: '1.5s'}}>
                      <span className="text-highlight">$</span> git status
                    </div>
                    <div className="text-secondary animate-fade-in" style={{animationDelay: '2s'}}>
                      On branch main
                    </div>
                    <div className="text-slate animate-fade-in" style={{animationDelay: '2.5s'}}>
                      Your branch is up to date
                    </div>
                    
                    {/* Code Animation */}
                    <div className="mt-4 space-y-1 animate-fade-in" style={{animationDelay: '3s'}}>
                      <div className="text-coral">const developer = {`{`}</div>
                      <div className="text-slate ml-4">name: <span className="text-secondary">'Chandan'</span>,</div>
                      <div className="text-slate ml-4">skills: <span className="text-highlight">['React', 'Node.js']</span>,</div>
                      <div className="text-slate ml-4">passion: <span className="text-secondary">'Full Stack'</span></div>
                      <div className="text-coral">{`}`};</div>
                    </div>
                    
                    {/* Typing Cursor */}
                    <div className="text-secondary mt-4">
                      <span className="text-highlight">$</span> <span className="animate-pulse">|</span>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-20 right-4 w-2 h-2 bg-secondary rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                  <div className="absolute bottom-20 left-4 w-1 h-1 bg-coral rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
                  <div className="absolute top-32 right-8 w-1 h-1 bg-highlight rounded-full animate-ping" style={{animationDelay: '3s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
