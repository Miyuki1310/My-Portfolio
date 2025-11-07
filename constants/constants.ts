import { EducationsType, ExperienceType, NavLinksType, ServiceType } from "@/types/Type";
import { BiCertification } from "react-icons/bi";
import { FaHome, FaInfo, FaReact, FaTasks } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa6";
import { MdOutlineWorkOutline } from "react-icons/md";

export const NavLinks: NavLinksType[] = [
    {
        id: 1,
        url: "/",
        label: "Home",
        icon: FaHome
    },
    {
        id: 2,
        url: "/about",
        label: "About",
        icon: FaInfo,
    },
    {
        id: 3,
        url: "/skills",
        label: "Skills",
        icon: FaTasks
    },
    {
        id: 4,
        url: "/projects",
        label: "Projects",
        icon: MdOutlineWorkOutline
    }
]

export const Service: ServiceType[] = [
    {
        img: "/s1.png",
        title: "Frontend Development",
        description: "Creating high-performance, user-friendly interfaces that smoothly on every device"
    },
    {
        img: "/s2.png",
        title: "Backend Development",
        description: "Building high-performance, scalable, and secure server-side applications and APIs."
    },
    {
        img: "/s3.png",
        title: "Fullstack Development",
        description: "Integrating frontend and backend skills to build seamless and full-stack digital solutions"
    },
    {
        img: "/s4.png",
        title: "Analysis & Design",
        description: "Developing optimized systems and workflows to improve scalability and speed"
    }
]

export const Experiences: ExperienceType[] = [
    {
        jobTitle: "Internship developer",
        startDate: new Date("2025-04-09"),
        endDate: new Date("2025-07-09"),
        company: "Opus Solutions",
        description: "Built CRM System with React+TS, ASP.NET and Landing page Next.js",
        icon: FaReact
    },
    {
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
        startDate: new Date("2021-08-01"),
        endDate: new Date("2025-09-25"),
        degree: "Bachelor of Computer Science",
        institution: "Ton Duc Thang University",
        description: "GPA: 3.6/4.0",
        Icon: BiCertification,
    },
]