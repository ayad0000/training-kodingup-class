const fs = require('node:fs/promises');
const util = require('node:util');

const readFile = util.promisify(fs.readFile);

// function readFile(fileName, encoding) {
//   fs.readFile(fileName, encoding, (err, data) => {
//     return new Promise((resolve, reject) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// }

const promise = readFile('note.txt', 'utf-8');
promise.then((data) => {
  console.log(data);
});