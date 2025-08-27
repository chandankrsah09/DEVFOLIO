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
              Hello! I'm Chandan, a result-driven computer science graduate from 
              <span className="text-secondary">Sandip University</span> with a B.Tech in Computer Science and Engineering (GPA: 8.38/10.0). 
              I have 6+ months of hands-on experience as a full stack developer at 
              <span className="text-secondary">Mithila Stack</span>.
            </p>
            <p className="text-lg text-slate leading-relaxed" data-testid="about-paragraph-2">
              I specialize in developing and maintaining <span className="text-secondary">scalable full-stack web applications</span> 
              using React, Node.js, and TypeScript. I have experience implementing CI/CD pipelines, 
              working with <span className="text-secondary">Docker and Azure Pipelines</span>, and 
              building secure REST APIs with MongoDB and PostgreSQL.
            </p>
            <p className="text-lg text-slate leading-relaxed" data-testid="about-paragraph-3">
              I collaborate cross-functionally with Product, Design, and QA teams in 
              <span className="text-secondary">Agile environments</span> using tools like Jira, 
              Azure DevOps, and GitHub. I'm passionate about AI/ML technologies including 
              TensorFlow, PyTorch, and working with LLMs.
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
            <div className="glassmorphism rounded-2xl p-6 relative overflow-hidden">
              {/* Background blur overlay */}
              <div 
                className="absolute inset-0 rounded-xl"
                style={{
                  backgroundImage: 'url(/chandan-photo.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'blur(15px) brightness(0.4)',
                  transform: 'scale(1.1)'
                }}
              ></div>
              
              {/* Main focused image */}
              <img 
                src="/chandan-photo.jpg" 
                alt="Chandan Kumar Sah - Full Stack Developer" 
                className="rounded-xl w-full h-auto glow-effect object-cover aspect-square relative z-10"
                style={{
                  filter: 'contrast(1.15) brightness(1.08)',
                  objectPosition: 'center 25%',
                  transform: 'scale(1.8)',
                  transformOrigin: 'center 35%',
                  clipPath: 'inset(0 25% 0 25%)'
                }}
                data-testid="about-image"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glassmorphism rounded-xl p-4">
              <div className="text-center" data-testid="experience-badge">
                <div className="text-2xl font-bold text-secondary">6+</div>
                <div className="text-sm text-slate">Months Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
