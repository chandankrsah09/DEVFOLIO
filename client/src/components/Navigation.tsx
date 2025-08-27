import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glassmorphism" data-testid="navigation">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-secondary font-mono text-xl font-bold text-glow" data-testid="logo">
            &lt;AC /&gt;
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="hover:text-secondary transition-colors duration-300"
              data-testid="nav-about"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="hover:text-secondary transition-colors duration-300"
              data-testid="nav-projects"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="hover:text-secondary transition-colors duration-300"
              data-testid="nav-skills"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="hover:text-secondary transition-colors duration-300"
              data-testid="nav-contact"
            >
              Contact
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="mobile-menu-toggle"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-secondary" />
              ) : (
                <Menu className="h-6 w-6 text-secondary" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4" data-testid="mobile-menu">
            <button 
              onClick={() => scrollToSection('about')}
              className="block hover:text-secondary transition-colors duration-300"
              data-testid="mobile-nav-about"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="block hover:text-secondary transition-colors duration-300"
              data-testid="mobile-nav-projects"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="block hover:text-secondary transition-colors duration-300"
              data-testid="mobile-nav-skills"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block hover:text-secondary transition-colors duration-300"
              data-testid="mobile-nav-contact"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
