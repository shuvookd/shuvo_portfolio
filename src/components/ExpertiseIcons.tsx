import { Code2, Brain, Database, Sparkles } from 'lucide-react';

const ExpertiseIcons = () => {
  const icons = [
    { Icon: Code2, label: 'Full-Stack', delay: '0ms' },
    { Icon: Brain, label: 'AI/ML', delay: '100ms' },
    { Icon: Database, label: 'Data Eng', delay: '200ms' },
    { Icon: Sparkles, label: 'Power Platform', delay: '300ms' },
  ];

  return (
    <div className="mt-8 grid grid-cols-2 gap-4">
      {icons.map(({ Icon, label, delay }) => (
        <div
          key={label}
          className="group flex flex-col items-center gap-2 p-4 rounded-lg bg-secondary/30 border border-border/50 hover:border-primary/30 hover:bg-secondary/50 transition-all duration-300"
          style={{ animationDelay: delay }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
            <div className="relative p-3 bg-primary/10 rounded-full group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-6 h-6 text-primary" />
            </div>
          </div>
          <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ExpertiseIcons;
