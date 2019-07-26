class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2;
  }

  get circumference() {
    return Math.PI * this.radius * 2;
  }

  get area() {
    return Math.PI * this.radius ** 2;
  }

  set diameter(diameter) {
    this.radius = diameter / 2;
  }

  set circumference(circumference) {
    this.radius = circumference / (Math.PI * 2);
  }

  set area(area) {
    this.radius = Math.sqrt(area / Math.PI);
  }

}




 // console.log(Circle)
let circle = new Circle(2);
console.log(circle.diameter);

circle.diameter = 3;
console.log(circle.diameter);

// console.log(circle.circumference);
circle.circumference = 1  ;
console.log(circle.circumference);

console.log(circle.area);
circle.area = 5;
console.log(circle.area);
