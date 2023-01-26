// Arrays

// let myArray = new Array();
// myArray[0] = "Aleksey";
// myArray[1] = 2;
// myArray[2] = function (name) {
//     console.log("Hello " + name);
// };
// myArray[3] = {course: "HTML, CSS & JavaScript"};
//
//
// myArray[2](myArray[0]);
//
// console.log(myArray[3].course);


// Shorter version
let myArray2 = [
    "Aleksey",
    "John",
    "Mark"
];

myArray2[100] = "Bob";

for (let i = 0; i < myArray2.length; i++) {
    console.log(i + " - Hello " + myArray2[i]);
}



