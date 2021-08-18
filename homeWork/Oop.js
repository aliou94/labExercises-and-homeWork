class Circle {
    constructor(radius, circumfrence) {
      this.radius = radius;
      this.circumfrence =circumfrence;
    }
  
    circle_area(){
      console.log( 2 * (22/7) * Math.sqrt(this.radius))
    }
  
    total_sides(){
      console.log("what are sides of an object")
    }
  }
  
  
  
  
  class Rectangel {
    constructor(length, width) {
      this.length = length;
      this.width = width;
    }
  
    ractangel_area()  {
      this.length*this.width 
    }
  
    total_sides() {
      return 4
    }
  }
  
  class Square {
    constructor(side) {
      this.side = side;
    }
  
    ractangel_area()  {
       Math.sqrt(this.side)
    }
  
    total_sides() {
      return 4
    }
  }
  
  
  let myCircle1 = new Circle(10, 15);
  let myRectangel = new Rectangel(5, 15);
  let mySquare = new Square(5);
  
  console.log()