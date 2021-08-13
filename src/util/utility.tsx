type DateType = Date | string | number;

export const timeSince = (fromDate: DateType = Date.now()) => {
    let CreatedDate = new Date(fromDate);
    let today = new Date();
    let requiredDiffrentDays;

    const oneDay = 24 * 60 * 60 * 1000;
    const diffDays: number = Math.round(Math.abs((Number(CreatedDate) - Number(today)) / oneDay));

    if (diffDays >= 360) {
        requiredDiffrentDays = `${Math.floor(diffDays / 365)}년 전`
    } else if (diffDays >= 30) {
        requiredDiffrentDays = `${Math.floor(diffDays / 30)}달 전`
    } else if (diffDays < 30) {
        requiredDiffrentDays = `${diffDays}일 전`
    }

    return requiredDiffrentDays;
}

export const convertSeconds = (s: number) => {
    const min = Math.floor(s / 60);
    const sec = s % 60;
    return min + '분 ' + sec + '초';
}