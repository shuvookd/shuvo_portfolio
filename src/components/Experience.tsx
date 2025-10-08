import { Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      period: '2022 - Present',
      role: 'AI Engineer',
      company: 'TechVision AI',
      achievements: [
        'Developed scalable ML pipelines using PyTorch, reducing model training time by 40%',
        'Collaborated on research leading to 2 publications in top-tier AI conferences',
        'Led a team of 5 engineers in building real-time NLP systems serving 1M+ users',
      ],
    },
    {
      period: '2020 - 2022',
      role: 'Full-Stack Developer',
      company: 'InnovateSoft Solutions',
      achievements: [
        'Built and deployed 15+ production web applications using React, Node.js, and AWS',
        'Improved application performance by 60% through code optimization and caching strategies',
        'Mentored junior developers and established best practices for the engineering team',
      ],
    },
    {
      period: '2019 - 2020',
      role: 'Research Intern',
      company: 'AI Research Lab, University',
      achievements: [
        'Conducted research on deep learning for computer vision, contributing to 1 published paper',
        'Developed novel data augmentation techniques improving model accuracy by 12%',
        'Presented findings at international ML symposium',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
          Work Experience
        </h2>

        <div className="relative">
          {/* Timeline line - hidden on mobile, visible on desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline marker */}
                <div className="hidden lg:block absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background glow-effect" />

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block lg:w-1/2" />

                {/* Content card */}
                <Card className="lg:w-1/2 border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] glow-effect">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Briefcase className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-primary font-semibold mb-1">{exp.period}</p>
                        <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{exp.company}</p>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
