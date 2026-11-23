// Date object bukan untuk merepresentasikan tanggal karena Expensive (berat)
// tujuannya untuk Memproses date

// Example Case for a voucher will expire in 10 days

const date = new Date('2026-11-04T19:00:00.000Z'); // 4 November 2026, 19:00:00.000Z

const miliseconds = date.getTime() + 10 * 24 * 60 * 60 * 1000; // add 10 days in milliseconds

const expiredDate = new Date(miliseconds); // 14 November 2026, 19:00:00.000-14:00

console.log(date); // 4 November 2026, 19:00:00.000-14:00

// AUTOCORRECT TIMEZONE
// date
date.setDate(date.getDate() + 100); // add 100 days to the date object

console.log(date);// 13 February 2027, 19:00:00.000-14:00

//month
date.setMonth(date.getMonth() + 3); // add 3 months to the date object

console.log(date); // 13 May 2027, 19:00:00.000-14:00

//year
date.setFullYear(date.getFullYear() + 1); // add 1 year to the date object

console.log(date); // 13 May 2028, 19:00:00.000-14:00

//hour
date.setHours(date.getHours() + 5); // add 5 hours to the date object

console.log(date); // 14 May 2028, 00:00:00.000-14:00

//minute
date.setMinutes(date.getMinutes() + 30); // add 30 minutes to the date object

console.log(date); // 14 May 2028, 00:30:00.000-14:00

//second
date.setSeconds(date.getSeconds() + 45); // add 45 seconds to the date object

console.log(date); // 14 May 2028, 00:30:45.000-14:00

//millisecond
date.setMilliseconds(date.getMilliseconds() + 500); // add 500 milliseconds to the date object

console.log(date); // 14 May 2028, 00:30:45.500-14:00