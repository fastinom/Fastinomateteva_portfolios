import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating?: number;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Thabolezwe Mabandla",
    role: "Mastercard Scholar at CMU Africa",
    company: "CMU Africa Student",
    content: "Fastino's work on natural language processing for Bantu languages is groundbreaking. His deep understanding of both technical implementation and cultural nuances resulted in systems that truly serve the community. The TTS/STT project he led has set new standards for indigenous language technology.",
    rating: 5
  },
  {
    name: "Michael Rodriguez",
    role: "Senior Machine Learning Engineer", 
    company: "FinanceFlow Solutions",
    content: "I had the pleasure of working with Fastino on our fraud detection system. His expertise in ensemble learning methods and attention to detail resulted in a 40% improvement in our detection accuracy. He's not just technically brilliant but also an excellent communicator who can explain complex concepts clearly.",
    rating: 5
  },
  {
    name: "Dr Tatenda Kavu",
    role: "Computer Science Lecturer",
    company: "University of Zimbabwe",
    content: "Fastino was one of our most dedicated students who became a respected colleague. His research contributions in AI and NLP, particularly for African languages, demonstrate both academic rigor and practical impact. He consistently delivers innovative solutions to complex problems.",
    rating: 5
  },
  {
    name: "Tapiwa Charekwa",
    role: "Product Manager",
    company: "NewsHub Analytics",
    content: "The news clustering application Fastino developed transformed how we organize and present content to our users. His machine learning approach to content categorization improved user engagement by 60%. Working with him was seamless - he understood our business needs and delivered beyond expectations.",
    rating: 5
  },
  {
    name: "Mr Munyaradzi",
    role: "Computer Science Department Lecturer",
    company: "Innovation Hub Zimbabwe",
    content: "Fastino's air quality monitoring system showcased at our 2022 Innovation Hub demonstrated exceptional integration of IoT, data analytics, and environmental science. His ability to bridge academic research with practical applications makes him a valuable asset to any team.",
    rating: 5
  },
  {
    name: "Patience Mupikeni",
    role: "CTO",
    company: "Rubiem Solutions",
    content: "The image captioning system Fastino built for us exceeded all performance benchmarks. His expertise in computer vision and NLP created a solution that processes thousands of images daily with remarkable accuracy. His code quality and documentation standards are exemplary."
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-background" id="testimonials" data-testid="section-testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 animate-fade-in" data-testid="heading-testimonials">
            Recommendations
          </h2>
          <p className="text-xl text-muted-foreground animate-slide-up" data-testid="text-testimonials-subtitle">
            What colleagues and clients say about working with me
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-secondary/20 rounded-xl p-6 card-hover relative" 
              data-testid={`testimonial-card-${index}`}
            >
              {/* Quote Icon */}
              <div className="absolute -top-2 -left-2 bg-primary rounded-full p-2">
                <Quote className="h-4 w-4 text-primary-foreground" />
              </div>

              {/* Rating Stars */}
              {testimonial.rating && (
                <div className="flex items-center mb-4" data-testid={`rating-${index}`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-4 w-4 fill-yellow-400 text-yellow-400" 
                      data-testid={`star-${i}`}
                    />
                  ))}
                </div>
              )}

              {/* Testimonial Content */}
              <blockquote className="text-muted-foreground mb-6 italic leading-relaxed" data-testid={`testimonial-content-${index}`}>
                "{testimonial.content}"
              </blockquote>

              {/* Author Information */}
              <div className="border-t border-muted pt-4">
                <div className="font-semibold text-foreground" data-testid={`testimonial-name-${index}`}>
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted-foreground" data-testid={`testimonial-role-${index}`}>
                  {testimonial.role}
                </div>
                <div className="text-sm text-primary font-medium" data-testid={`testimonial-company-${index}`}>
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-4">
            Ready to work together on your next AI project?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            data-testid="button-contact-cta"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
}
