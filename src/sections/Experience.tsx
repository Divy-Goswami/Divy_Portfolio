import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

const experiences = [
  {
    title: 'Software Engineer',
    company: 'CSRBOX Foundation',
    location: 'Ahmedabad, India',
    period: 'Dec 2022 – Dec 2023',
    description: 'Developed and maintained full-stack web applications for IBM SkillsBuild for Jobs (IBMSB4JS) platform serving 10,000+ users across multiple regions.',
    achievements: [
      'Architected 50+ reusable React components with modern hooks, reducing code redundancy by 40%',
      'Integrated AWS services (S3, Lambda, EC2) improving system performance by 30% and reducing latency by 20%',
      'Designed and implemented 15+ RESTful APIs with 99.5% uptime and efficient data flow',
      'Collaborated with cross-functional teams using Agile methodologies to deliver 20+ features on schedule',
    ],
    technologies: ['React.js', 'Redux', 'Node.js', 'MongoDB', 'AWS', 'REST API'],
  },
  {
    title: 'Android Developer Intern',
    company: 'Oasis Infobyte',
    location: 'Delhi, India',
    period: 'May 2022 – Dec 2022',
    description: 'Developed Android applications using Java with clean architecture patterns and Material Design guidelines.',
    achievements: [
      'Developed 6+ Android applications including to-do app, quiz app, and unit conversion tools',
      'Implemented MVVM architecture improving code maintainability by 35%',
      'Optimized app performance reducing crash rates by 40% and improving launch time by 30%',
      'Conducted code reviews for 10+ team members ensuring 95%+ performance benchmarks',
    ],
    technologies: ['Java', 'Android SDK', 'MVVM', 'Material Design', 'Android Profiler'],
  },
];

export function Experience() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      id="experience"
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
            Work Experience
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Professional <span className="text-gradient">Journey</span>
          </h2>
        </div>

        {/* Experience Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-transparent hidden md:block" />

          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className={`relative mb-12 last:mb-0 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`md:flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-glow-sm z-10" />

                {/* Content Card */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="p-6 sm:p-8 rounded-2xl glass hover:bg-white/10 transition-all duration-300 group">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-muted-foreground">{exp.company}</p>
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                    {/* Achievements */}
                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
