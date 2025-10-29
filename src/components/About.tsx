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
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-primary transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          About Me
        </h2>

        <Card className={`p-6 sm:p-8 md:p-12 bg-card border-border transition-all duration-700 delay-150 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="grid md:grid-cols-[300px,1fr] gap-8 items-start">
            <div className="flex justify-center md:justify-start">
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <img
                  src={profileImage}
                  alt="John Doe"
                  className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-2xl object-cover border-2 border-primary/30 shadow-xl transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            <div className="space-y-6 text-left">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-justify">
                With over 5 years experience in Software Development, AI Engineering, and Research, I have over 3 years of hands-on experience in designing, developing, and optimizing cutting-edge software solutions. Specializing in Power Platform, particularly Power Apps and Power BI, I have a proven track record of creating data-driven applications that streamline business processes and enhance decision-making.
              </p>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-justify">
                As an AI Engineer, I am passionate about leveraging artificial intelligence and machine learning techniques to create intelligent systems that can analyze, predict, and make data-driven decisions. I am dedicated to staying at the forefront of technology, continually researching and exploring new methodologies to integrate AI into applications.
              </p>

              {/* Core Skills Section */}
              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-6 text-foreground">Core Expertise</h3>
                <ExpertiseIcons />
                <div className="grid sm:grid-cols-2 gap-6 mt-6">
                  {skills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <div 
                        key={skill.name}
                        className={`group transition-all duration-500 ${
                          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
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

              <div className="pt-6">
                <Button
                  size="lg"
                  className="glow-effect group"
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                    Get in Touch
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
