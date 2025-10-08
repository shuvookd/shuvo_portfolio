import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import profileImage from '@/assets/profile.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
          About Me
        </h2>

        <Card className="p-6 sm:p-8 md:p-12 bg-card border-border">
          <div className="grid md:grid-cols-[300px,1fr] gap-8 items-start">
            <div className="flex justify-center md:justify-start">
              <img
                src={profileImage}
                alt="John Doe"
                className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-2xl object-cover border-2 border-primary/30 shadow-xl"
              />
            </div>

            <div className="space-y-4 text-left">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                With over 5 years of experience in software development, I specialize in building 
                intelligent systems that solve real-world problems. My journey in technology has been 
                driven by a deep curiosity about artificial intelligence and its potential to transform industries.
              </p>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                I've contributed to cutting-edge AI research, with papers published on arXiv focusing on 
                natural language processing and computer vision. My work spans from developing scalable 
                machine learning pipelines to creating intuitive user interfaces that make complex technology accessible.
              </p>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                As a strong advocate for ethical AI and open-source development, I actively contribute to 
                community projects and share knowledge through technical writing and mentorship. I'm particularly 
                interested in democratizing AI technology and ensuring its responsible deployment.
              </p>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new ML frameworks, participating in hackathons, 
                or discussing the latest advancements in AI research with fellow enthusiasts.
              </p>

              <div className="pt-6">
                <Button
                  size="lg"
                  className="glow-effect"
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get in Touch
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
