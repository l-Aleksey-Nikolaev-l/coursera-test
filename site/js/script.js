// $(function () {
//     $("#navbarToggle").blur(function (event) { // document.querySelector("#navbarToggle").addEventListener("blur",...)
//         let screenWidth = window.innerWidth;
//         if (screenWidth < 768) {
//             $("#collapsable-nav").collapse("hide");
//         }
//     });
// });



(document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#navbarToggle").addEventListener("blur", function () {
        if (window.innerWidth < 768) {
            $("#collapsable-nav").collapse("hide");
        }
    })
})
);




(function (global) {

    let dc = {};

    let homeHtml = "snippets/home-snippet.html";

// Convenience function for inserting innerHTML for 'select'
    let insertHtml = function (selector, html) {
        let targetElem = document.querySelector(selector);
        targetElem.innerHTML = html;
    };

// Show loading icon inside element identified by 'selector'.
    let showLoading = function (selector) {
        let html = "<div class='text-center'>";
        html += "<img src='/images/ajax-loader.gif' alt='0'></div>";
        insertHtml(selector, html);
    };

// On page load (before images or CSS)
    document.addEventListener("DOMContentLoaded", function (event) {

// On first load, show home view
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(
            homeHtml,
            function (responseText) {
                document.querySelector("#main-content")
                    .innerHTML = responseText;
            },
            false);
    });


    global.$dc = dc;

})(window);




