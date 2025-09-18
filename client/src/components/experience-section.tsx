export default function ExperienceSection() {
  const experiences = [
    {
      title: "AI Innovation Futurist",
      company: "AI Institute Africa",
      period: "Current",
      description: "Leading AI training initiatives, conducting cutting-edge research, and implementing innovative product solutions. Responsible for developing strategic AI implementation frameworks and mentoring emerging talent in the field.",
      tags: ["AI Training", "Research", "Product Implementation"],
      borderColor: "border-accent",
      isCurrent: true
    },
    {
      title: "AI Developer",
      company: "Rubiem Solutions",
      period: "Current",
      description: "Developed RAG (Retrieval-Augmented Generation) applications, implemented advanced NLP solutions, and built machine learning models for data processing and analysis applications.",
      tags: ["RAG Applications", "NLP", "ML", "Data Processing"],
      borderColor: "border-primary",
      isCurrent: false
    },
    {
      title: "AI Research Scientist",
      company: "ZCHPC (Zimbabwe Centre for High Performance Computing)",
      period: "2024",
      description: "Conducted advanced research in Big Data analytics, Large Language Models, and Natural Language Processing. Specialized in developing Text-to-Speech and Speech-to-Text systems for African languages.",
      tags: ["Big Data", "LLMs", "NLP", "TTS/STT"],
      borderColor: "border-primary",
      isCurrent: false
    },
    {
      title: "IT Intern",
      company: "Midlands State University",
      period: "2023-2023",
      description: "Gained foundational experience in data analysis and technical support, developing core competencies in IT infrastructure management and data-driven problem solving.",
      tags: ["Data Analysis", "Tech Support"],
      borderColor: "border-muted",
      isCurrent: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Professional Experience</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className="relative" data-testid={`experience-${index}`}>
                <div className={`bg-card p-8 rounded-xl shadow-sm border-l-4 ${experience.borderColor}`}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-primary">{experience.title}</h3>
                      <p className="text-accent font-medium">{experience.company}</p>
                    </div>
                    <span 
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        experience.isCurrent 
                          ? "bg-accent/10 text-accent" 
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {experience.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {experience.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {experience.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
