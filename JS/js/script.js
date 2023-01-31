document.addEventListener("DOMContentLoaded",
    function (event) {

        document.querySelector("button")
            .addEventListener("click", function () {

                $ajaxUtils.sendGetRequest("/data/name.txt",
                        function (request) {
                        let name = request.responseText;

                        document.querySelector("#content")
                            .innerHTML = "<h2>Hello " + name + "!";
                        });
            });
    }
);