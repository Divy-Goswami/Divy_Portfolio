import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { 
  Code2, 
  Cloud, 
  Database, 
  GitBranch, 
  Layers, 
  Terminal,
  TestTube,
  Workflow
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code2,
    skills: ['Python', 'JavaScript', 'TypeScript', 'C++', 'Java', 'C#', 'SQL', 'HTML/CSS'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Frameworks & Libraries',
    icon: Layers,
    skills: ['React.js', 'Node.js', 'Express', 'Angular', 'Redux', 'Tailwind CSS', 'jQuery'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    skills: ['AWS (S3, Lambda, EC2)', 'Google Cloud Platform', 'Docker', 'Jenkins', 'CI/CD'],
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Oracle'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Version Control',
    icon: GitBranch,
    skills: ['Git', 'GitHub', 'SVN'],
    color: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'Testing',
    icon: TestTube,
    skills: ['Jest', 'Mocha', 'Chai', 'JUnit', 'Selenium', 'Appium', 'TDD'],
    color: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Tools & IDEs',
    icon: Terminal,
    skills: ['VS Code', 'Android Studio', 'Eclipse', 'PyCharm', 'DBeaver', 'Postman'],
    color: 'from-indigo-500 to-purple-500',
  },
  {
    title: 'Methodologies',
    icon: Workflow,
    skills: ['Agile', 'Scrum', 'Kanban', 'Waterfall', 'RESTful API Design', 'Microservices'],
    color: 'from-teal-500 to-cyan-500',
  },
];

export function About() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 sm:py-32 relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-primary font-medium text-sm tracking-wider uppercase mb-3">
            About Me
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Results-driven Full-Stack Software Engineer with expertise in modern JavaScript frameworks, 
            cloud technologies, and database systems. Proven track record of delivering scalable solutions 
            that drive business impact.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`group relative p-6 rounded-2xl glass hover:bg-white/10 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Gradient Border Effect */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              />
              
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <category.icon className="w-6 h-6 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-3">{category.title}</h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs rounded-full bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-foreground transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Key Highlights */}
        <div
          className={`mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center p-8 rounded-2xl glass">
            <div className="text-5xl font-bold text-gradient mb-2">99.5%</div>
            <div className="text-muted-foreground">API Uptime Achieved</div>
          </div>
          <div className="text-center p-8 rounded-2xl glass">
            <div className="text-5xl font-bold text-gradient mb-2">30%</div>
            <div className="text-muted-foreground">Performance Improvement</div>
          </div>
          <div className="text-center p-8 rounded-2xl glass">
            <div className="text-5xl font-bold text-gradient mb-2">20+</div>
            <div className="text-muted-foreground">Features Delivered</div>
          </div>
        </div>
      </div>
    </section>
  );
}
