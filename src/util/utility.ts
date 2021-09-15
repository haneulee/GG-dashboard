import constants from "src/constants";
import { DateType } from "src/types";

export const timeSince = (fromDate: DateType = Date.now()) => {
  const seconds = +Date.now().toString().substring(0, 10) - +new Date(fromDate);

  if (seconds < constants.TIME_MINUTE_HOUR) {
    return `방금 전`;
  }
  const minutes = seconds / constants.TIME_MINUTE_HOUR;
  if (minutes < constants.TIME_MINUTE_HOUR) {
    return `${Math.floor(minutes)}분 전`;
  }
  const hours = minutes / constants.TIME_MINUTE_HOUR;
  if (hours < constants.TIME_DAY_HOUR) {
    return `${Math.floor(hours)}시간 전`;
  }
  const days = hours / constants.TIME_DAY_HOUR;
  if (days < constants.TIME_WEEK_DAY) {
    return `${Math.floor(days)}일 전`;
  }
  const weeks = days / constants.TIME_WEEK_DAY;
  if (weeks < constants.TIME_MONTH_WEEK) {
    return `${Math.floor(weeks)}주 전`;
  }
  const months = days / constants.TIME_MONTH_DAY;
  if (months < constants.TIME_YEAR_MONTH) {
    return `${Math.floor(months)}개월 전`;
  }
  const years = days / constants.TIME_YEAR_DAY;

  return `${Math.floor(years)}년 전`;
};

export const convertSeconds = (s: number) => {
  const min = Math.floor(s / constants.TIME_MINUTE_HOUR);
  const sec = s % constants.TIME_MINUTE_HOUR;
  return min + "분 " + sec + "초";
};

export const getWinPct = (wins: number, games: number) => {
  return Math.round((wins / games) * 100);
};

export const getKDA = (kills: number, assists: number, deaths: number) => {
  return Math.round((kills + assists) / deaths);
};

export const getKillPct = (kills: number, deaths: number) => {
  return Math.round((kills / deaths) * 100);
};

export const getKDAColor = (kda: number) => {
  return kda >= 5
    ? "text-gameAvgYellow"
    : kda >= 4
    ? "text-kdaBlue"
    : kda >= 3
    ? "text-kdaGreen"
    : "text-soloRatingTextGra";
};
