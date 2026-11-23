const fs = require('fs');
const readlinesync = require('readline-sync');

/**
 * Read saved Inputs
 * @param {(name: string, gender: string) => void} callback 
 */
function readSaveInput(callback) {
  /**
   * json singkatan dari : Javascript object notation
   * json tipe datanya selalu String, bukan Object
   * json ini hanya read file text saja yg terinsipirasi dari javascript
   * BEDA PROGRAMMING LANGUAGE dengan JavaScript
   */
  fs.readFile('record.json', 'utf8', function(err, data) {
    if (err && err.code === 'ENOENT') {
      callback(undefined);
      return;
    } else {
      const record = JSON.parse(data);
      callback(record);
    }
  });
}

readSaveInput(function(inputs) {
  let name;
  let gender;

  if (!inputs) {
    name = readlinesync.question('Input your name: ');
    gender = readlinesync.question('Input your gender: ');

    saveInputs(name, gender);
  } else {
    name = inputs.name;
    gender = inputs.gender;
  }

  const title = gender === 'male' ? 'Mr' : 'Mrs';
  console.log(`Welcome ${title}. ${name}`);
});

function saveInputs(name, gender) {
  /**
   * Cara Manual
   */
  // const data = `{ "name": "${name}", "gender": "${gender}" }`;

  /**
   * Cara menggunakan Object JSON.stringify
   */
  const data = JSON.stringify({ name, gender });

  fs.writeFile('record.json', data, function(err) {
    if (err) {
      console.log(err);
    }
  });
}