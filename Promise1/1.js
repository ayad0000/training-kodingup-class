/**
 * SYNCRONOUS data / variable : variable yg dimana prosesnya harus selesai dulu, sebelum melanjutkan ke variable / fungsi selanjutnya
 */
console.log('1: Program started');

/**
 * First option use Function Declaration / Expression
 */
// function bark() {
//   console.log('woof');
// }

// setTimeout(bark, 3000);

/**
 * ASYNCRONOUS METHOD / FUNCTION : fungsi yg memiliki proses percabangan lain, untuk memproses data secara berkala, dengan tidak mengunci prosesnya, jadi prosesnya bisa langsung dilanjutkan ke variable / method lain secara bersamaan
 * (simple nya function ini bisa melanjutkan proses ke method / variable lain sebelum proses readnya selesai)
 * Standard JavaScript Function (Built-In Function) - setTimeout() 
 * Second Option use Arrow Function and put in the parameter
 * 2 Parameter :
 * 1. Function
 * 2. milliseconds
 */
setTimeout(() => {
  console.log('woof');
}, 3000);

/**
 * 
 */
setInterval(() => {
  console.log(formatedTime(Date.now())); // waktu in time maju terus per 1 detik
}, 1000);

function formatedTime(ms) {
  const date = new Date(ms);

  let formattedTime = '';
  formattedTime += String(date.getHours()).padStart(2, '0');
  formattedTime += ':';
  formattedTime += String(date.getMinutes()).padStart(2, 0);
  formattedTime += ':';
  formattedTime += String(date.getSeconds()).padStart(2, 0);

  return formattedTime;
}

console.log('3: Program ended');

