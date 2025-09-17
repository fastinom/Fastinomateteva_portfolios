import { X, ExternalLink, Github, Calendar, Tag } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Project {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  year: string;
  tags: string[];
  details?: {
    fullDescription?: string;
    technologies?: string[];
    challenges?: string;
    outcomes?: string;
    impact?: string;
    demoLink?: string;
    githubLink?: string;
  };
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-4 mb-4">
            <div className="text-accent text-3xl">
              <project.icon className="w-8 h-8" />
            </div>
            <div>
              <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
              <div className="flex items-center gap-2 mt-2">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">{project.year}</span>
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Overview */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Project Overview</h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.details?.fullDescription || project.description}
            </p>
          </div>

          {/* Technologies Used */}
          {project.details?.technologies && (
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Tag className="w-4 h-4" />
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.details.technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Core Tags */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Challenges */}
          {project.details?.challenges && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Challenges Faced</h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.details.challenges}
              </p>
            </div>
          )}

          {/* Outcomes */}
          {project.details?.outcomes && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Key Outcomes</h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.details.outcomes}
              </p>
            </div>
          )}

          {/* Impact */}
          {project.details?.impact && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Impact & Results</h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.details.impact}
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4 border-t">
            {project.details?.demoLink && (
              <Button asChild variant="default" className="flex-1">
                <a
                  href={project.details.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="project-demo-link"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Demo
                </a>
              </Button>
            )}
            {project.details?.githubLink && (
              <Button asChild variant="outline" className="flex-1">
                <a
                  href={project.details.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="project-github-link"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}