import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Brain, Wrench, FlaskConical } from 'lucide-react';

const Skills = () => {
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
    <section id="skills" className="py-12 sm:py-16 md:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 text-primary">
          Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 glow-effect group"
            >
              <CardHeader className="text-center pb-3 sm:pb-4 p-4 sm:p-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <category.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <CardTitle className="text-base sm:text-lg text-foreground">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent hover:scrollbar-thumb-primary/40 p-4 sm:p-6 pt-0">
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm bg-secondary text-secondary-foreground rounded-full border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
