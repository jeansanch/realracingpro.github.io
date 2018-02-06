// Carrega as variáveis apresentadas na URL (como ?page=prestart)
function getUrlVars() {
    "use strict";
    var vars = {}, parts;
    parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}

/*global $, jQuery, alert*/

// Carrega Header, Article (content) e Footer
$(document).ready(function () {
    "use strict";
    
    $("#fade").hide(0, function () {
        $("#fade").fadeOut(300, function () {
            $("#fade").hide().fadeIn(800);
        });
    });
    
    $("#content").fadeOut(200, function () {
        $("#header").load("header.html");
        $("#footer").load("footer.html");
        var pageload = getUrlVars().page;
        if (pageload !== undefined) {
            $("#content").load("pages/" + pageload + ".html");
        } else {
            $("#content").load("pages/index.html");
        }
        $("#content").fadeIn(200);
    });
});