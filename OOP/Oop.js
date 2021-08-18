// Define a new class called Circle with appropriate attributes and instantiate a few Circle objects.

class Circle {
  constructor(diameter) {
    this.diameter = diameter;
  }

  // Write a function called circle_area that returns the area of the object.
  circle_area() {
    let rad = this.radius();
    return Math.PI * (rad * rad);
    // return Math.PI(area * area);
  }

  // Write a function total_radius that returns the radius of the object.
  radius() {
    let r = this.diameter;
    return r / 2;
  }

  displayCircle() {
    let area = this.circle_area();
    let radius = this.radius();
    let text = document.getElementById('circle').innerHTML = `Area is equal to: ${area}. Radius is equal to:  ${radius}`;
    return text;
  }
}
const circle1 = new Circle(20);
// circle1.circle_area();
// circle1.radius();
circle1.displayCircle();


// Define a new class called Rectangle with appropriate attributes and instantiate a few Rectangle objects.
// class Rectangle {
//   constructor(length, width) {
//     this.length = length;
//     this.width = width;
//   }

//   // Write a function called rectangle_area that returns the area of the given object.

//   rectangle_area() {
//     return this.length * this.width;
//   }

//   // Write a function parameter that returns the number of sides of the object.
//   parameter() {
//     return this.length * 2 + this.width * 2;
//   }

//   displayRectangle() {
//     let area = this.rectangle_area();
//     let parameter = this.parameter();
//     text2 = document.getElementById(
//       'rectangle'
//     ).innerHTML = `Area is equal to: ${area}. Parameter is equal to:  ${parameter}. `;
//     return text2;
//   }
// }


// const rec = new Rectangle(30, 23);
// // rec.rectangle_area();
// // rec.parameter();
// rec.displayRectangle();

