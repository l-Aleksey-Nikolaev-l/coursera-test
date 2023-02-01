(document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#navbarToggle").addEventListener("blur", function () {
        if (window.innerWidth < 768) {
            $("#collapsable-nav").collapse("hide");
        }
    })
})
);

