(function (window) {
    let AlexGreeter = {};
    AlexGreeter.name = "Alex";
    let greeting = "Hello ";
    AlexGreeter.sayHello = function () {
        console.log(greeting + AlexGreeter.name);
    }

    window.AlexGreeter = AlexGreeter;

})(window);







