import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { GraduationCap, Calendar, MapPin, Award, Trophy, Medal } from 'lucide-react';

const education = [
  {
    degree: 'Master of Computer Science',
    institution: 'Algoma University',
    location: 'Sault Ste. Marie, ON',
    period: 'Jan 2025 – Dec 2025',
    focus: 'Machine Learning & Computer Vision',
    icon: GraduationCap,
  },
  {
    degree: 'Post Graduate Certificate',
    institution: 'Conestoga College',
    location: 'Kitchener, ON',
    period: 'Jan 2024 – Aug 2024',
    focus: 'Information Technology Project Management',
    icon: GraduationCap,
  },
  {
    degree: 'Bachelor of Engineering in IT',
    institution: 'L.D. College of Engineering, GTU',
    location: 'Ahmedabad, India',
    period: 'June 2019 – July 2023',
    focus: 'Information Technology',
    icon: GraduationCap,
  },
];

const achievements = [
  {
    title: 'IBM SkillsBuild Hackathon',
    description: 'Led 4-member team as Website Designer, developed functional website with React.js and MongoDB in 48 hours, secured top 3 finish among 50+ participants.',
    icon: Trophy,
    color: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'Rural Warrior Hackathon',
    description: 'Developed POS-based Text-to-Speech mechanism for rural poverty alleviation schemes, recognized for innovative social impact approach.',
    icon: Medal,
    color: 'from-green-500 to-emerald-500',
  },
];

const certifications = [
  'IBM SkillsBuild Web Development',
  'Atlassian Agile Project Management Professional',
  'Responsive Web Design (freeCodeCamp)',
];

export function Education() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      id="education"
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
            Background
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Education & <span className="text-gradient">Achievements</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Column */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-primary" />
              Education
            </h3>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={edu.degree}
                  className={`relative p-6 rounded-2xl glass hover:bg-white/10 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Timeline connector */}
                  {index < education.length - 1 && (
                    <div className="absolute left-8 top-full w-px h-6 bg-primary/30" />
                  )}

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <edu.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-1">{edu.degree}</h4>
                      <p className="text-muted-foreground mb-2">{edu.institution}</p>
                      
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </span>
                      </div>
                      
                      <p className="text-sm text-primary mt-2">{edu.focus}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div
              className={`mt-8 p-6 rounded-2xl glass transition-all duration-700 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Certifications
              </h4>
              <div className="space-y-2">
                {certifications.map((cert) => (
                  <div
                    key={cert}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements Column */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Trophy className="w-6 h-6 text-primary" />
              Hackathons & Awards
            </h3>

            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.title}
                  className={`group relative p-6 rounded-2xl glass hover:bg-white/10 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                  }`}
                  style={{ transitionDelay: `${index * 150 + 300}ms` }}
                >
                  {/* Gradient border effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  />

                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${achievement.color} flex items-center justify-center flex-shrink-0`}
                    >
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                        {achievement.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Card */}
            <div
              className={`mt-8 p-6 rounded-2xl glass transition-all duration-700 delay-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-1">Top 3</div>
                  <div className="text-sm text-muted-foreground">Hackathon Finish</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-1">48h</div>
                  <div className="text-sm text-muted-foreground">Rapid Development</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
