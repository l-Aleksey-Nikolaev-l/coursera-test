$(function () {
    $("#navbarToggle").blur(function (event) { // document.querySelector("#navbarToggle").addEventListener("blur",...)
        let screenWidth = window.innerWidth;
        if (screenWidth < 768) {
            $("#collapsable-nav").collapse("hide");
        }
    });
});
