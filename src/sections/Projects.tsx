import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Eye, Lock, MapPin, Brain } from 'lucide-react';

const projects = [
  {
    title: 'Video Attention Detector',
    description: 'Real-time video attention detection system using computer vision and deep learning techniques to monitor and analyze user engagement patterns with 85%+ accuracy.',
    image: '/project-attention.jpg',
    icon: Brain,
    technologies: ['Python', 'OpenCV', 'TensorFlow', 'Computer Vision', 'Deep Learning'],
    features: [
      'Facial landmark detection and eye-gaze tracking',
      'Head pose estimation for multi-modal attention analysis',
      'Data processing pipeline handling 30+ FPS video streams',
      'Visualization dashboard with attention metrics and analytics',
    ],
    github: 'https://github.com/Divy-Goswami/Video_Attention_Detector',
    demo: null,
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Secure Password Manager',
    description: 'Full-stack password management application with end-to-end AES-256 encryption and biometric authentication, achieving 99.9% data security compliance.',
    image: '/project-password.jpg',
    icon: Lock,
    technologies: ['TypeScript', 'React', 'Python', 'Flask', 'JWT', 'REST API'],
    features: [
      'JWT-based authentication with bcrypt password hashing',
      'Real-time password strength analysis with zxcvbn',
      'Password generation with entropy-based randomization',
      '40+ successful CI/CD deployments with 99.5% uptime',
    ],
    github: 'https://github.com/Divy-Goswami/Secure_Password_Manager_Biometric',
    demo: null,
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'SaultRide',
    description: 'Scalable ride-sharing web application serving Sault Ste. Marie community with real-time location tracking, weather integration, and route optimization.',
    image: '/project-ride.jpg',
    icon: MapPin,
    technologies: ['TypeScript', 'React', 'Node.js', 'Express', 'Leaflet', 'REST API'],
    features: [
      'Real-time location tracking with Geolocation API',
      'OpenWeatherMap API integration for weather data',
      'Automated route visualization with Haversine calculations',
      'Responsive UI with <50ms response time',
    ],
    github: 'https://github.com/Divy-Goswami/SualtRide',
    demo: null,
    color: 'from-blue-500 to-cyan-500',
  },
];

export function Projects() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      id="projects"
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
            Featured Work
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A showcase of my technical expertise and passion for building innovative solutions 
            across web development, AI/ML, and cloud technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative rounded-2xl overflow-hidden glass hover:bg-white/10 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                
                {/* Icon Badge */}
                <div
                  className={`absolute top-4 left-4 w-10 h-10 rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center`}
                >
                  <project.icon className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Features */}
                <ul className="space-y-1 mb-4">
                  {project.features.slice(0, 2).map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs bg-white/5 hover:bg-white/10"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="secondary" className="text-xs bg-white/5">
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-white/20 hover:bg-white/10"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  {project.demo && (
                    <Button
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary/90"
                      asChild
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}
              />
            </div>
          ))}
        </div>

        {/* View All Projects */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Button
            size="lg"
            variant="outline"
            className="border-white/20 hover:bg-white/10 rounded-full px-8"
            asChild
          >
            <a
              href="https://github.com/Divy-Goswami"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Eye className="w-4 h-4 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
