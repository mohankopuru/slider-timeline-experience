
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const ExperienceSection: React.FC = () => {
  return (
    <section className="py-20 mt-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            Career <span className="text-netflix-red">Highlights</span>
          </h2>
          
          <div className="bg-netflix-gray/20 backdrop-blur-sm rounded-lg border border-white/10 p-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-white/10">
                <AccordionTrigger className="text-xl hover:text-netflix-red">
                  <div className="flex flex-col items-start text-left">
                    <span>Senior Frontend Engineer</span>
                    <span className="text-sm text-white/60 font-normal">2020 - Present | TechFlix Inc.</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-white/80">
                  <p className="mb-4">
                    Led the frontend development team in building a streaming platform with React and TypeScript.
                  </p>
                  <ul className="space-y-2 ml-5 list-disc">
                    <li>Implemented a component library that reduced development time by 40%</li>
                    <li>Optimized application performance, improving load times by 60%</li>
                    <li>Mentored junior developers and established best practices</li>
                    <li>Collaborated with UX team to improve user engagement metrics</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border-white/10">
                <AccordionTrigger className="text-xl hover:text-netflix-red">
                  <div className="flex flex-col items-start text-left">
                    <span>Full Stack Developer</span>
                    <span className="text-sm text-white/60 font-normal">2015 - 2020 | WebStream Solutions</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-white/80">
                  <p className="mb-4">
                    Developed and maintained web applications for enterprise clients using React, Node.js, and MongoDB.
                  </p>
                  <ul className="space-y-2 ml-5 list-disc">
                    <li>Built RESTful APIs and microservices architecture</li>
                    <li>Implemented authentication and authorization systems</li>
                    <li>Led the migration from monolithic to microservices architecture</li>
                    <li>Integrated third-party APIs and payment gateways</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border-white/10">
                <AccordionTrigger className="text-xl hover:text-netflix-red">
                  <div className="flex flex-col items-start text-left">
                    <span>Junior Web Developer</span>
                    <span className="text-sm text-white/60 font-normal">2010 - 2015 | Digital Creations</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-white/80">
                  <p className="mb-4">
                    Started my career building responsive websites and web applications for small to medium businesses.
                  </p>
                  <ul className="space-y-2 ml-5 list-disc">
                    <li>Created responsive layouts using HTML, CSS, and JavaScript</li>
                    <li>Developed WordPress themes and plugins for clients</li>
                    <li>Implemented e-commerce solutions with WooCommerce</li>
                    <li>Collaborated with designers to bring mockups to life</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
