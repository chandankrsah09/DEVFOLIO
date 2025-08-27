import { useState, useEffect } from "react";

const sections = ['hero', 'about', 'skills', 'projects', 'contact'];

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '-50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionIndex = sections.indexOf(entry.target.id);
          if (sectionIndex !== -1) {
            setActiveSection(sectionIndex);
          }
        }
      });
    }, observerOptions);

    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (index: number) => {
    const element = document.getElementById(sections[index]);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block" data-testid="floating-nav">
      <div className="flex flex-col space-y-4">
        {sections.map((_, index) => (
          <div
            key={index}
            className={`nav-dot w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              activeSection === index 
                ? 'active bg-secondary' 
                : 'bg-slate bg-opacity-30 hover:bg-opacity-50'
            }`}
            onClick={() => scrollToSection(index)}
            data-testid={`nav-dot-${index}`}
          />
        ))}
      </div>
    </div>
  );
}
