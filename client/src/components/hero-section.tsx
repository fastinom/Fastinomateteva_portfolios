import { Rocket, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@assets/pps_1758111701428.jpg";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="hero-gradient text-primary-foreground pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="hero-text text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Fastino Mateteva
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90 font-medium">
              AI Research Scientist | Data Scientist | Language Technology Innovator
            </p>
            <p className="text-lg mb-10 text-primary-foreground/80 max-w-2xl">
              Artificial Intelligence and Machine Learning graduate specializing in NLP, Big Data, and Cloud AI solutions. 
              Founder of Wangue.ai, developing cutting-edge Bantu language technologies including speech-to-text, 
              text-to-speech, and spell checking systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection("projects")}
                className="pulse-on-hover bg-card text-foreground px-8 py-3 rounded-lg font-medium hover:bg-card/90 transition-colors inline-flex items-center gap-2"
                data-testid="button-view-work"
              >
                <Rocket className="w-4 h-4" />
                View My Work
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="pulse-on-hover border-2 border-primary-foreground text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
                data-testid="button-get-in-touch"
              >
                <Mail className="w-4 h-4" />
                Get In Touch
              </Button>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="relative w-80 h-80 rounded-2xl border-4 border-primary-foreground/20 overflow-hidden bg-gradient-to-br from-card/20 to-card/40">
              <img 
                src={profileImage} 
                alt="Fastino Mateteva - AI Research Scientist"
                className="w-full h-full object-cover object-center"
                data-testid="hero-profile-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
