const MILIS_PER_SECOND = 1000;
const MILIS_PER_MINUTE = MILIS_PER_SECOND * 60;
const MILIS_PER_HOUR = MILIS_PER_MINUTE * 60;
const MILIS_PER_DAY = MILIS_PER_HOUR * 24;

class Tanggal {
  _milis;
  _year;
  _month;
  _date;
  _hours;
  _seconds;
  _minutes;
  _seconds;
  _miliseconds;

  constructor(milis) {
    this._milis = milis;
    this._decompose();
  }

  _decompose() {
    let remainingDays = Math.floor(this._milis / MILIS_PER_DAY);

    this._year = 1970;

    // Cara lebih mudah dipahami:
    // while (remainingDays >= this._getDaysInYear(this._year)) {
    //   remainingDays -= this._getDaysInYear(this._year);
    //   this._year++;
    // }

    // Cara lebih efisien:
    while (true) {
      const daysInYear = this._getDaysInYear(this._year);
      if (remainingDays < daysInYear) break;
      remainingDays -= daysInYear;
      this._year++;
    }

    this._month = 0;

    // Cara lebih mudah dipahami:
    // while (remainingDays >= this._getDaysInMonth(this._year, this._month)) {
    //   remainingDays -= this._getDaysInMonth(this._year, this._month);
    //   this._month++;
    // }

    // Cara lebih efisien:
    while (true) {
      const daysInMonth = this._getDaysInMonth(this._year, this._month);
      if (remainingDays < daysInMonth) break;
      remainingDays -= daysInMonth;
      this._month++;
    }

    this._date = remainingDays + 1;

    this._hours = Math.floor(this._milis / MILIS_PER_HOUR) % 24;
    this._minutes = Math.floor(this._milis / MILIS_PER_MINUTE) % 60;
    this._seconds = Math.floor(this._milis / MILIS_PER_SECOND) % 60;
    this._miliseconds = this._milis % MILIS_PER_SECOND;
  }

  getFullYear() {
    return this._year;
  }

  getMonth() {
    return this._month;
  }

  getDate() {
    return this._date;
  }

  getHours() {
    return this._hours;
  }

  getMinutes() {
    return this._minutes;
  }

  getSeconds() {
    return this._seconds;
  }

  getMilliseconds() {
    return this._miliseconds
  }

  _getDaysInYear(year) {
    return this._isLeapYear(year) ? 366 : 365;
  }

  _getDaysInMonth(year, month) {
    return [31, (this._isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
  }

  _isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  //fungsinya supaya hasil tanggal nya bisa di compare & ketika kita melakukan operasi concatenation dengan string, maka akan memanggil method ini
  [Symbol.toPrimitive](hint) {
    if (hint === 'string') {
      let str = this.getFullYear();
      str += '-';
      str += String(this.getMonth() + 1).padStart(2, '0');
      str += '-';
      str += String(this.getDate()).padStart(2, '0');
      str += 'T';
      str += String(this.getHours()).padStart(2, '0');
      str += ':';
      str += String(this.getMinutes()).padStart(2, '0');
      str += ':';
      str += String(this.getSeconds()).padStart(2, '0');
      str += '.';
      str += String(this.getMilliseconds()).padStart(3, '0');
      return str;
    }

    return this._milis;
  }
}

const tanggal = new Tanggal(1119661805725);

// Cara sakti (function bawaan dari JS)
const tanggal2 = new Date(1119661805725);

console.log(String(tanggal)); // 2005-05-25T01:10:05.725

console.log(tanggal2.toISOString()); // 2005-05-25T01:10:05.725

// '2005-05-25T01:10:05.725'
// 'yyyy-mm-ddThh:mm:ss.mmm'

// console.log('Year:' + tanggal.getFullYear()); // 2005
// console.log('Month:' + tanggal.getMonth()); // 5
// console.log('Date:' + tanggal.getDate()); // 25
// console.log('Hours:' + tanggal.getHours()); // 1
// console.log('Minutes:' + tanggal.getMinutes()); // 10
// console.log('Seconds:' + tanggal.getSeconds()); // 5
// console.log('Milliseconds:' + tanggal.getMilliseconds()); // 725

// 1119661805725

// 25 Jun 2005 01:10:05.725