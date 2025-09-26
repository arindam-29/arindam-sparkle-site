import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export const Footer = () => {
  const socialLinks = [
    { icon: Github, label: "GitHub", url: "#" },
    { icon: Linkedin, label: "LinkedIn", url: "#" },
    { icon: Mail, label: "Email", url: "mailto:hello@arindam.xyz" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 border-t border-primary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left side */}
            <div className="text-center md:text-left mb-6 md:mb-0">
              <div className="text-xl font-bold text-gradient mb-2">Arindam.xyz</div>
              <p className="text-muted-foreground">
                Building the future, one line of code at a time.
              </p>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="hover:text-primary transition-smooth"
                  asChild
                >
                  <a href={social.url} target="_blank" rel="noopener noreferrer">
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between mt-8 pt-8 border-t border-primary/10">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Arindam. All rights reserved.
            </p>
            
            {/* Back to top */}
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="mt-4 md:mt-0 hover:text-primary transition-smooth"
            >
              <ArrowUp className="mr-2 h-4 w-4" />
              Back to top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};