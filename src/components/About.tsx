import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Rocket, Users } from "lucide-react";

export const About = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Python", "AWS", "Docker", 
    "GraphQL", "MongoDB", "PostgreSQL", "Next.js", "Tailwind CSS", "Firebase"
  ];

  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable and scalable code following best practices"
    },
    {
      icon: Palette,
      title: "Design Systems",
      description: "Creating cohesive user experiences with systematic design approaches"
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing applications for speed and exceptional user experience"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in cross-functional teams and mentoring developers"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about building digital solutions that make a difference
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">
                  Full-Stack Developer & Tech Enthusiast
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  With over 5 years of experience in software development, I specialize in 
                  creating modern web applications that combine beautiful design with robust 
                  functionality. My journey spans from frontend frameworks to backend 
                  architectures, always focusing on user experience and code quality.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing 
                  to open source projects, or sharing knowledge with the developer community 
                  through blog posts and talks.
                </p>
              </div>
              
              {/* Skills */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-foreground">Technologies & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="bg-secondary/50 hover:bg-primary/20 transition-smooth"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Right content - Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <Card 
                  key={index} 
                  className="p-6 glass border-primary/20 card-hover group"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};