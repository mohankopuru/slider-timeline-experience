
import React from 'react';
import { Briefcase, Building, Calendar, GraduationCap, Star, UserCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

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

        <div className="max-w-5xl mx-auto relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full netflix-carousel"
          >
            <CarouselContent>
              {experiences.map((experience) => (
                <CarouselItem key={experience.id} className="md:basis-1/2 lg:basis-1/2 pl-4">
                  <Card className="glass-card h-full border-netflix-gray/30">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <div className={`p-2 rounded-full mr-3 ${experience.type === 'job' ? 'bg-netflix-red/20' : 'bg-blue-500/20'}`}>
                            {experience.type === 'job' ? (
                              <Briefcase className="h-5 w-5 text-netflix-red" />
                            ) : (
                              <GraduationCap className="h-5 w-5 text-blue-400" />
                            )}
                          </div>
                          <div className="text-netflix-red/90 text-sm font-medium">
                            {experience.type === 'job' ? 'Work Experience' : 'Education'}
                          </div>
                        </div>
                        <div className="flex items-center text-white/60 text-sm">
                          <Calendar size={14} className="mr-1" />
                          {experience.period}
                        </div>
                      </div>
                      <CardTitle className="text-xl text-white mb-1">{experience.role}</CardTitle>
                      <CardDescription className="text-white/70 flex items-center">
                        <Building size={14} className="mr-2" />
                        {experience.organization}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white/80 mb-4">{experience.description}</p>
                      
                      {experience.highlights && (
                        <div className="mt-4">
                          <h4 className="text-sm font-semibold text-netflix-red mb-2 flex items-center">
                            <Star size={14} className="mr-2" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {experience.highlights.map((highlight, i) => (
                              <li key={i} className="flex items-start">
                                <UserCheck size={14} className="text-netflix-red mr-2 mt-1 flex-shrink-0" />
                                <span className="text-sm text-white/80">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-end space-x-2 mt-6">
              <CarouselPrevious className="relative left-0 right-auto h-10 w-10 rounded-full border-netflix-red/30 bg-netflix-black/80 hover:bg-netflix-red/30">
                <ChevronLeft className="h-6 w-6 text-netflix-red" />
              </CarouselPrevious>
              <CarouselNext className="relative right-0 left-auto h-10 w-10 rounded-full border-netflix-red/30 bg-netflix-black/80 hover:bg-netflix-red/30">
                <ChevronRight className="h-6 w-6 text-netflix-red" />
              </CarouselNext>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
