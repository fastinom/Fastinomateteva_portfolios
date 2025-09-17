import { Mail, Phone, Linkedin, Download } from "lucide-react";

export default function ContactSection() {
  const contacts = [
    {
      icon: Mail,
      title: "Email",
      value: "fastinomateteva@gmail.com",
      href: "mailto:fastinomateteva@gmail.com",
      testId: "contact-email"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+263 774 707 106",
      href: "tel:+263774707106",
      testId: "contact-phone"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com/in/fastino-mateteva-0a5b65221",
      testId: "contact-linkedin"
    }
  ];

  const handleDownloadCV = () => {
    // Create a link to download the CV
    const link = document.createElement('a');
    link.href = '/cv/fastino-mateteva-cv.pdf';
    link.download = 'Fastino-Mateteva-CV.pdf';
    link.click();
  };

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Get In Touch</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Ready to collaborate on cutting-edge AI projects or discuss innovative solutions? Let's connect and explore the possibilities together.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="bg-card p-6 rounded-xl text-center card-hover group"
              data-testid={contact.testId}
            >
              <div className="text-accent text-3xl mb-4 group-hover:scale-110 transition-transform flex justify-center">
                <contact.icon className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">{contact.title}</h3>
              <p className="text-sm text-muted-foreground break-all">{contact.value}</p>
            </a>
          ))}

          {/* Download CV */}
          <button
            onClick={handleDownloadCV}
            className="bg-primary text-primary-foreground p-6 rounded-xl text-center card-hover group"
            data-testid="button-download-cv"
          >
            <div className="text-primary-foreground text-3xl mb-4 group-hover:scale-110 transition-transform flex justify-center">
              <Download className="w-8 h-8" />
            </div>
            <h3 className="font-semibold mb-2">Download CV</h3>
            <p className="text-sm text-primary-foreground/80">Get my resume</p>
          </button>
        </div>
      </div>
    </section>
  );
}
