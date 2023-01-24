
//Handling Default Values
function orderChickenWith(sideDish) {
    // if (sideDish === undefined) {
    //     sideDish = "whatever!";
    // }

    sideDish = sideDish || "whatever!"; // default value

    console.log("Chicken with " + sideDish);
}

orderChickenWith("noodles");
orderChickenWith();