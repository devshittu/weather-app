import format from "date-fns/format";
import { addDays, isEqual, isToday, parseISO } from 'date-fns';

function convertTimezone(timezone) {
    return timezone.replace(/__/g, '/');
  }

export const unixToUTC = (unixTimestamp) => {
  const date = new Date(unixTimestamp * 1000);
  return date.toUTCString()
  }

export const getSunTimes = (timestamp, show) => {
  if(!timestamp) return null
  const now = new Date(unixToUTC(timestamp));
  const timeString = format(now, 'HH:mm a');
  if (show =='time') return format(now, 'hh:mm');
  if (show =='a') return format(now, 'a');
  else return timeString;
}


export const formatDayTime = (dateStamp, twelveHourFormat = false) => {
  if (!dateStamp) return null  
  return format(new Date(dateStamp), (twelveHourFormat)? 'h:mm a': 'HH:mm');
}

export const getDayOfWeek = (dateStamp,) => {
  if (!dateStamp) return null  
  return format(new Date(dateStamp), 'EEEE');
}

export const addDay = (date, days) => addDays(unixToUTC(date), days);
export const isDay = (date1, date2) => isEqual(unixToUTC(date1), unixToUTC(date2));
export const isDateToday = (date) => isToday(date);