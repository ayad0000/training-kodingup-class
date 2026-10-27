'use strict';

const rectangle = {
    width: 5,
    height: 3,
    getArea() {
        return this.width * this.height;
    },
};

// opsi 1 langsung di .bind('this')
const calculateArea = rectangle.getArea.bind(rectangle);

// opsi 2 menggunakan .call('this')
const calculateArea2 = rectangle.getArea;

//opsi 1
console.log(calculateArea()); // 15

//opsi 2
console.log(calculateArea2.call(rectangle)); // 15

