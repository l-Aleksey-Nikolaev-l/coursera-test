
// String concatenation
let string = "Hello";
string += " World";
console.log(string + "!");

//Regular math operations: +, *, /, -
console.log((4 + 5) / 3);
console.log(undefined / 5); // ---> NaN = Not a Number


// Equality
let x = 4, y = 4;
if (x === y) {
    console.log("x = y");
}

let xx = 4, yy = "4";
if (xx == yy) { // ---> type STRING was converted to INT
    console.log("xx = yy");
}

// Strict equality
if (xx === yy) { // ---> ERROR, because different types
    console.log("xx != yy");
}

// If statement (all false)
if (false || null || undefined || "" || 0 || NaN) {
    console.log("This line won't execute")
} else {
    console.log("All false");
}

//If statement (all true)
if (true && "hello" && 1 && -1 && "false") {
    console.log("All true");
}

// & - Ampersand
// () - round brackets
// {} - curly brackets / braces