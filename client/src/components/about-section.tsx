import { GraduationCap, Heart, Target } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">About Me</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="bg-secondary/50 p-8 rounded-xl">
            <div className="text-accent text-3xl mb-4">
              <GraduationCap className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <p className="text-muted-foreground">
              <strong>Bachelor of Science in Artificial Intelligence and Machine Learning</strong><br />
              University of Zimbabwe, 2024<br />
              Specialized in AI, NLP, Big Data, and Cloud AI solutions.
            </p>
          </div>
          <div className="bg-secondary/50 p-8 rounded-xl">
            <div className="text-accent text-3xl mb-4">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Passion</h3>
            <p className="text-muted-foreground">
              Passionate about leveraging AI and Data Science to solve real-world problems, particularly in language 
              technology and developing solutions for African languages and communities.
            </p>
          </div>
          <div className="bg-secondary/50 p-8 rounded-xl">
            <div className="text-accent text-3xl mb-4">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Career Goals</h3>
            <p className="text-muted-foreground">
              Aspiring to become a leading AI Research Scientist, Data Scientist, and Cloud AI Innovator, focusing on 
              breakthrough technologies that bridge language barriers and advance AI accessibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
