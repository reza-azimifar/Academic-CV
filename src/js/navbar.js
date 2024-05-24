$(function(){
    let lang = localStorage.getItem("lang");

    if (!lang) {
        localStorage.setItem("lang", "en");
    }

    const navbar_data = {
        title: lang === "fa" ? faNavbarData.title : enNavbarData.title,
        navbar_links: [
            {
                active: navbarLinks.home ? true : false,
                title: lang === "fa" ? faNavbarData.home : enNavbarData.home,
                url: "/",
            },
            {
                active: navbarLinks.publications ? true : false,
                title: lang === "fa" ? faNavbarData.publications : enNavbarData.publications,
                url: "/publications.html",
            },
            {
                active: navbarLinks.research ? true : false,
                title: lang === "fa" ? faNavbarData.research : enNavbarData.research,
                url: "/research.html",
            },
            {
                active: navbarLinks.jobs ? true : false,
                title: lang === "fa" ? faNavbarData.jobs : enNavbarData.jobs,
                url: "/jobs.html",
            },
            {
                active: navbarLinks.contact ? true : false,
                title: lang === "fa" ? faNavbarData.contact : enNavbarData.contact,
                url: "/contact.html",
            }
        ]
    };

    function navbarData(){
        $("#navbar_title").text(navbar_data.title);
        $("#navbar_title").attr("href", "/");
        $("#navbar_links").html(
            navbar_data.navbar_links
            .filter((item) => item.active)
            .map((link) => `<li class="nav-item"><a ${window.location.pathname === link.url ? "class='nav-link active'" : "class='nav-link'"} href=${link.url}>${link.title}</a></li>`)
            .join("")
        );
    }

    navbarData();
});