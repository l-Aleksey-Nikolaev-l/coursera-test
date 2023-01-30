

function sayHello (){
    let userName = document.getElementById("name").value;

    const nameValidator = new RegExp("[A-Za-z]");
    const nameTest = nameValidator.test(userName);

    if (nameTest === true) {

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
        document
            .getElementById("content")
            .textContent = "";
    }

}







