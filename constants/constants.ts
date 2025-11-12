import { EducationsType, ExperienceType, NavLinksType, ProjectType, ServiceType, SkillType } from "@/types/Type";
import { BiCertification } from "react-icons/bi";
import { FaHome, FaInfo, FaReact, FaTasks } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa6";
import { MdOutlineWorkOutline } from "react-icons/md";
import { SiDotnet, SiExpress, SiGit, SiHtml5, SiJavascript, SiMongodb, SiMysql, SiNextdotjs, SiNodedotjs, SiRabbitmq, SiReact, SiRedux, SiSqlite, SiTailwindcss, SiTypescript } from "react-icons/si";

export const NavLinks: NavLinksType[] = [
    {
        id: 1,
        url: "/",
        label: "Home",
        icon: FaHome
    },
    {
        id: 2,
        url: "#services",
        label: "Services",
        icon: FaInfo,
    },
    {
        id: 3,
        url: "#experience",
        label: "Experience",
        icon: MdOutlineWorkOutline
    },
    {
        id: 4,
        url: "#skills",
        label: "Skills",
        icon: FaTasks
    },
    {
        id: 5,
        url: "#projects",
        label: "Projects",
        icon: MdOutlineWorkOutline
    }
]

export const Service: ServiceType[] = [
    {
        id: 1,
        img: "/s1.png",
        title: "Frontend Development",
        description: "Creating high-performance, user-friendly interfaces that smoothly on every device"
    },
    {
        id: 2,
        img: "/s2.png",
        title: "Backend Development",
        description: "Building high-performance, scalable, and secure server-side applications and APIs."
    },
    {
        id: 3,
        img: "/s3.png",
        title: "Fullstack Development",
        description: "Integrating frontend and backend skills to build seamless and full-stack digital solutions"
    },
    {
        id: 4,
        img: "/s4.png",
        title: "Analysis & Design",
        description: "Developing optimized systems and workflows to improve scalability and speed"
    }
]

export const Experiences: ExperienceType[] = [
    {
        id: 1,
        jobTitle: "Internship developer",
        startDate: new Date("2025-04-09"),
        endDate: new Date("2025-07-09"),
        company: "Opus Solutions",
        description: "Built CRM System with React+TS, ASP.NET and Landing page Next.js",
        icon: FaReact
    },
    {
        id: 2,
        jobTitle: "Personal projects",
        startDate: new Date("2024-08-01"),
        endDate: new Date(),
        company: "Self-employed",
        description: "Using JavaScript/TypeScript and its frameworks to build web applications",
        icon: FaCodepen
    }
]

export const Educations: EducationsType[] = [
    {
        id: 1,
        startDate: new Date("2021-08-01"),
        endDate: new Date("2025-09-25"),
        degree: "Bachelor of Computer Science",
        institution: "Ton Duc Thang University",
        description: "GPA: 3.6/4.0",
        Icon: BiCertification,
    },
]
export const Skills: SkillType[] = [
  {
    id: 1,
    name: "HTML & CSS",
    level: "Advanced",
    Icon: SiHtml5,
  },
  {
    id: 2,
    name: "JavaScript",
    level: "Advanced",
    Icon: SiJavascript,
  },
  {
    id: 3,
    name: "TypeScript",
    level: "Advanced",
    Icon: SiTypescript,
  },
  {
    id: 4,
    name: "React",
    level: "Advanced",
    Icon: SiReact,
  },
  {
    id: 5,
    name: "Next.js",
    level: "Intermediate",
    Icon: SiNextdotjs,
  },
  {
    id: 6,
    name: "Node.js",
    level: "Intermediate",
    Icon: SiNodedotjs,
  },
  {
    id: 7,
    name: "Express.js",
    level: "Intermediate",
    Icon: SiExpress,
  },
  {
    id: 8,
    name: "Tailwind CSS",
    level: "Advanced",
    Icon: SiTailwindcss,
  },
  {
    id: 9,
    name: "Redux",
    level: "Intermediate",
    Icon: SiRedux,
  },
  {
    id: 10,
    name: "MongoDB",
    level: "Intermediate",
    Icon: SiMongodb,
  },
  {
    id: 11,
    name: "MySQL",
    level: "Advanced",
    Icon: SiMysql,
  },
  {
    id: 12,
    name: "SQL Server",
    level: "Beginner",
    Icon: SiSqlite,
  },
  {
    id: 13,
    name: "Git",
    level: "Beginner",
    Icon: SiGit,
  },
  {
    id: 14,
    name: "ASP.NET",
    level: "Beginner",
    Icon: SiDotnet,
  },
  {
    id: 15,
    name: "RabitMQ",
    level: "Beginner",
    Icon: SiRabbitmq,
  }
];

export const Projects: ProjectType[] = [
  {
    startDate: new Date("2024-08-01"),
    endDate: new Date("2024-09-01"),
    name: "Chat Application",
    description: "A real-time chat application using React, Node.js, and Socket.io that allows users to communicate in group and private chat rooms.",
    technologies: ["React", "Node.js", "Expressjs", "Socket.io", "MongoDB", "Tailwind CSS"],
    link: "https://github.com/Miyuki1310/ChatAppMern.git",
    img: "/chatapp.jpg"
  },
  {
    startDate: new Date("2024-12-18"),
    endDate: new Date("2025-01-15"),
    name: "Real Estate Marketplace",
    description: "A full-stack real estate marketplace application that enables users to browse, list, and manage property listings.",
    technologies: ["React.js", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS", "Firebase"],
    link: "https://github.com/Miyuki1310/RealEstateMarketplace.git",
    img: "/realestate.jpg"
  },
  {
    startDate: new Date("2025-04-09"),
    endDate: new Date("2025-07-09"),
    name: "CRM System",
    description: "A Customer Relationship Management (CRM) system developed during my internship at Opus Solutions to help businesses manage customer interactions and data.",
    technologies: ["React", "TypeScript", "ASP.NET", "Shadcn UI", "SQL Server", "I18next"],
    img: "/CRM.png"
  },
  {
    startDate: new Date("2025-04-09"),
    endDate: new Date("2025-07-09"),
    name: "Landing Page",
    description: "A responsive landing page created during my internship at Opus Solutions to promote their services and capture leads.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "I18next"],
    link: "https://tasken.io/en",
    img: "/landingpage.jpg"
  }
]