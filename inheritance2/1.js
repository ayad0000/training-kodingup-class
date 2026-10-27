'use strict';

function Shape(color) {
    this.color = color;
}

Shape.prototype.toString = function() {
    return `color: ${this.color}`;
};

function Rectangle(width, height, color) {
    Shape.call(this, color); //= Parent first initialization
    this.width = width;
    this.height = height;
    //Shape.call(this, color); = Child first initialization
}

// *Syntax tanpa menggunakan Inheritance:
// Rectangle.prototype.toString = function() {
//     return `color: ${this.color}`;
// }

// *Syntax menggunakan Inheritance yg sangat DILARANG digunakan (__proto__):
// Rectangle.prototype.__proto__ = Shape.prototype;

//*Syntax menggunakan Inheritance yg dianjurkan:
// 1. buat object prototype baru yg mengarah ke Shape
// 2. karena tidak terCERTIFICATED lagi, buat CERTIFICATED KW
// 3. supaya CERTIFICATED KW nya sama persis seperti aslinya, maka buat property nya menggunakan Constructor lalu enumerable nya : false
Rectangle.prototype =
    Object.create(Shape.prototype, {
        constructor: {
            value: Rectangle,
            writable: true,
            enumerable: false,
            configurable: true
        }
    });

Rectangle.prototype.getArea = function() {
    return this.width * this.height;
};

Rectangle.prototype.getPerimeter = function() {
    return 2 * (this.width + this.height);
};

const shape = new Shape('white');
const rectangle = new Rectangle(3, 5, 'red');

function Circle(radius, color) {
    Shape.call(this, color);
    this.radius = radius;
}

// *Syntax tanpa menggunakan Inheritance:
// circle.prototype.toString = function() {
//     return `color: ${this.color}`;
// }

// *Syntax menggunakan Inheritance yg sangat DILARANG digunakan (__proto__):
// Circle.prototype.__proto__ = Shape.prototype;

//*Syntax menggunakan Inheritance yg dianjurkan:
// 1. buat object prototype baru yg mengarah ke Shape
// 2. karena tidak terCERTIFICATED lagi, buat CERTIFICATED KW
// 3. supaya CERTIFICATED KW nya sama persis seperti aslinya, maka buat property nya menggunakan Constructor lalu enumerable nya : false
Circle.prototype =
    Object.create(Shape.prototype, {
        constructor: {
            value: Circle,
            writable: true,
            enumerable: false,
            configurable: true
        }
    });

Circle.prototype.getArea = function() {
    return Math.PI * this.radius ** 2;
};

Circle.prototype.getPerimeter = function() {
    return 2 * Math.PI * this.radius;
};

const circle = new Circle(3, 'blue');

console.log('Circle:');
console.log(circle.getArea()); // 28.274333882308138
console.log(circle.getPerimeter()); // 18.84955592153876
console.log(circle.color); // blue
console.log(circle.toString()); // color: blue

console.log('');

console.log('Rectangle:');
console.log(rectangle.getArea()); // 15
console.log(rectangle.getPerimeter()); // 16
console.log(rectangle.color); // red
console.log(rectangle.toString()); // color: red