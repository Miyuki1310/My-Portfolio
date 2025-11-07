import dayjs from "dayjs"

export const formatDateToMonthYear = (date: Date): string => {
    return dayjs(date).format("MMM YYYY");
}