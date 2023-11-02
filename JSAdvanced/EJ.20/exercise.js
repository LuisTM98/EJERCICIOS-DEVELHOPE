class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(figureVar){
    if (figureVar instanceof Square) {return figureVar.side * figureVar.side} 
    else if (figureVar instanceof Rectangle) {return figureVar.width * figureVar.height}
    else if (figureVar instanceof Circle) {return Math.PI * figureVar.radius * figureVar.radius}
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));