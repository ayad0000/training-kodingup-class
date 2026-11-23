const rectangle = {
  width: 5,
  height: 3,
};

/**
 * cara Manual
 */
// `{"width": "${rectangle.width}, "height": "${rectangle.height}"}`

/**
 * Cara mudah menggunakan Object JSON.stringify
 * Outputnya String
 */
const str = JSON.stringify(rectangle); // merubah object menjadi string

console.log(typeof str);
console.log(str);

/**
 * Cara mengubah Output string dari JSON.stringify menjadi Object()
 * menggunakan JSON.parse()
 */
const obj = JSON.parse(str); // merubah string dalam bentuk (JSON) menjadi object

console.log(typeof obj);
console.log(obj);

