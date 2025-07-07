
import { ReactNode } from 'react';

export interface TimelineStage {
  id: string;
  year: string;
  age: string;
  title: string;
  icon: string;
  description: string;
}

export interface ProfileSection {
  id: string;
  title: string;
  content: ReactNode | string;
  details?: {
    [key: string]: string | string[];
  };
}

export const TIMELINE_STAGES: TimelineStage[] = [
  {
    id: "child",
    year: "2000",
    age: "Childhood",
    title: "Early Beginnings",
    icon: "👶",
    description: "My journey began with a curiosity for how things work..."
  },
  {
    id: "student",
    year: "2010",
    age: "Student",
    title: "Academic Exploration",
    icon: "🧑‍🎓",
    description: "School years filled with discovering technology and coding..."
  },
  {
    id: "college",
    year: "2015",
    age: "College",
    title: "Higher Education",
    icon: "🎓",
    description: "College years where I specialized in computer science..."
  },
  {
    id: "junior",
    year: "2018",
    age: "Junior Dev",
    title: "Career Start",
    icon: "💻",
    description: "First steps into professional software development..."
  },
  {
    id: "engineer",
    year: "Present",
    age: "Engineer",
    title: "Professional Engineer",
    icon: "👨‍💻",
    description: "Currently working as a full-stack developer..."
  }
];

export const PROFILE_CONTENT: Record<string, ProfileSection[]> = {
  "child": [
    {
      id: "about", 
      title: "About",
      content: "From an early age, I was fascinated by technology. I would spend hours taking apart old electronics and trying to figure out how they worked. My parents encouraged this curiosity by getting me my first computer when I was just 8 years old."
    },
    {
      id: "interests",
      title: "Hobbies & Interests",
      content: "As a child, I loved building with LEGOs, solving puzzles, and playing video games. These activities helped develop my problem-solving skills and spatial reasoning that would later benefit my engineering career."
    }
  ],
  "student": [
    {
      id: "about",
      title: "About",
      content: "During my school years, I discovered my passion for programming when I took my first computer science class. I started learning basic programming languages and created simple games and applications."
    },
    {
      id: "tech-stack",
      title: "Tech Stack",
      content: "I began learning:",
      details: {
        "Languages": ["HTML", "CSS", "JavaScript", "Python"],
        "Tools": ["Scratch", "Code.org", "Microsoft Visual Studio"]
      }
    },
    {
      id: "interests",
      title: "Hobbies & Interests",
      content: "I joined the robotics club at school and participated in several competitions. I also enjoyed reading science fiction books and watching documentaries about technology and innovation."
    }
  ],
  "college": [
    {
      id: "about",
      title: "About", 
      content: "College was where I really honed my skills and developed a deeper understanding of computer science fundamentals. I collaborated on various projects and participated in hackathons."
    },
    {
      id: "current-role",
      title: "Current Role",
      content: "Computer Science Student with internships in web development and software engineering."
    },
    {
      id: "tech-stack",
      title: "Tech Stack",
      content: "Expanded my knowledge with:",
      details: {
        "Languages": ["Java", "Python", "SQL", "TypeScript"],
        "Frameworks": ["React", "NextJs", "Node.Js"],
        "Tools": ["Git","Visual Studio Code","VS Code","Jira"]
      }
    },
    {
      id: "interests",
      title: "Hobbies & Interests",
      content: "I became interested in open-source development, contributing to various projects. I also enjoyed hiking, photography, and playing volleyball to balance my technical pursuits."
    }
  ],
  "junior": [
    {
      id: "about",
      title: "About",
      content: "Starting my professional career as a junior developer was both exciting and challenging. I worked on real-world projects and learned to collaborate with cross-functional teams."
    },
    {
      id: "current-role",
      title: "Current Role",
      content: "Junior Software Developer at a Intel Corporation focusing on both front-end and backend development, and working with cross functional teams through entire software development lifecycle"
    },
    {
      id: "tech-stack",
      title: "Tech Stack",
      content: "Professional toolkit:",
      details: {
        "Front-end": ["React", "Tailwind CSS", "TypeScript", "JavaScript", "HTML", "CSS", "Bootstrap"],
        "Back-end": ["Node.js", "Python", "Flask", "SQL", "PostGreSQL"],
        "Tools": ["Git", "JIRA", "CI/CD pipelines"]
      }
    },
    {
      id: "interests",
      title: "Hobbies & Interests",
      content: "I started attending tech conferences and networking events. Outside of work, I enjoyed cooking, traveling, and learning about AI/ML Developments."
    }
  ],
  "engineer": [
    {
      id: "about",
      title: "About",
      content: "Now as an experienced engineer, I lead projects and mentor junior developers. I've developed expertise in building scalable applications and implementing best practices in software development."
    },
    {
      id: "current-role",
      title: "Current Role",
      content: "Senior Full-Stack Engineer specializing in building robust, user-friendly web applications. I lead a team of developers and work closely with product managers to deliver high-quality software solutions."
    },
    {
      id: "tech-stack",
      title: "Tech Stack",
      content: "Advanced professional toolkit:",
      details: {
        "Front-end": ["React", "Next.js", "Tailwind CSS", "TypeScript"],
        "Back-end": ["Node.js", "Next.Js", "PostGreSQL", "Redis", "Python"],
        "DevOps": ["Docker", "CI/CD"],
        "Tools": ["Git", "JIRA","VS Code","Visual Studio Code", "Cursor"]
      }
    },
    {
      id: "interests",
      title: "Hobbies & Interests",
      content: "I enjoy writing technical blog posts on Medium. I'm passionate about mentoring new developers and contributing to open-source projects. In my free time, I practice martial arts, go on hikes, and explore new coffee shops."
    }
  ]
};
