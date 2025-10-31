import { Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import profileImage from '@/assets/profile.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      {/* Floating background elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto max-w-5xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Profile Image with floating animation */}
          <motion.div
            className="mb-8 inline-block relative"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-2xl scale-110" />
            <img
              src={profileImage}
              alt="Shuvo Kumar Das - AI Engineer and Software Developer"
              className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-primary/30 shadow-2xl glow-effect mx-auto"
            />
          </motion.div>

          {/* Main heading with animation */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block">Hi, I'm</span>{' '}
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              Shuvo
            </span>{' '}
            <span className="inline-block animate-wave">👋</span>
          </motion.h1>

          {/* Typing animation */}
          <motion.div
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 h-12 sm:h-14 md:h-16 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="text-foreground mr-3">I am a</span>
            <TypeAnimation
              sequence={[
                'AI Engineer',
                2000,
                'Software Developer',
                2000,
                'Researcher',
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="text-primary font-bold"
              repeat={Infinity}
            />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Building intelligent digital experiences through AI, automation & scalable software engineering.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="glow-effect group w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Get in Touch
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
            <Button
              size="lg"
              variant="hero"
              className="group w-full sm:w-auto"
              onClick={() => window.open('https://drive.google.com/uc?export=download&id=1Hcznu_LwBF1zHFN1wCDaK6cYoANZwL9_', '_blank')}
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download CV
            </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
