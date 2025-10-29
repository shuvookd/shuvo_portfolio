import { Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      period: '2025 - Present',
      role: 'AI Engineer & Data Analyst',
      company: 'Apptriangle Limited',
      achievements: [
        'Develop and deploy machine learning models and intelligent systems for real-world problem-solving.',
        'Use deep learning and NLP for advanced AI applications.',
        'Analyze large datasets to uncover insights and trends.',
        'Leverage Power BI, Excel, and Python for data visualization and reporting.',
        'Apply statistical methods and data mining to drive business decisions.',
      ],
    },
    {
      period: '2023 - 2024',
      role: 'Power Platform Specialist',
      company: 'Apptriangle Limited',
      achievements: [
        'Power Apps: Developing custom apps to streamline business processes and enhance user experiences.',
        'Power Automate: Automating workflows to improve efficiency and eliminate manual tasks.',
        'Power BI: Designing interactive dashboards and reports to turn data into actionable insights.',
      ],
    },
    {
      period: '2023',
      role: ' Intern - Software Developer',
      company: 'BJIT',
      achievements: [
        'Gained hands-on experience in developing and optimizing software solutions during my internship at BJIT as a Software Developer.',
        'Contributed to various projects, enhancing my skills in coding, problem-solving, and software design.',
        'Worked closely with a talented team, further solidifying my foundation in software development.',
        'Gained valuable insights into industry practices and workflows.'
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
