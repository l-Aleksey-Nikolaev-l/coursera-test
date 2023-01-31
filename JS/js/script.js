document.addEventListener("DOMContentLoaded",
    function (event) {

        document.querySelector("button")
            .addEventListener("click", function () {

                $ajaxUtils.sendGetRequest("/data/name.json",
                    function (res) {

                    let message = res.firstName + " " + res.lastName;

                    if (res.likesCold) {
                        message += " likes cold";
                    } else {
                        message += " doesn't like cold";
                    }
                    message += " and uses ";
                    message += res.numberOfDisplays;
                    message += " display for coding.";

                    document.querySelector("#content")
                        .innerHTML = "<h2>" + message + "</h2>";
                });
            });
    }
);



