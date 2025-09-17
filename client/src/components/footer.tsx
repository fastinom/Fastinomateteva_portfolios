import { Mail, Linkedin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <div className="text-2xl font-bold mb-4">Fastino Mateteva</div>
          <p className="text-background/80 mb-6">AI Research Scientist | Data Scientist | Language Technology Innovator</p>
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="mailto:fastinomateteva@gmail.com" 
              className="text-background/60 hover:text-background transition-colors"
              data-testid="footer-email"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/fastino-mateteva-0a5b65221" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-background/60 hover:text-background transition-colors"
              data-testid="footer-linkedin"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="tel:+263774707106" 
              className="text-background/60 hover:text-background transition-colors"
              data-testid="footer-phone"
            >
              <Phone className="w-6 h-6" />
            </a>
          </div>
          <p className="text-background/60 text-sm">© 2024 Fastino Mateteva. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
