(function (window) {
    let JohnGreeter = {};
    JohnGreeter.name = "John";
    let greeting = "Hi ";
    JohnGreeter.sayHi = function () {
        console.log(greeting + JohnGreeter.name);
    }

    window.JohnGreeter = JohnGreeter;

})(window)








