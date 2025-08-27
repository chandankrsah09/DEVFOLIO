import { Github, ExternalLink } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern, full-stack e-commerce platform built with React, Node.js, and PostgreSQL. Features include real-time inventory management, secure payment processing, and an intuitive admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      accentColor: "secondary",
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with Next.js and Socket.io for seamless real-time experience.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["Next.js", "Socket.io", "MongoDB", "Prisma"],
      accentColor: "coral",
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      title: "AI-Powered Analytics",
      description: "An intelligent analytics dashboard that leverages machine learning to provide actionable insights. Features predictive analytics, data visualization, and automated reporting capabilities.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["Python", "TensorFlow", "D3.js", "FastAPI"],
      accentColor: "highlight",
      links: {
        github: "#",
        live: "#"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-glow" data-testid="projects-heading">
            <span className="text-secondary font-mono">03.</span> Featured Projects
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="project-card glassmorphism rounded-2xl overflow-hidden"
              data-testid={`project-${index}`}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'order-2 lg:order-1' : ''}`}>
                  <div className="text-secondary font-mono text-sm mb-2" data-testid={`project-label-${index}`}>
                    Featured Project
                  </div>
                  <h3 className="text-3xl font-bold text-glow mb-4" data-testid={`project-title-${index}`}>
                    {project.title}
                  </h3>
                  <p className="text-slate text-lg leading-relaxed mb-6" data-testid={`project-description-${index}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className={`bg-${project.accentColor} bg-opacity-20 text-${project.accentColor} px-3 py-1 rounded-lg text-sm font-mono`}
                        data-testid={`project-tech-${index}-${techIndex}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a 
                      href={project.links.github} 
                      className="text-secondary hover:text-highlight transition-colors"
                      data-testid={`project-github-${index}`}
                    >
                      <Github className="text-xl" />
                    </a>
                    <a 
                      href={project.links.live} 
                      className="text-secondary hover:text-highlight transition-colors"
                      data-testid={`project-live-${index}`}
                    >
                      <ExternalLink className="text-xl" />
                    </a>
                  </div>
                </div>
                <div className={`relative ${index % 2 === 1 ? 'order-1 lg:order-2' : ''}`}>
                  <img 
                    src={project.image} 
                    alt={`${project.title} interface`} 
                    className="w-full h-full object-cover"
                    data-testid={`project-image-${index}`}
                  />
                  <div className={`absolute inset-0 bg-${project.accentColor} bg-opacity-10`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button 
            className="glassmorphism px-8 py-4 rounded-lg text-secondary border border-secondary hover:bg-secondary hover:text-primary-foreground transition-all duration-300 glow-effect"
            data-testid="button-view-all-projects"
          >
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
