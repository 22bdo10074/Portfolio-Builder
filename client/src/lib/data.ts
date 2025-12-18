import { Code2, Cloud, Terminal, Monitor, Server, Cpu, Globe, Layout, Shield, Database, Users, Lightbulb, Puzzle, Clock, MessageSquare, RefreshCw } from "lucide-react";

// Import assets to ensure they are bundled and have correct URLs
import profileImg from "@assets/Professional_img.jpg";
import devopsResume from "@assets/Devops_eng_1766074393799.pdf";
import cloudResume from "@assets/cloud_eng_1766074393798.pdf";
import sdeResume from "@assets/SDE_1766074365011.pdf";
import sreResume from "@assets/SRE_1766074365012.pdf";
import frontendResume from "@assets/Frontend_eng_1766074393799.pdf";

export const profile = {
  name: "Sandhya Kumari",
  role: "DevOps & Software Engineer",
  location: "Bodhgaya, Bihar, India",
  email: "connect2sandhyaa@gmail.com",
  phone: "+91 854 198 3472",
  linkedin: "https://www.linkedin.com/in/sandhya-53949825a/",
  github: "https://github.com/22bdo10074",
  image: profileImg,
  resume: sdeResume,
  about: "I'm a passionate DevOps Engineer, Cloud Engineer, SDE, SRE, and Front-end developer. I build scalable systems and beautiful interfaces.",
  quote: "Turning coffee into code and chaos into reliable infrastructure."
};

export const skillsData = [
  {
    id: "devops",
    title: "DevOps Engineer",
    icon: Terminal,
    description: "Automating pipelines and managing infrastructure.",
    keySkills: ["Docker", "Kubernetes", "Jenkins", "Terraform", "CI/CD", "GitHub Actions", "Linux/Bash"],
    projects: [
      {
        title: "DevOps Quest",
        desc: "A Gamified Learning Platform for Progressive DevOps Education. Implemented Docker, K8s, Jenkins pipelines.",
        tech: ["React", "Firebase", "MongoDB", "Docker", "K8s"]
      },
      {
        title: "Infrastructure Automation",
        desc: "Automated backend deployments using Docker and Bash scripting, reducing manual intervention by 40%.",
        tech: ["Bash", "Docker", "AWS"]
      }
    ],
    certs: ["Oracle Cloud Infrastructure 2024 Generative AI Certified Professional"],
    resumeLink: devopsResume
  },
  {
    id: "cloud",
    title: "Cloud Engineer",
    icon: Cloud,
    description: "Architecting scalable cloud solutions on AWS & Azure.",
    keySkills: ["AWS (EKS, Lambda, RDS)", "Azure Firewall", "CloudFormation", "Serverless", "Cloud Security"],
    projects: [
      {
        title: "Azure Cloud Services",
        desc: "Designed distributed application on Azure with Load Balancing to handle high traffic scale.",
        tech: ["Azure", "Load Balancer", "Distributed Systems"]
      }
    ],
    certs: ["AWS Cloud Practitioner Essentials", "Oracle Cloud Infrastructure Foundations Associate"],
    resumeLink: cloudResume
  },
  {
    id: "sde",
    title: "Software Development Engineer",
    icon: Code2,
    description: "Building robust software solutions and D2C platforms.",
    keySkills: ["React.js", "Next.js", "JavaScript", "Java", "Python", "Data Structures"],
    projects: [
      {
        title: "FOODISTA",
        desc: "D2C-style ordering system handling 1000+ daily users. Optimized queue management.",
        tech: ["JS", "HTML5", "CSS3", "REST APIs"]
      }
    ],
    certs: ["Oracle Cloud Infrastructure Gen AI Professional"],
    resumeLink: sdeResume
  },
  {
    id: "sre",
    title: "Site Reliability Engineer",
    icon: Server,
    description: "Ensuring system reliability, monitoring, and security.",
    keySkills: ["Monitoring (Prometheus/Grafana)", "Distributed Systems", "Network Security", "TCP/IP"],
    projects: [
      {
        title: "Reliability Engineering",
        desc: "Acted as DRI, implementing monitoring/alerting systems to detect degradation.",
        tech: ["Prometheus", "Grafana", "Azure Monitor"]
      }
    ],
    certs: ["Cisco Python Essentials"],
    resumeLink: sreResume
  },
  {
    id: "frontend",
    title: "Front-end Developer",
    icon: Layout,
    description: "Crafting responsive and interactive user interfaces.",
    keySkills: ["React.js", "Tailwind CSS", "UI/UX Design", "Framer Motion", "Responsive Design"],
    projects: [
      {
        title: "Portfolio Development",
        desc: "High-performance interactive portfolio sites with modern animations.",
        tech: ["React", "Framer Motion", "Vite"]
      }
    ],
    certs: ["Oracle Cloud Infrastructure Gen AI Professional"],
    resumeLink: frontendResume
  }
];

export const interpersonalSkills = [
  {
    title: "Leadership",
    icon: Users,
    desc: "Led the development team for DevOps Quest, coordinating tasks and ensuring timely delivery."
  },
  {
    title: "Problem Solving",
    icon: Puzzle,
    desc: "Solved complex 'queue management' issues in FOODISTA, reducing wait times by 40%."
  },
  {
    title: "Communication",
    icon: MessageSquare,
    desc: "Managed external vendors and collaborated with Project Working Groups (PWG) for compliance."
  },
  {
    title: "Time Management",
    icon: Clock,
    desc: "Balanced academic research, internships, and project deadlines effectively."
  },
  {
    title: "Critical Thinking",
    icon: Lightbulb,
    desc: "Analyzed security architecture and threat mitigation strategies for research papers."
  },
  {
    title: "Adaptability",
    icon: RefreshCw,
    desc: "Quickly adapted to new technologies, frameworks, and project requirements across diverse roles and domains."
  }
];

export const education = [
  {
    degree: "B.E. Computer Science (DevOps Specialization)",
    institution: "Chandigarh University, Punjab",
    year: "2022 - 2026",
    score: "CGPA: 7.65"
  },
  {
    degree: "Intermediate (Class XII)",
    institution: "KV AFS High Grounds, Chandigarh",
    year: "2022",
    score: "82%"
  },
  {
    degree: "Matriculation (Class X)",
    institution: "GD Goenka Public School, Gaya, Bihar",
    year: "2020",
    score: "84%"
  }
];
