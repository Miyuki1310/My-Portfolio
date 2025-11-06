import { FaHome, FaInfo, FaTasks } from "react-icons/fa";
import { MdOutlineWorkOutline } from "react-icons/md";

export const NavLinks = [
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

export const Service = [
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