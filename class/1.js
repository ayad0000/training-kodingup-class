// class Rectangle extends Shape {
//     constructor(width, height, color) {
//         super(color);
//         this.width = width;
//         this.height = height;
//     }

//     getArea() {
//         return this.width * this.height
//     }
// }

function Shape (x, y) {
    this.x = x;
    this.y = y;
}

Shape.prototype.move = function(x, y) {
    Shape.call(this, x, y)
    this.width = width;
    this.height = height;
}