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
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
          Skills
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 glow-effect group"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <category.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg text-foreground">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent hover:scrollbar-thumb-primary/40">
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs sm:text-sm bg-secondary text-secondary-foreground rounded-full border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-200 cursor-default"
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
