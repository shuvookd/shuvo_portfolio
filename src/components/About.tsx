import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Code2, Brain, Database, Sparkles } from 'lucide-react';
import profileImage from '@/assets/profile.jpg';
import ExpertiseIcons from './ExpertiseIcons';

interface Skill {
  name: string;
  level: number;
  icon: typeof Code2;
}

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills: Skill[] = [
    { name: 'Full-Stack Development', level: 95, icon: Code2 },
    { name: 'AI & Machine Learning', level: 90, icon: Brain },
    { name: 'Data Engineering', level: 85, icon: Database },
    { name: 'Power Platform', level: 92, icon: Sparkles },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 px-4"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-primary transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          About Me
        </h2>

        <Card className={`p-4 sm:p-6 md:p-8 lg:p-12 bg-card border-border transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <div className="space-y-6">
            {/* Profile and Introduction Section */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
              {/* Profile Image */}
              <div className="flex justify-center lg:justify-start w-full lg:w-auto">
                <div className="relative group flex justify-center items-center">
                  <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <img
                    src={profileImage}
                    alt="Shuvo Kumar Das Profile"
                    className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-2xl object-cover border-2 border-primary/30 shadow-xl transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Introduction Text */}
              <div className="flex-1 space-y-4">
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed text-justify">
                 With 5+ years in Software Development and AI Engineering, I build smart, data-driven solutions that improve business processes and decision-making. I have hands-on expertise with the Microsoft Power Platform, especially Power Apps and Power BI, delivering efficient and scalable applications.


                </p>

                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed text-justify">
                  Passionate about AI and machine learning, I focus on creating modern systems that analyze, predict, and automate intelligently. I continuously learn and experiment with new technologies to drive innovation and deliver meaningful impact.
                </p>
              </div>
            </div>

            {/* Core Skills Section */}
            <div className="pt-4">
              <h3 className="text-lg sm:text-xl font-semibold mb-6 text-foreground">Core Expertise</h3>
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                <div className="w-full lg:w-auto">
                  <ExpertiseIcons />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 flex-1">
                    {skills.map((skill, index) => {
                      const Icon = skill.icon;
                      return (
                        <div
                          key={skill.name}
                          className={`group transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                            }`}
                          style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                              <Icon className="w-5 h-5 text-primary" />
                            </div>
                            <span className="text-sm font-medium text-foreground">{skill.name}</span>
                          </div>
                          <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
                            <div
                              className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 ease-out"
                              style={{
                                width: isVisible ? `${skill.level}%` : '0%',
                                transitionDelay: `${(index + 3) * 100}ms`
                              }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                            </div>
                          </div>
                          <div className="mt-1 text-xs text-muted-foreground text-right">{skill.level}%</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
