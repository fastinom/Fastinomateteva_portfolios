import { Award, FlaskConical, Crown } from "lucide-react";

export default function AchievementsSection() {
  const achievements = [
    {
      icon: Award,
      title: "POTRAZ Innovation Expo",
      description: "Showcased Wangue.ai at Zimbabwe's premier telecommunications innovation exhibition, demonstrating breakthrough language technology solutions.",
      year: "2023"
    },
    {
      icon: FlaskConical,
      title: "University Research Week",
      description: "Presented the Air Quality Monitoring System at the University of Zimbabwe Research Week, highlighting innovative IoT environmental solutions.",
      year: "2022"
    },
    {
      icon: Crown,
      title: "Chess Academy Founder",
      description: "Established a chess academy focused on youth empowerment, developing critical thinking skills and strategic problem-solving capabilities in young minds.",
      year: "Ongoing"
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Achievements & Exhibitions</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-secondary/30 p-8 rounded-xl text-center card-hover" data-testid={`achievement-${index}`}>
              <div className="text-accent text-4xl mb-4 flex justify-center">
                <achievement.icon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{achievement.title}</h3>
              <p className="text-muted-foreground mb-4">
                {achievement.description}
              </p>
              <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                {achievement.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
