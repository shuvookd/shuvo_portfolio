import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Brain, Wrench, FlaskConical } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const skillCategories = [
    {
      title: 'Programming',
      icon: Code,
      skills: ['Python', 'JavaScript', 'C','C++', 'Java'],
    },
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'NLP', 'Computer Vision', 'Deep Learning', 'BERT', 'GPT', 'LangChain'],
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      skills: ['AWS', 'Azure', 'Git', 'React', 'Node.js', 'PostgreSQL', 'MongoDB', 'Redis', 'FastAPI', 'Django'],
    },
    {
      title: 'Research & Data',
      icon: FlaskConical,
      skills: ['Data Analysis', 'Experiment Design', 'Research Papers', 'Data Visualization', 'Tableau'],
    },
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 px-4 relative overflow-hidden">
      {/* Floating background elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
        animate={{
          y: [0, 30, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          y: [0, -40, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto max-w-6xl relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Skills & Expertise
          </h2>
          <motion.div
            className="h-1 w-20 bg-primary mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 glow-effect group relative overflow-hidden h-full">
                  {/* Hover gradient overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                  />
                  
                  <CardHeader className="text-center pb-3 sm:pb-4 p-4 sm:p-6 relative z-10">
                    <motion.div
                      className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors relative"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <motion.div
                        className="absolute inset-0 rounded-full bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                      <category.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary relative z-10" />
                    </motion.div>
                    <CardTitle className="text-base sm:text-lg text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent hover:scrollbar-thumb-primary/40 p-4 sm:p-6 pt-0 relative z-10">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm bg-secondary/80 backdrop-blur-sm text-secondary-foreground rounded-full border border-border hover:border-primary/50 hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/20 transition-all duration-200 cursor-default"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
