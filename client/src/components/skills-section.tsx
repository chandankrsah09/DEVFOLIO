import { Code, Server, Database, Cloud } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: <Code className="text-4xl" />,
      title: "Frontend",
      color: "text-coral",
      skills: ["React.js", "Next.js", "TypeScript", "JavaScript"]
    },
    {
      icon: <Server className="text-4xl" />,
      title: "Backend",
      color: "text-highlight",
      skills: ["Node.js", "Express.js", "Python", "Java"]
    },
    {
      icon: <Database className="text-4xl" />,
      title: "Database",
      color: "text-secondary",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Supabase"]
    },
    {
      icon: <Cloud className="text-4xl" />,
      title: "DevOps & AI",
      color: "text-coral",
      skills: ["AWS", "Docker", "TensorFlow", "PyTorch"]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-glow" data-testid="skills-heading">
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
              <div className={`mb-4 ${category.color} flex justify-center`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-4" data-testid={`skill-title-${index}`}>
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="skill-badge bg-primary bg-opacity-50 px-3 py-2 rounded-lg text-sm"
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
