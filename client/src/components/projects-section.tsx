import { Github, ExternalLink } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Rising Bihar – Admin Dashboard",
      description: "Developed a secure, role-based admin dashboard for the Rising Bihar initiative using React.js and Node.js. Implemented RESTful APIs for dynamic data management with real-time updates and enhanced authentication mechanisms.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["React.js", "Node.js", "REST APIs", "Authentication"],
      accentColor: "secondary",
      links: {
        github: "https://github.com/chandankrsah09",
        live: "#"
      }
    },
    {
      title: "Gyan Changera – Maithili Literature Platform",
      description: "Developed a comprehensive e-commerce platform to promote and sell Maithili literature, utilizing Next.js for server-side rendering and improved SEO. Integrated MongoDB for efficient data management with responsive design principles.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["Next.js", "MongoDB", "SEO", "E-commerce"],
      accentColor: "coral",
      links: {
        github: "https://github.com/chandankrsah09",
        live: "#"
      }
    },
    {
      title: "Smart City Waste Management System",
      description: "Built a full-stack IoT-enabled platform to monitor smart waste bins in real-time with analytics dashboards. Integrated Google Maps API for bin locations and used Supabase for database and authentication.",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["React.js", "Node.js", "Supabase", "Google Maps"],
      accentColor: "highlight",
      links: {
        github: "https://github.com/chandankrsah09",
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
