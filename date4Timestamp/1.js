// Absolute
// 1. Unix timestamp (ms)
const date1 = new Date(1793796288683);

// 2. ISO8601 string
const date2 = new Date('2026-11-04T19:45:30.000-14:00');
// Z adalah singkatan dari +00:00 (UTC)
const date3 = new Date('2026-11-04T19:45:30.000Z');

console.log(date2);
console.log(date3);

// Relative
const date4 = new Date(2026, 10, 4, 19, 49, 0, 0); // 4 November 2026, 19:49:00.000

console.log(date4);

const person = {
  name: 'Roger',
  birthDate: new Date(2002, 10, 5).toISOString(),
  getSecond: new Date(2002, 10, 5).getTime(),
};

person
console.log(person);

// Date object bukan untuk merepresentasikan tanggal karena Expensive (berat)
// tujuannya untuk Memproses date