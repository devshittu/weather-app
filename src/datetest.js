import {format,zonedTimeToUtc, utcToZonedTime} from "date-fns-tz";

const tinyFutureDate = 'Wednesday, 10 May 2023 20:49:18';
const tinyPastDate = '2023-02-18T22:06:55.111762701+01:00';
const today = new Date(); // Wed Sep 16 2020 13:25:16
const timeZone = 'Europe/Paris'; // Let's see what time it is Down Under
const timeInBrisbane = zonedTimeToUtc(today, timeZone); // the today is in paris local time and return the corresponding for someone in UTC
const timeInBrisbane2 = utcToZonedTime(today, timeZone); // for other location

console.log(`
${today} 
${timeInBrisbane} 
${timeInBrisbane2}`)
console.log(`
Default time zone: ${format(today, 'yyyy-MM-dd HH:mm:ss')}
Time for someone in UTC when datetime for Paris (default): ${format(timeInBrisbane, 'yyyy-MM-dd HH:mm:ss')}
Time for someone in Paris when datetime for UTC (default): ${format(timeInBrisbane2, 'yyyy-MM-dd HH:mm:ss')}`);
