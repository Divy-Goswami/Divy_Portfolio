import { Heart, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 relative">
      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo/Name */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-gradient">Divy Goswami</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Full-Stack Software Engineer
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {['About', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full glass hover:bg-white/10 transition-all duration-300 hover:scale-110"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-white/10" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            © {currentYear} Divy Goswami. Built with{' '}
            <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
