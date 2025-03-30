
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { FileDown } from 'lucide-react';

// Sample CV file - in a real application, this would be stored in the public folder
const CV_FILE_PATH = '/john_developer_cv.pdf';

const AboutSection: React.FC = () => {
  const handleDownloadCV = () => {
    // Create a dummy PDF file for download demonstration purposes
    const pdfBlob = new Blob(
      [
        // Simple PDF content
        '%PDF-1.4\n1 0 obj<</Type/Catalog/Pages 2 0 R>>endobj 2 0 obj<</Type/Pages/Kids[3 0 R]/Count 1>>endobj 3 0 obj<</Type/Page/MediaBox[0 0 612 792]/Parent 2 0 R/Resources<<>>>>endobj\nxref\n0 4\n0000000000 65535 f\n0000000010 00000 n\n0000000053 00000 n\n0000000102 00000 n\ntrailer<</Size 4/Root 1 0 R>>\nstartxref\n178\n%%EOF'
      ],
      { type: 'application/pdf' }
    );

    // Create a URL for the blob
    const url = URL.createObjectURL(pdfBlob);
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = url;
    link.download = 'john_developer_cv.pdf';
    
    // Append to the document, click it, and remove it
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up the URL object
    URL.revokeObjectURL(url);
  };

  return (
    <section 
      id="about"
      className="relative pt-32 pb-16 bg-gradient-to-b from-netflix-dark to-netflix-black"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Profile Image */}
            <div className="relative">
              <Avatar className="w-48 h-48 border-4 border-netflix-red shadow-lg">
                <AvatarImage 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=400&h=400" 
                  alt="Developer Profile" 
                />
                <AvatarFallback className="text-4xl bg-netflix-red text-white">JD</AvatarFallback>
              </Avatar>
              
              <div className="absolute -bottom-3 -right-3 bg-netflix-red text-white px-3 py-1 rounded-sm text-sm font-medium">
                Senior Developer
              </div>
            </div>
            
            {/* Profile Description */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-white">John </span>
                <span className="text-netflix-red">Developer</span>
              </h1>
              
              <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
                <span className="bg-white/10 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-white/10 px-3 py-1 rounded-full text-sm">TypeScript</span>
                <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Node.js</span>
                <span className="bg-white/10 px-3 py-1 rounded-full text-sm">AWS</span>
                <span className="bg-white/10 px-3 py-1 rounded-full text-sm">UI/UX</span>
              </div>
              
              <div className="text-white/80 text-lg space-y-4">
                <p>
                  I'm a passionate full-stack developer with over four years of experience in building scalable web applications and intuitive user interfaces.
                </p>
                
                <p>
                  I specialize in React, TypeScript, Python, C#, .NET, and Node.js, always focusing on performance, clean architecture, and user experience.
                </p>
                
                <p>
                  Recently, I've been exploring Generative AI, working on Text-to-SQL generation and automation using Agentic AI solutions.
                </p>
                
                <p>
                  I love tackling complex problems, learning new technologies, and pushing the limits of what AI can do in real-world applications.
                </p>
                
                <p>
                  Let's create something amazing together! 🚀
                </p>
              </div>
              
              <div className="mt-6 flex gap-4 justify-center md:justify-start">
                <a 
                  href="#contact" 
                  className="netflix-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Contact Me
                </a>
                <Button 
                  variant="outline" 
                  onClick={handleDownloadCV}
                  className="flex items-center gap-2 bg-transparent border border-white/20 text-white hover:bg-white/10 hover:text-white"
                >
                  <FileDown size={16} />
                  Download CV
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-netflix-black to-transparent pointer-events-none"></div>
    </section>
  );
};

export default AboutSection;
