// Function Constructors, prototype, and the 'this' Keyword

// function test() {
//     console.log(this);
// }
// test();



// Function Constructor
function Circle (radius) { // this function constructor with CAPITAL C
    this.radius = radius;

    // this.getArea = function () {
    //     return Math.PI * Math.pow(this.radius, 2);
    // };
}

Circle.prototype.getArea = function () {
    return Math.PI * Math.pow(this.radius, 2);
}

let myCircle = new Circle(10); // new Object()
console.log(myCircle.getArea());


