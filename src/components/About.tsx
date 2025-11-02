import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Brain, Database, Sparkles, Rocket, BookOpen, Wrench, GraduationCap } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import profileImage from '@/assets/profile.jpg';
import ExpertiseIcons from './ExpertiseIcons';
interface Skill {
  name: string;
  level: number;
  icon: typeof Code2;
}
const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2
  });
  const skills: Skill[] = [{
    name: 'Full-Stack Development',
    level: 95,
    icon: Code2
  }, {
    name: 'AI & Machine Learning',
    level: 90,
    icon: Brain
  }, {
    name: 'Data Engineering',
    level: 85,
    icon: Database
  }, {
    name: 'Power Platform',
    level: 92,
    icon: Sparkles
  }];
  const highlights = [{
    icon: Rocket,
    text: '5+ Years Experience',
    color: 'text-primary'
  }, {
    icon: BookOpen,
    text: 'Research & AI Projects',
    color: 'text-primary'
  }, {
    icon: Wrench,
    text: 'Full-Stack & AI Systems',
    color: 'text-primary'
  }, {
    icon: GraduationCap,
    text: 'Graduated from EWU',
    color: 'text-primary'
  }];
  return <section id="about" ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      {/* Floating Background Elements */}
      <motion.div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" animate={{
      y: [0, 30, 0],
      scale: [1, 1.1, 1]
    }} transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }} />
      <motion.div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" animate={{
      y: [0, -40, 0],
      scale: [1, 1.15, 1]
    }} transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut"
    }} />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.h2 initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 20
      }} transition={{
        duration: 0.6
      }} className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
          About Me
        </motion.h2>

        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 30
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }}>
          <Card className="p-4 sm:p-6 md:p-8 lg:p-12 bg-card/80 backdrop-blur-sm border-border relative overflow-hidden group">
            {/* Subtle tech pattern overlay */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
              <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
              backgroundSize: '32px 32px'
            }} />
            </div>

            <div className="space-y-8 relative z-10">
              {/* Profile and Introduction Section */}
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                {/* Profile Image with Enhanced Glow */}
                <motion.div className="flex justify-center lg:justify-start w-full lg:w-auto" initial={{
                opacity: 0,
                scale: 0.9
              }} animate={isInView ? {
                opacity: 1,
                scale: 1
              } : {
                opacity: 0,
                scale: 0.9
              }} transition={{
                duration: 0.6,
                delay: 0.3
              }}>
                  <div className="relative group/img flex justify-center items-center">
                    {/* Animated glow effect */}
                    <motion.div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 rounded-2xl blur-2xl" animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.7, 0.5]
                  }} transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }} />
                    {/* Floating animation on image */}
                    <motion.img src={profileImage} alt="Shuvo Kumar Das - AI Engineer & Software Developer" className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-2xl object-cover border-2 border-primary/30 shadow-xl" animate={{
                    y: [0, -10, 0]
                  }} transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }} whileHover={{
                    scale: 1.05
                  }} />
                  </div>
                </motion.div>

                {/* Introduction Text */}
                <motion.div className="flex-1 space-y-6" initial={{
                opacity: 0,
                x: 20
              }} animate={isInView ? {
                opacity: 1,
                x: 0
              } : {
                opacity: 0,
                x: 20
              }} transition={{
                duration: 0.6,
                delay: 0.4
              }}>
                  <div className="space-y-4">
                    <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed text-justify">
                      With <span className="text-foreground font-semibold">5+ years</span> in Software Development and AI Engineering, I craft intelligent, data-driven solutions that transform business processes and drive strategic decision-making. My expertise spans the <span className="text-foreground font-semibold">Microsoft Power Platform</span>, where I excel in building efficient, scalable applications with Power Apps and Power BI.
                    </p>

                    <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed text-justify">
                      Passionate about <span className="text-foreground font-semibold">AI and machine learning</span>, I specialize in creating cutting-edge systems that analyze, predict, and automate with precision. I thrive on continuous learning and experimentation, pushing the boundaries of technology to deliver meaningful, measurable impact.
                    </p>
                  </div>

                  {/* Highlight Badges */}
                  
                </motion.div>
              </div>

              {/* Core Skills Section */}
              <motion.div className="pt-6 border-t border-border/50" initial={{
              opacity: 0,
              y: 20
            }} animate={isInView ? {
              opacity: 1,
              y: 0
            } : {
              opacity: 0,
              y: 20
            }} transition={{
              duration: 0.6,
              delay: 0.5
            }}>
                <h3 className="text-lg sm:text-xl font-semibold mb-6 text-foreground flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  Core Expertise
                </h3>
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                  <motion.div className="w-full lg:w-auto" initial={{
                  opacity: 0,
                  x: -20
                }} animate={isInView ? {
                  opacity: 1,
                  x: 0
                } : {
                  opacity: 0,
                  x: -20
                }} transition={{
                  duration: 0.6,
                  delay: 0.6
                }}>
                    <ExpertiseIcons />
                  </motion.div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 flex-1">
                    {skills.map((skill, index) => {
                    const Icon = skill.icon;
                    return <motion.div key={skill.name} initial={{
                      opacity: 0,
                      x: 20
                    }} animate={isInView ? {
                      opacity: 1,
                      x: 0
                    } : {
                      opacity: 0,
                      x: 20
                    }} transition={{
                      duration: 0.5,
                      delay: 0.7 + index * 0.1
                    }} whileHover={{
                      y: -5
                    }} className="group/skill">
                          <div className="flex items-center gap-3 mb-2">
                            <motion.div className="p-2 bg-primary/10 rounded-lg group-hover/skill:bg-primary/20 transition-colors duration-300 relative overflow-hidden" whileHover={{
                          scale: 1.1
                        }}>
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent translate-x-[-100%] group-hover/skill:translate-x-[100%] transition-transform duration-700" />
                              <Icon className="w-5 h-5 text-primary relative z-10" />
                            </motion.div>
                            <span className="text-sm font-medium text-foreground">{skill.name}</span>
                          </div>
                          <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
                            <motion.div className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-primary/70 rounded-full" initial={{
                          width: 0
                        }} animate={isInView ? {
                          width: `${skill.level}%`
                        } : {
                          width: 0
                        }} transition={{
                          duration: 1,
                          delay: 0.8 + index * 0.1,
                          ease: "easeOut"
                        }}>
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                            </motion.div>
                          </div>
                          <motion.div className="mt-1 text-xs text-muted-foreground text-right" initial={{
                        opacity: 0
                      }} animate={isInView ? {
                        opacity: 1
                      } : {
                        opacity: 0
                      }} transition={{
                        duration: 0.5,
                        delay: 1 + index * 0.1
                      }}>
                            {skill.level}%
                          </motion.div>
                        </motion.div>;
                  })}
                  </div>
                </div>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>;
};
export default About;