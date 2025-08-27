import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern, full-stack e-commerce platform built with React, Node.js, and PostgreSQL. Features include real-time inventory management, secure payment processing, and an intuitive admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
      bgColor: "bg-secondary",
      bgOpacity: "bg-opacity-10"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with Next.js and Socket.io for seamless real-time experience.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["Next.js", "Socket.io", "MongoDB", "Prisma"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
      bgColor: "bg-coral",
      bgOpacity: "bg-opacity-10",
      reverse: true
    },
    {
      title: "AI-Powered Analytics",
      description: "An intelligent analytics dashboard that leverages machine learning to provide actionable insights. Features predictive analytics, data visualization, and automated reporting capabilities.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["Python", "TensorFlow", "D3.js", "FastAPI"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
      bgColor: "bg-highlight",
      bgOpacity: "bg-opacity-10"
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const displayProjects = showAllProjects ? projects : featuredProjects;

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-glow" data-testid="projects-title">
            <span className="text-secondary font-mono">03.</span> Featured Projects
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="space-y-16">
          {displayProjects.map((project, index) => (
            <div 
              key={index}
              className="project-card glassmorphism rounded-2xl overflow-hidden"
              data-testid={`project-${index}`}
            >
              <div className={`# thoughts

Looking at the design reference, I need to create a cutting-edge full-stack developer portfolio website with unique animations, glassmorphism effects, and modern design. The design shows a dark theme with neon accents, featuring sections for hero, about, skills, projects, and contact.

Key elements to implement:
1. Dark theme with the specified color palette (Primary #0F0F23, Secondary #64FFDA, etc.)
2. Glassmorphism effects with backdrop blur
3. Smooth animations and micro-interactions
4. Modern typography with JetBrains Mono and Inter fonts
5. Professional project showcase with live demos
6. Interactive skills display
7. Contact form with validation
8. Responsive design with asymmetric layouts

I'll need to:
- Create custom CSS variables for the color palette
- Implement React components for each section
- Add Framer Motion for animations
- Set up proper routing and navigation
- Create a contact form with validation
- Ensure mobile-first responsive design

# useful_guidelines_from_blueprints

No specific blueprints provided, but I'll follow the development guidelines for fullstack JavaScript applications, ensuring proper component structure, form handling with React Hook Form, and using Tailwind CSS with custom styling.

# directory_structure

```json
[
    {"path": "client/src/index.css", "status": "overwritten"},
    {"path": "tailwind.config.ts", "status": "overwritten"},
    {"path": "client/src/App.tsx", "status": "overwritten"},
    {"path": "client/src/pages/home.tsx", "status": "new"},
    {"path": "client/src/components/navigation.tsx", "status": "new"},
    {"path": "client/src/components/hero-section.tsx", "status": "new"},
    {"path": "client/src/components/about-section.tsx", "status": "new"},
    {"path": "client/src/components/skills-section.tsx", "status": "new"},
    {"path": "client/src/components/projects-section.tsx", "status": "new"},
    {"path": "client/src/components/contact-section.tsx", "status": "new"},
    {"path": "client/src/components/footer.tsx", "status": "new"},
    {"path": "client/src/components/floating-nav.tsx", "status": "new"},
    {"path": "shared/schema.ts", "status": "overwritten"},
    {"path": "server/routes.ts", "status": "overwritten"},
    {"path": "server/storage.ts", "status": "overwritten"}
]
