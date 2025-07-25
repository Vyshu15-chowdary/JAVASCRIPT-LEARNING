//getters and setters

class Rectangle {
  constructor(height, width) {
    this._height = height;
    this._width = width;
  }

  get height() {
    return this._height;
  }

  set height(value) {
    if (value <= 0) {
      throw new Error('Height must be positive');
    }
    this._height = value;
  }

  get width() {
    return this._width;
  }

  set width(value) {
    if (value <= 0) {
      throw new Error('Width must be positive');
    }
    this._width = value;
  }

  get area() {
    return this._height * this._width;
  }
}

const rectangle1 = new Rectangle(10, 20);
console.log(rectangle1.height); // logs 10
console.log(rectangle1.width); // logs 20
console.log(rectangle1.area); // logs 200

rectangle1.height = 5;
console.log(rectangle1.height); // logs 5

rectangle1.width = 0; // throws an error