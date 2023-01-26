// Closures

function makeMultiplier (multiplier) {
    return (
        function (x) {
            return multiplier * x;
        }
    );
}



let doubleAll = makeMultiplier(2);

console.log(doubleAll(10));

