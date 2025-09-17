import { useState } from "react";
import { 
  Building2, 
  Newspaper, 
  Layers, 
  Shield, 
  Mic, 
  Keyboard, 
  Image, 
  Warehouse, 
  Wind,
  Filter
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectModal from "./project-modal";

export default function ProjectsSection() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filterCategories = [
    "All",
    "ML", 
    "NLP",
    "Fintech",
    "Security",
    "Speech",
    "Computer Vision",
    "IoT",
    "Deep Learning"
  ];

  const projects = [
    {
      icon: Building2,
      title: "Pricing Engine for Banks",
      description: "Developed an advanced algorithmic pricing engine for financial institutions, utilizing machine learning models to optimize loan pricing strategies and risk assessment.",
      year: "2024",
      tags: ["ML", "Fintech"],
      details: {
        fullDescription: "Designed and implemented a comprehensive pricing engine for financial institutions that leverages advanced machine learning algorithms to optimize loan pricing strategies. The system integrates risk assessment models, market analysis, and competitive intelligence to provide real-time pricing recommendations that maximize profitability while maintaining competitive positioning.",
        technologies: ["Python", "scikit-learn", "XGBoost", "PostgreSQL", "Flask", "Docker", "AWS EC2", "Pandas", "NumPy"],
        challenges: "The main challenges included handling large-scale financial data processing in real-time, ensuring regulatory compliance, integrating with legacy banking systems, and developing models that could adapt to changing market conditions while maintaining accuracy and explainability.",
        outcomes: "Successfully deployed the pricing engine across multiple financial institutions, resulting in 15% improvement in loan approval rates, 20% reduction in pricing decision time, and 12% increase in overall profitability. The system processes over 10,000 loan applications daily.",
        impact: "The solution transformed how partner banks approach loan pricing, moving from manual, experience-based decisions to data-driven, algorithmic approaches. This has led to more consistent pricing policies and improved risk management across their loan portfolios."
      }
    },
    {
      icon: Newspaper,
      title: "Zimpapers Project",
      description: "Created an intelligent content management and analysis system for Zimbabwe's largest media house, incorporating NLP for content categorization and reader engagement optimization.",
      year: "2023",
      tags: ["NLP", "Media"]
    },
    {
      icon: Layers,
      title: "News Clustering App",
      description: "Built an intelligent news aggregation platform using advanced clustering algorithms to group similar news articles and provide users with comprehensive topic coverage.",
      year: "2023",
      tags: ["NLP", "Clustering"]
    },
    {
      icon: Shield,
      title: "Fraud Detection Web App",
      description: "Developed a real-time fraud detection system using ensemble machine learning methods to identify suspicious transactions and protect financial institutions.",
      year: "2023",
      tags: ["ML", "Security"]
    },
    {
      icon: Mic,
      title: "National NLP Project (TTS & STT)",
      description: "Led the development of Text-to-Speech and Speech-to-Text systems for Bantu languages, advancing digital accessibility for indigenous African languages.",
      year: "2022-2024",
      tags: ["NLP", "Speech"],
      details: {
        fullDescription: "Led a comprehensive national initiative to develop Text-to-Speech (TTS) and Speech-to-Text (STT) systems for Bantu languages, focusing on Shona and Ndebele. This groundbreaking project aimed to bridge the digital divide by making technology more accessible to native African language speakers, promoting digital inclusion and cultural preservation.",
        technologies: ["Python", "TensorFlow", "PyTorch", "Librosa", "espeak-ng", "Praat", "Flask", "Docker", "Redis", "MongoDB"],
        challenges: "Major challenges included limited training data for Bantu languages, lack of standardized phonetic representations, dealing with tonal language complexities, creating accurate pronunciation models, and ensuring natural-sounding synthesis while maintaining linguistic authenticity.",
        outcomes: "Successfully developed and deployed TTS and STT systems supporting Shona and Ndebele languages with 85% accuracy for STT and natural-sounding TTS. Created the largest open-source dataset of Bantu language audio recordings with over 500 hours of annotated speech data.",
        impact: "The project has enabled thousands of Zimbabweans to access digital services in their native languages, improved literacy rates through audio learning tools, and established a foundation for future African language technology development. The open-source nature has inspired similar projects across Africa."
      }
    },
    {
      icon: Keyboard,
      title: "Next Word Shona Prediction App",
      description: "Created an intelligent text prediction system for the Shona language, utilizing deep learning models to enhance typing efficiency for native speakers.",
      year: "2023",
      tags: ["Deep Learning", "Language"]
    },
    {
      icon: Image,
      title: "Image Captioning Web App",
      description: "Developed an AI-powered image captioning system using computer vision and NLP techniques to automatically generate descriptive captions for images.",
      year: "2023",
      tags: ["Computer Vision", "NLP"]
    },
    {
      icon: Warehouse,
      title: "Storeroom Management System",
      description: "Built a comprehensive inventory management system with predictive analytics for stock optimization and automated reorder recommendations.",
      year: "2022",
      tags: ["Management", "Analytics"]
    },
    {
      icon: Wind,
      title: "Air Quality Monitoring System",
      description: "Designed an IoT-based air quality monitoring system showcased at the 2022 Innovation Hub, featuring real-time data collection and environmental analytics.",
      year: "2022",
      tags: ["IoT", "Environmental"]
    }
  ];

  // Filter projects based on selected category
  const filteredProjects = selectedFilter === "All" 
    ? projects 
    : projects.filter(project => 
        project.tags.some(tag => 
          tag.toLowerCase() === selectedFilter.toLowerCase() ||
          (selectedFilter === "Computer Vision" && tag === "Computer Vision") ||
          (selectedFilter === "Deep Learning" && tag === "Deep Learning")
        )
      );

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Featured Projects</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A showcase of innovative AI and machine learning projects spanning fintech, media, healthcare, and language technology.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <Filter className="w-5 h-5 text-muted-foreground mr-2" />
            {filterCategories.map((category) => (
              <Button
                key={category}
                variant={selectedFilter === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter(category)}
                className="text-xs"
                data-testid={`filter-${category.toLowerCase()}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="bg-secondary/30 rounded-xl p-6 card-hover cursor-pointer" 
              data-testid={`project-card-${index}`}
              onClick={() => handleProjectClick(project)}
            >
              <div className="text-accent text-3xl mb-4">
                <project.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-accent font-medium">{project.year}</span>
                <div className="flex gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Project Modal */}
        <ProjectModal 
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </section>
  );
}
