import { useState, useRef } from 'react';
import { Mail, Github, Linkedin, Send, Facebook, PhoneOutgoingIcon, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
import { motion, useInView } from 'framer-motion';

const Contact = () => {
  const { toast } = useToast();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Form validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: 'Error',
        description: 'Please fill in all fields.',
        variant: 'destructive',
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: 'Error',
        description: 'Please enter a valid email address.',
        variant: 'destructive',
      });
      setIsSubmitting(false);
      return;
    }

    // Send email using EmailJS
    emailjs.send(
      'service_5kjhg5i',
      'template_q7bmc9d',
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      '_o1jAcCqmDodGrhHt'
    )
    .then(() => {
      toast({
        title: '✨ Message Sent Successfully!',
        description: 'Thank you for reaching out. I\'ll get back to you soon.',
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    })
    .catch((error) => {
      console.error(error);
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again later.',
        variant: 'destructive',
      });
      setIsSubmitting(false);
    });
  };

  const socialLinks = [
    { icon: PhoneOutgoingIcon, label: 'Contact', href: 'tel:01831839121', display: '01831839121 | iamshuvokd@gmail.com' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/shuvookd', display: 'github.com/shuvookd' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/shuvookd/', display: 'linkedin.com/in/shuvookd' },
    { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/ShuvooKD/', display: 'facebook.com/ShuvooKD' }, 
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 bg-secondary/30 relative overflow-hidden">
      {/* Floating backgrounds */}
      <motion.div
        className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto max-w-4xl relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Get In Touch
          </h2>
          <motion.div
            className="h-1 w-20 bg-primary mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 glow-effect h-full">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-xl sm:text-2xl text-foreground">Send a Message</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <motion.div
                    className="relative group"
                    whileFocus={{ scale: 1.01 }}
                  >
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="pl-10 bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      required
                      aria-label="Your name"
                    />
                  </motion.div>
                  
                  <motion.div
                    className="relative group"
                    whileFocus={{ scale: 1.01 }}
                  >
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="pl-10 bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      required
                      aria-label="Your email"
                    />
                  </motion.div>
                  
                  <motion.div
                    className="relative group"
                    whileFocus={{ scale: 1.01 }}
                  >
                    <Textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-background border-border text-foreground placeholder:text-muted-foreground min-h-[150px] focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                      required
                      aria-label="Your message"
                    />
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      className="w-full glow-effect relative overflow-hidden group"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      <motion.div
                        className="absolute inset-0 bg-primary/20"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.5 }}
                      />
                      <Send className="mr-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                      <span className="relative z-10">
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </span>
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 glow-effect h-full">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-xl sm:text-2xl text-foreground">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary border border-border hover:border-primary/50 transition-all group relative overflow-hidden"
                    aria-label={link.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 4 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className="relative z-10"
                    >
                      <link.icon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    </motion.div>
                    <div className="min-w-0 flex-1 relative z-10">
                      <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {link.label}
                      </p>
                      <p className="text-sm text-muted-foreground group-hover:text-primary/80 transition-colors break-words">
                        {link.display}
                      </p>
                    </div>
                    <motion.div
                      className="absolute right-3 opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      <Send className="h-4 w-4 text-primary" />
                    </motion.div>
                  </motion.a>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
