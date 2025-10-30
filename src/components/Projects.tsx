import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'AI Chatbot for Apptriangle Limited',
      description: 'Developed an intelligent chatbot using NLP to assist patients with medical queries and appointment scheduling. Reduced response time by 70% and improved patient satisfaction.',
      tech: ['Python', 'TensorFlow', 'React', 'FastAPI'],
      github: 'https://github.com/shuvookd/ATL_Bot',
      demo: 'https://github.com/shuvookd/ATL_Bot',
    },
    {
      title: 'Medicare',
      description: 'Medicare is a healthcare innovation project focused on improving patient care and outcomes through cutting-edge technology. By integrating telemedicine, health monitoring tools, and data analytics, our project aims to enhance the accessibility, efficiency, and quality of healthcare services. We are committed to empowering patients with better information, personalized care, and proactive health management for a healthier future.',
      tech: ['React JS', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/shuvookd/mediCare',
      demo: 'https://github.com/shuvookd/mediCare',
    },
    {
      title: 'Cafe Management Solution',
      description: 'Created a full-stack analytics platform for business intelligence. Features interactive visualizations and ML-powered forecasting capabilities.',
      tech: ['Java', 'Java-Swing', 'MySQL'],
      github: 'https://github.com/shuvookd',
      demo: 'https://github.com/shuvookd',
    },
    {
      title: 'Guest Management Solution',
      description: 'This is a Microsoft PowerApps-based Guest Management System developed for RAK Ceramics. The application streamlines guest entry, meeting scheduling, and host notifications using a simple, intuitive interface integrated with QR code scanning and email notifications.',
      tech: ['Power Apps', 'Power Automate', 'Power BI'],
      github: 'https://github.com/shuvookd/Guest_Management_System',
      demo: 'https://github.com/shuvookd/Guest_Management_System?tab=readme-ov-file#guest-management-system',
    },
    {
      title: 'Parts Management Solution',
      description: 'Developed novel optimization algorithms for training deep neural networks faster. Improved convergence speed by 35% on standard benchmarks.',
      tech: ['Power Apps', 'Power Automate', 'Power BI'],
      github: 'https://github.com/shuvookd/Parts_Management_System',
      demo: 'https://github.com/shuvookd/Parts_Management_System?tab=readme-ov-file#-parts-management-system',
    },
    {
      title: 'E-commerce Recommendation Engine',
      description: 'Built a collaborative filtering system for personalized product recommendations. Increased conversion rates by 28% through ML-driven suggestions.',
      tech: ['TensorFlow', 'Redis', 'Flask', 'MongoDB'],
      github: 'https://github.com/shuvookd',
      demo: 'https://github.com/shuvookd',
    },
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 text-primary">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-fr">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] glow-effect flex flex-col"
            >
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1 p-4 sm:p-6 pt-0">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex gap-2 sm:gap-3 p-4 sm:p-6 pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all text-xs sm:text-sm"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <Github className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden xs:inline">GitHub</span>
                  <span className="xs:hidden">Code</span>
                </Button>
                <Button
                  size="sm"
                  className="flex-1 transition-all text-xs sm:text-sm"
                  onClick={() => window.open(project.demo, '_blank')}
                >
                  <ExternalLink className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  Demo
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
