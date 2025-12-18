import {
  Code2,
  Cloud,
  Terminal,
  Server,
  Layout,
  Users,
  Lightbulb,
  Puzzle,
  Clock,
  MessageSquare,
  RefreshCw
} from "lucide-react";

/* ✅ Define constants properly */
const profileImg = "/images/Professional_img.jpg";

const sde = "/resumes/Sandhya_DevOps_Engineer.pdf";
const sce = "/resumes/Sandhya_Cloud_Engineer.pdf";
const ssde = "/resumes/Sandhya_Software_Developer.pdf";
const ssre = "/resumes/Sandhya_Site_Reliability_Engineer.pdf";
const sfd = "/resumes/Sandhya_Frontend_Developer.pdf";

export const profile = {
  name: "Sandhya Kumari",
  role: "DevOps & Software Engineer",
  location: "Bodhgaya, Bihar, India",
  email: "connect2sandhyaa@gmail.com",
  phone: "+91 854 198 3472",
  linkedin: "https://www.linkedin.com/in/sandhya-53949825a/",
  github: "https://github.com/22bdo10074",
  image: profileImg,
  about:
    "I'm a passionate DevOps Engineer, Cloud Engineer, SDE, SRE, and Front-end developer. I build scalable systems and beautiful interfaces.",
  quote: "Turning coffee into code and chaos into reliable infrastructure."
};

export const skillsData = [
  {
    id: "devops",
    title: "DevOps Engineer",
    icon: Terminal,
    description: "Automating pipelines and managing infrastructure.",
    keySkills: ["AWS (EC2, S3, EKS, RDS)", "Azure", "CloudFormation", "Docker", "Kubernetes", "Jenkins", "Terraform", "Ansible", "Git/GitHub", "Python", "Bash/Shell Scripting", "Linux Administration (Ubuntu/CentOS)", "Prometheus", "Grafana", "ELK Stack", "CloudWatch"],
    projects: [
      {
        title: "DevOps Quest",
        desc: "A Gamified Learning Platform for Progressive DevOps Education. Implemented Docker, K8s, Jenkins pipelines.",
        tech: ["React", "Firebase", "MongoDB", "Docker", "K8s"]
      }
    ],
    certs: ["Oracle Cloud Infrastructure 2024 Generative AI Certified Professional"],
    resumeLink: sde
  },
  {
    id: "cloud",
    title: "Cloud Engineer",
    icon: Cloud,
    description: "Architecting scalable cloud solutions on AWS & Azure.",
    keySkills: ["AWS (EC2, S3, VPC, RDS, EKS)", "Azure", "Google Cloud Concepts", "Terraform", "CloudFormation", "Ansible", "Configuration Management", "VPC Design", "Subnets", "Security Groups", "IAM Roles", "Load Balancing (ELB/ALB)", "Docker", "Kubernetes", "Jenkins", "CI/CD Pipelines", "Git", "CloudWatch", "Prometheus", "Grafana", "Linux Administration (Ubuntu/RHEL)"],
    projects: [],
    certs: ["AWS Cloud Practitioner Essentials", "Oracle Cloud Infrastructure Foundations Associate"],
    resumeLink: sce
  },
  {
    id: "sde",
    title: "Software Development Engineer",
    icon: Code2,
    description: "Building robust software solutions and D2C platforms.",
    keySkills: ["Java", "C++", "Python", "JavaScript (ES6+)", "SQL", "Bash Scripting",  "React.js", "HTML5", "CSS3", "RESTful APIs", "Node.js Concepts", "JSON", "XML", "MySQL", "MongoDB", "Database Design", "Query Optimization", "Git/GitHub", "VS Code", "Docker", "Jenkins", "Linux (Ubuntu)", "AWS Basic Services"],
    projects: [
      {
        title: "FOODISTA",
        desc: "D2C-style ordering system handling 1000+ daily users. Optimized queue management.",
        tech: ["JS", "HTML5", "CSS3", "REST APIs"]
      }
    ],
    certs: ["Oracle Cloud Infrastructure Gen AI Professional"],
    resumeLink: ssde
  },
  {
    id: "sre",
    title: "Site Reliability Engineer",
    icon: Server,
    description: "Ensuring system reliability, monitoring, and security.",
    keySkills: ["Site Reliability Engineering", "Observability", "Incident Management", "Capacity Planning", "Toil Reduction", "Prometheus", "Grafana", "ELK Stack (Logstash, Kibana)", "CloudWatch", "AlertManager", "AWS (EC2, EKS, S3)", "Terraform (IaC)", "Docker", "Kubernetes", "Ansible", "Python", "Bash/Shell", "Go (Basic)", "Java", "SQL", "Jenkins", "Git/GitHub", "Linux Administration", "Automated Deployment Pipelines"],
    projects: [],
    certs: [],
    resumeLink: ssre
  },
  {
    id: "frontend",
    title: "Front-end Developer",
    icon: Layout,
    description: "Crafting responsive and interactive user interfaces.",
    keySkills: ["React.js","Next.js","JavaScript (ES6+)", "HTML5", "CSS3", "TypeScript", "Tailwind CSS", "SCSS/SASS", "Bootstrap", "Flexbox/Grid", "UI/UX Design", "Framer Motion", "Responsive Design", "Redux Toolkit", "Context API", "RESTful API Integration", "JSON", "Axios", "Fetch API", "Git/GitHub", "VS Code", "Chrome DevTools", "Postman", "Figma (Collaboration)", "Jest (Basic)"],
    projects: [],
    certs: [],
    resumeLink: sfd
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
