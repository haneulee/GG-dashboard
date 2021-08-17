type DateType = Date | string | number;

export const timeSince = (fromDate: DateType = Date.now()) => {
    const seconds = +Date.now().toString().substr(0, 10) - +new Date(fromDate);

    if (seconds < 60) return `방금 전`
    const minutes = seconds / 60
    if (minutes < 60) return `${Math.floor(minutes)}분 전`
    const hours = minutes / 60
    if (hours < 24) return `${Math.floor(hours)}시간 전`
    const days = hours / 24
    if (days < 7) return `${Math.floor(days)}일 전`
    const weeks = days / 7
    if (weeks < 5) return `${Math.floor(weeks)}주 전`
    const months = days / 30
    if (months < 12) return `${Math.floor(months)}개월 전`
    const years = days / 365

    return `${Math.floor(years)}년 전`
}

export const convertSeconds = (s: number) => {
    const min = Math.floor(s / 60);
    const sec = s % 60;
    return min + '분 ' + sec + '초';
}