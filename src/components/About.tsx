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
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-justify ">
                With over 5 years experience in Software Development, AI Engineering, and Research, I have over 3 years of hands-on experience in designing, developing, and optimizing cutting-edge software solutions. Specializing in Power Platform, particularly Power Apps and Power BI, I have a proven track record of creating data-driven applications that streamline business processes and enhance decision-making. My expertise lies in building custom apps, automating workflows, and visualizing complex data insights to solve real-world business challenges.         </p>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-justify ">
                As an AI Engineer, I am passionate about leveraging artificial intelligence and machine learning techniques to create intelligent systems that can analyze, predict, and make data-driven decisions. I am dedicated to staying at the forefront of technology, continually researching and exploring new methodologies to integrate AI into applications. My strong foundation in both software development and AI enables me to bring innovative ideas to life and deliver value through powerful, scalable solutions.
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
