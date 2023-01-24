let message = "in global";
console.log("global: message = " + message);

let a = function () {
    let message = "inside a";
    console.log("a: message = " + message);

    function b() {
        console.log("b: message = " + message);
    }
    b();
    c();
}

function c() {
    console.log("c: message = " + message);
}

a();