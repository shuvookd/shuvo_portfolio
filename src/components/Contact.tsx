import { useState } from 'react';
import { Mail, Github, Linkedin, Twitter, Send, Facebook, PhoneOutgoingIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser'; // Added EmailJS import

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Form validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: 'Error',
        description: 'Please fill in all fields.',
        variant: 'destructive',
      });
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
      return;
    }

    // Send email using EmailJS
    emailjs.send(
      'service_5kjhg5i',   // Replace with your EmailJS service ID
      'template_q7bmc9d',  // Replace with your EmailJS template ID
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      '_o1jAcCqmDodGrhHt'    // Replace with your EmailJS public key
    )
    .then(() => {
      toast({
        title: 'Message Sent!',
        description: 'Thank you for reaching out. I\'ll get back to you soon.',
      });
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.error(error);
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again later.',
        variant: 'destructive',
      });
    });
  };

  const socialLinks = [
    { icon: PhoneOutgoingIcon, label: 'Contact', href: 'tel:01831839121', display: '01831839121 | iamshuvokd@gmail.com' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/shuvookd', display: 'github.com/shuvookd' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/shuvookd/', display: 'linkedin.com/in/shuvookd' },
    { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/ShuvooKD/', display: 'facebook.com/ShuvooKD' }, 
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 text-primary">
          Contact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <Card className="bg-card border-border">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-xl sm:text-2xl text-foreground">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0">
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                    required
                    aria-label="Your name"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                    required
                    aria-label="Your email"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background border-border text-foreground placeholder:text-muted-foreground min-h-[150px]"
                    required
                    aria-label="Your message"
                  />
                </div>
                <Button type="submit" className="w-full glow-effect" size="lg">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-xl sm:text-2xl text-foreground">Connect With Me</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary border border-border hover:border-primary/50 transition-all group"
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-foreground">{link.label}</p>
                    <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors break-words">
                      {link.display}
                    </p>
                  </div>
                </a>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
