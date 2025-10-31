import { Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
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
    <section id="experience" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Floating background */}
      <motion.div
        className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="container mx-auto max-w-6xl relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Work Experience
          </h2>
          <motion.div
            className="h-1 w-20 bg-primary mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <div className="relative">
          {/* Animated Timeline line */}
          <motion.div
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0 -translate-x-1/2"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ transformOrigin: "top" }}
          />

          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col lg:flex-row gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Animated Timeline marker */}
                <motion.div
                  className="hidden lg:block absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background glow-effect z-10"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                  whileHover={{ scale: 1.5 }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary/50 blur-md"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block lg:w-1/2" />

                {/* Content card */}
                <motion.div
                  className="lg:w-1/2"
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 glow-effect group relative overflow-hidden bg-card/50 backdrop-blur-sm">
                    {/* Hover gradient */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    
                    <CardContent className="p-4 sm:p-6 relative z-10">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <motion.div
                          className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors relative"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <motion.div
                            className="absolute inset-0 rounded-full bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"
                          />
                          <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-primary relative z-10" />
                        </motion.div>
                        <div className="flex-1 min-w-0">
                          <motion.p
                            className="text-xs sm:text-sm text-primary font-semibold mb-1 inline-block px-3 py-1 rounded-full bg-primary/10"
                            whileHover={{ scale: 1.05 }}
                          >
                            {exp.period}
                          </motion.p>
                          <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1 break-words group-hover:text-primary transition-colors">
                            {exp.role}
                          </h3>
                          <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 font-medium">
                            {exp.company}
                          </p>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                                transition={{ duration: 0.3, delay: index * 0.2 + idx * 0.1 }}
                                className="text-xs sm:text-sm text-muted-foreground flex items-start gap-2 group/item"
                              >
                                <motion.span
                                  className="text-primary mt-1 flex-shrink-0"
                                  whileHover={{ scale: 1.5 }}
                                >
                                  •
                                </motion.span>
                                <span className="break-words group-hover/item:text-foreground transition-colors">
                                  {achievement}
                                </span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
