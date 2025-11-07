import { IconType } from "react-icons";

export type NavLinksType = {
    id: number;
    url: string;
    label: string;
    icon: IconType;
}
export type ServiceType = {
    img: string;
    title: string;
    description: string;
}
export type ExperienceType = {
    jobTitle: string;
    startDate: Date;
    endDate: Date;
    company: string;
    description: string;
    icon: IconType;
};
export type EducationsType = {
    startDate: Date;
    endDate: Date;
    degree: string;
    institution: string;
    description: string;
    Icon: IconType;
}