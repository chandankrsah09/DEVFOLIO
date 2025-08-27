import { useState, useEffect } from "react";

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionIndex = Array.from(document.querySelectorAll('section')).indexOf(entry.target as HTMLElement);
            setActiveSection(sectionIndex);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-50px 0px' }
    );

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (index: number) => {
    const sections = document.querySelectorAll('section');
    if (sections[index]) {
      sections[index].scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col space-y-4">
        {[0, 1, 2, 3, 4].map((index) => (
          <div
            key={index}
            onClick={() => scrollToSection(index)}
            className={`nav-dot w-3 h-3 rounded-full cursor-pointer ${
              activeSection === index 
                ? 'bg-secondary active shadow-lg' 
                : 'bg-slate bg-opacity-30'
            }`}
            data-testid={`nav-dot-${index}`}
          />
        ))}
      </div>
    </div>
  );
}
