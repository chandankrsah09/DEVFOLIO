export default function AboutSection() {
  const technologies = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB"
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-glow" data-testid="about-heading">
            <span className="text-secondary font-mono">01.</span> About Me
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate leading-relaxed" data-testid="about-paragraph-1">
              Hello! I'm Alex, a passionate full-stack developer with 5+ years of experience 
              creating digital solutions that make a difference. My journey in web development 
              started in 2018, and since then, I've had the privilege of working with 
              <span className="text-secondary"> innovative startups</span> and 
              <span className="text-secondary"> established companies</span>.
            </p>
            <p className="text-lg text-slate leading-relaxed" data-testid="about-paragraph-2">
              I specialize in building modern, scalable applications using cutting-edge technologies. 
              My focus is on creating <span className="text-secondary">user-centric experiences</span> 
              that are both functional and beautiful. I believe in writing clean, maintainable code 
              and staying up-to-date with the latest industry trends.
            </p>
            <p className="text-lg text-slate leading-relaxed" data-testid="about-paragraph-3">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge through technical writing and mentoring.
            </p>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-secondary mb-4" data-testid="technologies-heading">
                Technologies I work with:
              </h3>
              <div className="grid grid-cols-2 gap-2 text-sm font-mono">
                {technologies.map((tech, index) => (
                  <div key={index} className="flex items-center" data-testid={`tech-${index}`}>
                    <span className="text-secondary mr-2">▹</span>
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="glassmorphism rounded-2xl p-6">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=600" 
                alt="Professional developer portrait" 
                className="rounded-xl w-full h-auto glow-effect"
                data-testid="about-image"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glassmorphism rounded-xl p-4">
              <div className="text-center" data-testid="experience-badge">
                <div className="text-2xl font-bold text-secondary">5+</div>
                <div className="text-sm text-slate">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
