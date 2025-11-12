import dayjs from "dayjs"

export const formatDateToMonthYear = (date: Date): string => {
    return dayjs(date).format("MMM YYYY");
}

export const handleDownloadCV = (url: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = 'NguyenKhanhHuan_Fullstack-Developer_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}