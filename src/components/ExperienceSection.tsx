
import React from 'react';
import { Briefcase, Building, Calendar, GraduationCap, Star, UserCheck } from 'lucide-react';

interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  type: 'job' | 'education';
  highlights?: string[];
}

const experiences: Experience[] = [
  {
    id: 'exp1',
    role: 'Senior Full-Stack Engineer',
    organization: 'TechCorp Solutions',
    period: '2022 - Present',
    description: 'Leading development of cloud-based enterprise applications. Mentoring junior developers and implementing best practices across teams.',
    type: 'job',
    highlights: [
      'Led a team of 5 developers to deliver a major platform upgrade',
      'Implemented CI/CD pipeline reducing deployment time by 70%',
      'Improved application performance by 40% through code optimization'
    ]
  },
  {
    id: 'exp2',
    role: 'Software Developer',
    organization: 'InnovateTech',
    period: '2019 - 2022',
    description: 'Developed responsive web applications using React and Node.js. Collaborated with UX designers to implement user-friendly interfaces.',
    type: 'job',
    highlights: [
      'Built RESTful APIs handling 1M+ daily requests',
      'Reduced page load time by 60% through optimization',
      'Implemented authentication system with 2FA'
    ]
  },
  {
    id: 'exp3',
    role: 'Junior Developer',
    organization: 'StartupHub',
    period: '2018 - 2019',
    description: 'Maintained and enhanced company website and internal tools. Collaborated on developing new features for client-facing applications.',
    type: 'job'
  },
  {
    id: 'exp4',
    role: 'Computer Science Degree',
    organization: 'Tech University',
    period: '2014 - 2018',
    description: 'Bachelor of Science in Computer Science with focus on software engineering and web technologies. GPA: 3.8/4.0',
    type: 'education',
    highlights: [
      'Graduated with honors',
      'Capstone project: Real-time collaboration tool',
      'Teaching Assistant for Web Development courses'
    ]
  }
];

const ExperienceSection: React.FC = () => {
  return (
    <section 
      id="experience" 
      className="py-24 mt-8 bg-netflix-black/50 scroll-mt-24"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-netflix-red/80 rounded-sm text-xs font-medium tracking-wider text-white mb-4">
            CAREER PATH
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" id="experience-title">Professional Experience</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            My journey through the tech industry, organizations I've worked with, and skills I've developed along the way.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 sm:pl-32 py-6 group">
            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-netflix-red/20 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-4 after:h-4 after:bg-netflix-red after:border-4 after:box-content after:border-netflix-dark after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              {experiences.map((experience, index) => (
                <div key={experience.id} className="experience-card glass-card p-6 mb-8 w-full">
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-48 mb-4 sm:mb-0">
                      <div className="text-netflix-red font-medium mb-1 flex items-center">
                        {experience.type === 'job' ? (
                          <Briefcase size={18} className="mr-2" />
                        ) : (
                          <GraduationCap size={18} className="mr-2" />
                        )}
                        {experience.type === 'job' ? 'Work' : 'Education'}
                      </div>
                      <div className="text-white/60 text-sm flex items-center">
                        <Calendar size={16} className="mr-2" />
                        {experience.period}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{experience.role}</h3>
                      <div className="text-white/70 mb-4 flex items-center">
                        <Building size={16} className="mr-2" />
                        {experience.organization}
                      </div>
                      <p className="text-white/80 mb-4">{experience.description}</p>
                      
                      {experience.highlights && (
                        <div className="mt-4">
                          <h4 className="text-sm font-semibold text-netflix-red mb-2 flex items-center">
                            <Star size={16} className="mr-2" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {experience.highlights.map((highlight, i) => (
                              <li key={i} className="flex items-start">
                                <UserCheck size={16} className="text-netflix-red mr-2 mt-1 flex-shrink-0" />
                                <span className="text-sm text-white/80">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
