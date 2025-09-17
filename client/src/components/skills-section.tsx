import { Brain, Code, Bot, Languages, Database, Cpu, Network, BarChart3, Calculator } from "lucide-react";
import { SiPython, SiLinux, SiAmazon, SiPhp } from "react-icons/si";

export default function SkillsSection() {
  const coreSkills = [
    { icon: Bot, name: "AI/ML" },
    { icon: Languages, name: "NLP" },
    { icon: Database, name: "Big Data" },
    { icon: Cpu, name: "LLMs" },
  ];

  const technicalSkills = [
    { icon: SiPython, name: "Python" },
    { icon: Network, name: "Deep Learning" },
    { icon: BarChart3, name: "Power BI" },
    { icon: Calculator, name: "SPSS" },
    { icon: SiPhp, name: "PHP" },
    { icon: SiLinux, name: "Linux" },
    { icon: SiAmazon, name: "AWS" },
    { icon: Bot, name: "Hugging Face" },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Core Skills */}
          <div className="bg-card p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center gap-3">
              <Brain className="w-6 h-6" />
              Core Competencies
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {coreSkills.map((skill, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                  <skill.icon className="skill-icon text-accent text-xl w-5 h-5" />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="bg-card p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center gap-3">
              <Code className="w-6 h-6" />
              Technical Skills
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                  <skill.icon className="skill-icon text-accent text-xl w-5 h-5" />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
