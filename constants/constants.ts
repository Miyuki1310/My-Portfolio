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