var lang = localStorage.getItem('lang');
var pathname = window.location.pathname.replace(".html", "");

$(function(){
    // ---------- Language Handler
    if (!lang) {
        localStorage.setItem('lang', 'en');
    }

    if (lang === "fa") {
        $("#content_wrapper").addClass("rtl_wrapper");
        if ($("#languageIcon") && $("#languageText")){
            $("#languageIcon").attr("src", "../assets/images/icons/en.png");
            $("#languageText").text("EN");
        }
    } else {
        $("#content_wrapper").addClass("ltr_wrapper");
        if ($("#languageIcon") && $("#languageText")){
            $("#languageIcon").attr("src", "../assets/images/icons/ir.png");
            $("#languageText").text("FA");
        }
    }
})