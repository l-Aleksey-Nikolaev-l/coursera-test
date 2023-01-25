// Passing Variables by Value vs. by Reference
let a = 7;
let b = a;
console.log("a: " + a);
console.log("b: " + b);

b = 5;
console.log("after b update:");
console.log("a: " + a);
console.log("b: " + b);


let c = { x: 7};
let d = c;
console.log(c);
console.log(d);

d.x = 5;
console.log("after d.x update:");
console.log(c);
console.log(d);
