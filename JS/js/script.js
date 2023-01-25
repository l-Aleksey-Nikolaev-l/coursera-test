// Object Literals and the 'this' Keyword

let literalCircle = { // new Object()
    radius: 10,

    getArea: function () {

        let self = this;

        console.log(this); // The 'this' word works only inside this object

        let increaseRadius = function () {
            self.radius = 20;
        };

        increaseRadius();
        console.log(this.radius);

        return Math.PI * Math.pow(this.radius, 2);
    }
};

console.log(literalCircle.getArea());


