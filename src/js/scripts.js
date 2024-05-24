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
            $("#languageIcon").attr("src", "src/images/icons/en.png");
            $("#languageText").text("EN");
        }
    } else {
        $("#content_wrapper").addClass("ltr_wrapper");
        if ($("#languageIcon") && $("#languageText")){
            $("#languageIcon").attr("src", "src/images/icons/ir.png");
            $("#languageText").text("FA");
        }
    }

    // Home Page Data
    const home_data = {
        image: globalData.image,
        links: [
            {
                name: `mailto:${globalData.email}`,
                active: globalData.email ? true : false,
                img: "src/images/icons/mail.png"
            },
            {
                name: globalData.whatsapp,
                active: globalData.whatsapp ? true : false,
                img: "src/images/icons/whatsapp.png"
            },
            {
                name: globalData.twitter,
                active: globalData.twitter ? true : false,
                img: "src/images/icons/twitter.png"
            },
            {
                name: globalData.linkedin,
                active: globalData.linkedin ? true : false,
                img: "src/images/icons/linkedin.png"
            },
            {
                name: globalData.github,
                active: globalData.github ? true : false,
                url: "/",
                img: "src/images/icons/github.png"
            },
            {
                name: globalData.resume,
                active: globalData.resume ? true : false,
                url: "/",
                img: "src/images/icons/resume.png"
            }
        ]
    };

    function homeData(){
        $("#page_title").text(lang === "en" ? enHomePageData.name : faHomePageData.name);
        $("#home_image").attr("src", home_data.image ? home_data.image : "");
        $("#home_name").text(lang === "en" ? enHomePageData.name : faHomePageData.name);
        $("#home_job_title").text(lang === "en" ? enHomePageData.jobTitle : faHomePageData.jobTitle);
        $("#home_links").html(home_data.links.filter((item) => item.active).map((link) => `<li><a href=${link.name} target='_blank'><img src=${link.img} alt=${link.name}/></a></li>`).join(""));
        $("#home_title").text(lang === "en" ? enHomePageData.home_title : faHomePageData.home_title);
        $("#home_content").html(lang === "en" ? enHomePageData.home_content : faHomePageData.home_content);
    }

    if (pathname === "/" || pathname === "/index") {
        homeData();
    }

    // Publications Page Data
    const setPublicationData = (id, data) => {
        $("#"+id).html(data.map((publication) => 
        `<div class='publications_item'>
            <div class='publications_header'>
                ${publication.writers.length > 0 ? publication.writers.map((writer) => `<span>${writer}</span>`).join(", ") : ""}
                ${publication.date ? `<span>(${publication.date}).</span>` : ""}
                <h2>${publication.title}</h2>
            </div>
            <p>${publication.abstract}</p>
            <ul class='publications_footer'>
                ${publication.link &&`<li><a href=${publication.link} target="_blank"> ${lang === "en" ? "View" : "مشاهده"}</a></li>`}
                ${publication.github &&`<li><a href=${publication.github} target="_blank"> ${lang === "en" ? "Github" : "گیت‌هاب"}</a></li>`}
            </ul>
        </div>`)
        .join(""));
    };

    function publicationsData(){
        $("#page_title").text(lang === "en" ? "Publications" : "مقالات");
        $("#publications_type_one_title").html(lang === "en" ? enPublicationsPageData.type_one_title : faPublicationsPageData.type_one_title);
        setPublicationData("publications_type_one_data", lang === "en" ? enPublicationsPageData.type_one_items : faPublicationsPageData.type_one_items);
        $("#publications_type_two_title").html(lang === "en" ? enPublicationsPageData.type_two_title : faPublicationsPageData.type_two_title);
        setPublicationData("publications_type_two_data", lang === "en" ? enPublicationsPageData.type_two_items : faPublicationsPageData.type_two_items);
        $("#publications_type_three_title").html(lang === "en" ? enPublicationsPageData.type_three_title : faPublicationsPageData.type_three_title);
        setPublicationData("publications_type_three_data", lang === "en" ? enPublicationsPageData.type_three_items : faPublicationsPageData.type_three_items);
        $("#publications_type_four_title").html(lang === "en" ? enPublicationsPageData.type_four_title : faPublicationsPageData.type_four_title);
        setPublicationData("publications_type_four_data", lang === "en" ? enPublicationsPageData.type_four_items : faPublicationsPageData.type_four_items);
    }

    if (pathname === "/publications") {
        publicationsData();
    }

    // Research Page Data
    function researchData() {
        $("#page_title").text(lang === "en" ? "Research" : "تحقیقات");
        $("#research_title").html(lang === "en" ? enResearchPageData.title : faResearchPageData.title);
        $("#research_data").html(lang === "en" ? enResearchPageData.content : faResearchPageData.content);
    }

    if (pathname === "/research") {
        researchData();
    }

    // Jobs Page Data
    function jobsData() {
        $("#page_title").text(lang === "en" ? "Jobs" : "سوابق شغلی");
        $("#jobs_title").html(lang === "en" ? enJobsPageData.title : faJobsPageData.title);

        $("#jobs_data").html((lang === "en" ? enJobsPageData.items : faJobsPageData.items)
            .map((job) =>
            `<div class='job_item'>
                <div class='job_header'>
                    <div>
                        <h1>${job.title}${lang === "en" ? "," : "،"}</h1>
                        <h2> ${job.company}</h2>
                    </div>
                    <div>
                        <span>${job.startData} - ${job.endDate ? job.endDate : lang === "en" ? "Now" : "تاکنون"}</span>
                        <span class='job_location'>${job.location}</span>
                    </div>
                </div>
                <p>${job.abstract}</p>
                ${job.achievements.length > 0 ? `<div class="job_achievements"><ul>${job.achievements.map((achievement) => `<li>${achievement}</li>`).join("")}</ul></div>`: ""}
            </div>`)
            .join("")
        );
    }

    if (pathname === "/jobs") {
        jobsData();
    }

    // Contact Page Data
    const contact_data = {
        contact_title: lang === "en" ? "Contact" : "ارتباط با من",
        contact_items: [
            {
            img: "src/images/icons/location.png",
            title: lang === "en" ? globalData.enAddress : globalData.faAddress,
            active: globalData.enAddress || globalData.faAddress ? true : false,
            },
            {
            img: "src/images/icons/phone.png",
            title: globalData.phone,
            active: globalData.phone ? true : false,
            },
            {
            img: "src/images/icons/mail.png",
            title: globalData.email,
            active: globalData.email ? true : false,
            },
            {
            img: "src/images/icons/twitter.png",
            url: globalData.twitter,
            name: globalData.twitterTitle,
            active: globalData.twitter ? true : false,
            },
            {
            img: "src/images/icons/whatsapp.png",
            url: globalData.whatsapp,
            name: globalData.whatsappTitle,
            active: globalData.whatsapp ? true : false,
            },
            {
            img: "src/images/icons/google-scholar.png",
            url: globalData.googleScholar,
            name: globalData.googleScholarTitle,
            active: globalData.googleScholar ? true : false,
            },
            {
            img: "src/images/icons/orcid.png",
            url: globalData.orcid,
            name: globalData.orcidTitle,
            active: globalData.orcid ? true : false,
            },
            {
            img: "src/images/icons/github.png",
            url: globalData.github,
            name: globalData.githubTitle,
            active: globalData.github ? true : false,
            },
            {
            img: "src/images/icons/linkedin.png",
            url: globalData.linkedin,
            name: globalData.linkedinTitle,
            active: globalData.linkedin ? true : false,
            },
        ],
    };

    function contactData() {
        $("#page_title").html(contact_data.contact_title);
        $("#contact_title").html(contact_data.contact_title);
        $("#contact_data").html(contact_data.contact_items
            .filter((item) => item.active)
            .map((link) =>
            `<li>
                <img src=${link.img} alt=${link.title} /> 
                ${link.url ? `<a href=${link.url} target='_blank'> ${link.name ? link.name : link.url}</a>` : `<p>${link.title}</p>`}
            </li>`)
            .join("")
        );
    }

    if (pathname === "/contact") {
        contactData();
    }
});