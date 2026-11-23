/**
 * Standard Library fs -singkatan dari "File System" (Library bawaan dari JavaScript)
 */
const fs = require('fs');

fs.readFile('pip-and-the-lost-star.txt', 'utf8', function(err, data) {
  /**
   * logika untuk membuat ERROR apabila file nya tidak ditemukan / tidak ada
   * ENOENT singkatan dari "Error No Entry"
   */
  if (err && err.code === 'ENOENT') {
    console.log('The file does not exist');
    return;
  }

  console.log(data);
});

const data = 'Saya ingin cari ikan';

/** 
 * writeFile ini datanya Ke-replace, bukan menambahkan
 */
fs.writeFile('note.txt', data, function(err) {
  console.log(err);
});