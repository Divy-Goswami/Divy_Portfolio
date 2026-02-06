import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  FileText,
  Send
} from 'lucide-react';
import { useState } from 'react';
import { saveContactSubmission } from '@/lib/database';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'divyg050@gmail.com',
    href: 'mailto:divyg050@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '(437) 818-0192',
    href: 'tel:+14378180192',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Sault Ste. Marie, ON, Canada',
    href: null,
  },
];

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/Divy-Goswami',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/divygoswami',
  },
  {
    icon: FileText,
    label: 'Resume',
    href: '/Techresume.pdf',
  },
];

export function Contact() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Save to database
      await saveContactSubmission({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });
      
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Failed to send message. Please try again later.');
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 sm:py-32 relative"
    >
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-primary font-medium text-sm tracking-wider uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            I'm always open to discussing new opportunities, innovative projects, 
            or potential collaborations. Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>

            <div className="space-y-6 mb-10">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-4 rounded-xl glass hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-medium hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl glass hover:bg-white/10 transition-all duration-300 hover:scale-110 group"
                >
                  <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="p-8 rounded-2xl glass">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

              {error && (
                <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                  <p className="text-sm text-red-400">{error}</p>
                </div>
              )}

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-500" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Message Sent!</h4>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-white/5 border-white/10 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-white/5 border-white/10 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea
                      placeholder="Your message..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={4}
                      className="bg-white/5 border-white/10 focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
