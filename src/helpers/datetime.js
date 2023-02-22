import format from "date-fns/format";
function convertTimezone(timezone) {
    return timezone.replace(/__/g, '/');
  }

export const unixToUTC = (unixTimestamp) => {
  const date = new Date(unixTimestamp * 1000);
  return date.toUTCString()
  }

export const getSuntimes = (timestamp, show) => {
  if(!timestamp) return null
  const now = new Date(unixToUTC(timestamp));
  console.log(now);
  const timeString = format(now, 'HH:mm a');
  if (show =='time') return format(now, 'hh:mm');
  if (show =='a') return format(now, 'a');
  else return timeString;
}