import dayjs from "dayjs";

const addZeros = (num, minLength) => {
  const numString = num.toString();
  if (numString.length >= minLength) return numString;
  return "0".repeat(minLength - numString.length) + numString;
};

const getSeconds = (now, timesTampDayjs) => {
  const seconds = timesTampDayjs.diff(now, "seconds") % 60;
  return addZeros(seconds, 2);
};

const getMinutes = (now, timesTampDayjs) => {
  const minutes = timesTampDayjs.diff(now, "minutes") % 60;
  return addZeros(minutes, 2);
};

const getHours = (now, timesTampDayjs) => {
  const hours = timesTampDayjs.diff(now, "hours") % 24;
  return addZeros(hours, 2);
};

const getDays = (now, timesTampDayjs) => {
  const days = timesTampDayjs.diff(now, "days");
  return days;
};

export const getRemainingTime = (timesTampMs) => {
  const timesTampDayjs = dayjs(timesTampMs);
  const now = dayjs();
  if (timesTampDayjs.isBefore(now)) {
    return {
      seconds: "00",
      minutes: "00",
      hours: "00",
      days: "00",
    };
  }
  return {
    seconds: getSeconds(now, timesTampDayjs),
    minutes: getMinutes(now, timesTampDayjs),
    hours: getHours(now, timesTampDayjs),
    days: getDays(now, timesTampDayjs),
  };
};
