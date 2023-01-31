(function(global) {

    let ajaxUtils = {};

    function getRequestObject() {
        if (window.XMLHttpRequest) {
            return (new XMLHttpRequest());
        }
        else if (window.ActiveXObject) {
            return (new ActiveXObject("Microsoft.XMLHTTP"));
        }
        else {
            global.alert("Ajax is not supported!");
            return(null);
        }
    }

    ajaxUtils.sendGetRequest =
        function(requestUrl, responseHandler, isJasonResponse) {
            let request = getRequestObject();
            request.onreadystatechange =
                function() {
                    handleResponse(request, responseHandler, isJasonResponse);
                };
            request.open("GET", requestUrl, true);
            request.send(null);
    };

    function handleResponse(request, responseHandler, isJasonResponse) {
        if((request.readyState === 4) && (request.status === 200)) {
            if (isJasonResponse === undefined) {
                isJasonResponse = true;
            }

            if (isJasonResponse) {
                responseHandler(JSON.parse(request.responseText));
            } else {
                responseHandler(request.responseText);
            }
        }
    }

    global.$ajaxUtils = ajaxUtils;

})(window);




