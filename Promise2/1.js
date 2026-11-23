/**
 * Supaya membedakan Standard library bawaan javascript : 'node:fs'
 * untuk memanggil object promises nya dicantumkan di sub module : 'node:fs/promises'
 */
const fs = require('node:fs/promises');

/**
 * sebelum tahin 2015
 * Wajib menggunakan Callback function : function (err, data) {}
 * untuk bisa menjalankan syntax selanjutnya yg dibawah : console.log('Program ended');
 * apabila tanpa menggunakan callback function, maka syntaxnya akan terblock & syntax dibawahnya tidak akan dijalankan
 */
fs.readFile('pip-and-the-lost-star.txt', 'utf-8', function (err, data) {
  console.log('data terbaca');
});

/**
 * Penulisan sama seperti sebelumnya, hanya saja tidak ada callback function nya
 */
const promise = fs.readFile('pip-and-the-lost-shit.txt', 'utf-8')

/**
 * sesudah 2015
 * Kalo promise belum ada isinya : state : initial
 * kalo promise ada isinya yaitu value : state : resolve
  .then(function(value) {

  });

 * Kalo promise ada isinya yaitu error : state : rejected
  .catch(function(err) {
  
  });
*/
// const promise = getProfile(userId);

promise.then(function(data) {
  console.log('File telah terbaca');
});

promise.catch(function(err) {
  console.log('Terjadi Error');
});

/**
 * Short Hand (Singkatannya untuk syntax promise)
 * karena value daripada .then & .catch itu sendiri adalah Promise
 */
fs.readFile('pip-and-the-lost-star.txt', 'utf-8')
  .then(function(data) {
    console.log('File telah terbaca');
  })
  .catch(function(err) {
    console.log('Terjadi Error');
  });

console.log('Program ended');