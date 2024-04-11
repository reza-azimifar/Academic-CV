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

    // Home page data
    const home_data = {
        image: globalData.image,
        links: [
            {
                name: `mailto:${globalData.email}`,
                active: globalData.email ? true : false,
                img: "../assets/images/icons/mail.png"
            },
            {
                name: globalData.whatsapp,
                active: globalData.whatsapp ? true : false,
                img: "../assets/images/icons/whatsapp.png"
            },
            {
                name: globalData.twitter,
                active: globalData.twitter ? true : false,
                img: "../assets/images/icons/twitter.png"
            },
            {
                name: globalData.linkedin,
                active: globalData.linkedin ? true : false,
                img: "../assets/images/icons/linkedin.png"
            },
            {
                name: globalData.github,
                active: globalData.github ? true : false,
                url: "/",
                img: "../assets/images/icons/github.png"
            },
            {
                name: globalData.resume,
                active: globalData.resume ? true : false,
                url: "/",
                img: "../assets/images/icons/resume.png"
            }
        ]
    };

    function homeData(){
        $("#page_title").text(lang === "en" ? enHomePageData.name : faHomePageData.name);
        $("#home_image").attr("src", home_data.image ? home_data.image : "");
        // $("#home_image").src = home_data.image ? home_data.image : "";
        $("#home_name").text(lang === "en" ? enHomePageData.name : faHomePageData.name);
        $("#home_job_title").text(lang === "en" ? enHomePageData.jobTitle : faHomePageData.jobTitle);
        $("#home_links").html(home_data.links.filter((item) => item.active).map((link) => `<li><a href=${link.name} target='_blank'><img src=${link.img} alt=${link.name}/></a></li>`).join(""));
        $("#home_title").text(lang === "en" ? enHomePageData.home_title : faHomePageData.home_title);
        $("#home_content").html(lang === "en" ? enHomePageData.home_content : faHomePageData.home_content);
    }

    if (pathname === "/" || pathname === "/index") {
        homeData();
    }
})