import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import ExperienceSection from "@/components/experience-section";
import AchievementsSection from "@/components/achievements-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import { useScrollAnimation } from "@/hooks/use-intersection-observer";

export default function Home() {
  const animateRef = useScrollAnimation();

  return (
    <div className="bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <div ref={animateRef}><AboutSection /></div>
      <div ref={animateRef}><SkillsSection /></div>
      <div ref={animateRef}><ProjectsSection /></div>
      <div ref={animateRef}><ExperienceSection /></div>
      <div ref={animateRef}><AchievementsSection /></div>
      <div ref={animateRef}><ContactSection /></div>
      <Footer />
    </div>
  );
}
