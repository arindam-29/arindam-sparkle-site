import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with React, Node.js, and Stripe integration. Features include real-time inventory, admin dashboard, and mobile-responsive design.",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      featured: true,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=entropy",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates, team spaces, and advanced filtering capabilities.",
      tech: ["TypeScript", "React", "Firebase", "Tailwind CSS"],
      featured: false,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=entropy",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "AI Content Generator",
      description: "AI-powered content creation platform that helps writers and marketers generate high-quality content using advanced language models.",
      tech: ["Python", "FastAPI", "OpenAI", "React", "PostgreSQL"],
      featured: true,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&crop=entropy",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Weather Analytics Dashboard",
      description: "Interactive dashboard for weather data visualization with predictive analytics and location-based forecasting.",
      tech: ["Vue.js", "D3.js", "Express", "Weather API"],
      featured: false,
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop&crop=entropy",
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A collection of projects that showcase my skills and passion for development
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className={`group overflow-hidden glass border-primary/20 card-hover ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Project image */}
                <div className="relative overflow-hidden h-48 bg-muted">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Project actions */}
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="secondary" className="glass">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button size="sm" className="glass">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                  )}
                </div>

                {/* Project content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="text-xs border-primary/30 text-primary"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Action buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" size="sm" className="flex-1 border-primary/30 hover:bg-primary/10">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* View more projects */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};