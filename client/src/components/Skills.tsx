import { Database, Server, Cpu, Cloud } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Cpu className="h-10 w-10" />,
      color: "text-coral",
      skills: ["React.js", "Next.js", "Vue.js", "Tailwind CSS"]
    },
    {
      title: "Backend",
      icon: <Server className="h-10 w-10" />,
      color: "text-highlight",
      skills: ["Node.js", "Python", "Express.js", "Django"]
    },
    {
      title: "Database",
      icon: <Database className="h-10 w-10" />,
      color: "text-secondary",
      skills: ["PostgreSQL", "MongoDB", "Redis", "Firebase"]
    },
    {
      title: "DevOps",
      icon: <Cloud className="h-10 w-10" />,
      color: "text-coral",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD"]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-glow" data-testid="skills-title">
            <span className="text-secondary font-mono">02.</span> Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="glassmorphism rounded-2xl p-8 text-center hover:glow-effect transition-all duration-300"
              data-testid={`skill-category-${index}`}
            >
              <div className={`text-4xl mb-4 ${category.color} flex justify-center`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-4" data-testid={`skill-title-${index}`}>
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="skill-badge bg-primary bg-opacity-50 px-3 py-2 rounded-lg text-sm hover:bg-secondary hover:bg-opacity-20 transition-all duration-300"
                    data-testid={`skill-${index}-${skillIndex}`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
