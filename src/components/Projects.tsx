import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Card className="bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 glow-effect flex flex-col h-full group overflow-hidden relative">
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        <CardHeader className="p-4 sm:p-6 relative z-10">
          <motion.div
            animate={isHovered ? { x: 4 } : { x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CardTitle className="text-lg sm:text-xl text-foreground group-hover:text-primary transition-colors duration-300">
              {project.title}
            </CardTitle>
          </motion.div>
          <CardDescription className="text-sm text-muted-foreground line-clamp-3 mt-2">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-1 p-4 sm:p-6 pt-0 relative z-10">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech: string, techIndex: number) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.1 + techIndex * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge
                  variant="secondary"
                  className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-all duration-300 text-xs cursor-default"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>

        <CardFooter className="flex gap-2 sm:gap-3 p-4 sm:p-6 pt-4 relative z-10">
          <motion.div
            className="flex-1"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              variant="outline"
              size="sm"
              className="w-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-xs sm:text-sm group/btn"
              onClick={() => window.open(project.github, '_blank')}
            >
              <Github className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 group-hover/btn:rotate-12 transition-transform duration-300" />
              <span className="hidden xs:inline">GitHub</span>
              <span className="xs:hidden">Code</span>
            </Button>
          </motion.div>
          <motion.div
            className="flex-1"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              size="sm"
              className="w-full transition-all duration-300 text-xs sm:text-sm group/btn bg-primary hover:bg-primary/90"
              onClick={() => window.open(project.demo, '_blank')}
            >
              <ExternalLink className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
              Demo
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const Projects = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

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
      title: 'E-commerce Recommendation',
      description: 'Built a collaborative filtering system for personalized product recommendations. Increased conversion rates by 28% through ML-driven suggestions.',
      tech: ['TensorFlow', 'Redis', 'Flask', 'MongoDB'],
      github: 'https://github.com/shuvookd',
      demo: 'https://github.com/shuvookd',
    },
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 bg-secondary/30 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto max-w-7xl relative z-10" ref={sectionRef}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2">
            Featured Projects
          </h2>
          <motion.div
            className="h-1 w-20 bg-primary mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-fr">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
