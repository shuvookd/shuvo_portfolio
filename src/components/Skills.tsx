import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Brain, Wrench, FlaskConical } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: Code,
      skills: ['Python', 'JavaScript', 'TypeScript', 'C++', 'Java', 'Go'],
    },
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'NLP', 'Computer Vision', 'Deep Learning'],
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      skills: ['Docker', 'AWS', 'Git', 'React', 'Node.js', 'PostgreSQL'],
    },
    {
      title: 'Research & Data',
      icon: FlaskConical,
      skills: ['Data Analysis', 'Experiment Design', 'Statistical Modeling', 'Research Papers', 'Data Visualization'],
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
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 glow-effect"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <category.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg text-foreground">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full border border-border hover:border-primary/50 transition-colors"
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
