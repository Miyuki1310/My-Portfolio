import { IconType } from "react-icons";

export type NavLinksType = {
    id: number;
    url: string;
    label: string;
    icon: IconType;
}
export type ServiceType = {
    id: number;
    img: string;
    title: string;
    description: string;
}
export type ExperienceType = {
    id: number;
    jobTitle: string;
    startDate: Date;
    endDate: Date;
    company: string;
    description: string;
    icon: IconType;
};
export type EducationsType = {
    id: number;
    startDate: Date;
    endDate: Date;
    degree: string;
    institution: string;
    description: string;
    Icon: IconType;
}
export type SkillType = {
    id: number;
    name: string;
    level: "Advanced" | "Intermediate" | "Beginner";
    Icon: IconType;
}

export type ProjectType = {
    startDate: Date;
    endDate: Date;
    name: string;
    description: string;
    technologies: string[];
    img: string;
    link?: string;
}

export type ConnectFormData = {
    name: string;
    email: string;
    phone: string;
    message: string;
}