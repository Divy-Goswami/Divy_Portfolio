import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, FileText } from 'lucide-react';

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-primary font-medium text-lg mb-4 tracking-wider uppercase">
            Full-Stack Software Engineer
          </p>
        </div>

        <h1
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 transition-all duration-1000 delay-200 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-gradient">Divy Goswami</span>
        </h1>

        <p
          className={`text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed transition-all duration-1000 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Building scalable web applications and cloud-based solutions with React.js, Node.js, 
          Python, and AWS. Passionate about leveraging cutting-edge technologies to solve complex problems 
          and deliver high-impact solutions at scale.
        </p>

        {/* Stats */}
        <div
          className={`flex flex-wrap justify-center gap-8 sm:gap-12 mb-12 transition-all duration-1000 delay-400 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-gradient">2+</div>
            <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-gradient">50+</div>
            <div className="text-sm text-muted-foreground mt-1">Components Built</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-gradient">10K+</div>
            <div className="text-sm text-muted-foreground mt-1">Users Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-gradient">40%</div>
            <div className="text-sm text-muted-foreground mt-1">Code Reduction</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full shadow-glow-sm hover:shadow-glow transition-all duration-300"
            onClick={() => scrollToSection('projects')}
          >
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/20 hover:bg-white/10 px-8 py-6 text-lg rounded-full transition-all duration-300"
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch
          </Button>
        </div>

        {/* Social Links */}
        <div
          className={`flex justify-center gap-4 transition-all duration-1000 delay-600 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <a
            href="https://github.com/Divy-Goswami"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass hover:bg-white/10 transition-all duration-300 hover:scale-110"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/divygoswami"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass hover:bg-white/10 transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:divyg050@gmail.com"
            className="p-3 rounded-full glass hover:bg-white/10 transition-all duration-300 hover:scale-110"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="/Techresume.pdf"
            target="_blank"
            className="p-3 rounded-full glass hover:bg-white/10 transition-all duration-300 hover:scale-110"
          >
            <FileText className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <button
          onClick={() => scrollToSection('about')}
          className="p-2 rounded-full glass hover:bg-white/10 transition-all duration-300 animate-bounce"
        >
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
