


document.addEventListener("DOMContentLoaded",
    function (event) {
        function sayHello (event) {
            console.log(event);

            let userName = document.getElementById("name").value;

            const nameValidator = new RegExp("[A-Za-z]");
            const nameTest = nameValidator.test(userName);

            if (nameTest === true) {

                this.textContent = "Said It!"

                let message = "<h2>Hello " + userName + "!</h2>";

                document
                    .getElementById("content")
                    .innerHTML = message;

                if (userName === "student") {
                    let title =
                        document
                            .querySelector("#title")
                            .textContent;
                    title += " & Loving' it!"
                    document
                        .querySelector("#title")
                        .textContent = title;
                }

            } else {
                this.textContent = "Say it!"
                document
                    .getElementById("content")
                    .textContent = "";
            }

        }



// Unobtrusive event binding

        document
            .querySelector("button")
            .addEventListener("click", sayHello);
// or

// document.querySelector("button")
//     .onclick = sayHello;


        document
            .querySelector("body")
            .addEventListener("mousemove",
                function (event) {
                if (event.shiftKey === true) {
                    console.log("X: " + event.clientX);
                    console.log("Y: " + event.clientY);
                }
            });
    }
);


