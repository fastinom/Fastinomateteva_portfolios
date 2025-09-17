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

export default function ProjectsSection() {
  const [selectedFilter, setSelectedFilter] = useState("All");

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
      tags: ["ML", "Fintech"]
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
      tags: ["NLP", "Speech"]
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
            <div key={index} className="bg-secondary/30 rounded-xl p-6 card-hover" data-testid={`project-card-${index}`}>
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
      </div>
    </section>
  );
}
