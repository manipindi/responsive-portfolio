//fetching data
// let api_url = "https://jsonplaceholder.typicode.com/users";
// let api_url1 = "https://jsonplaceholder.typicode.com/comments";

// getData();

// async function getData() {
//   const response = await fetch(api_url);
//   const data = await response.json();
//   console.log(data[0].name);

//   const response1 = await fetch(api_url1);
//   const data1 = await response1.json();

//   document.getElementById("name").textContent = data[0].name;
//   // document.getElementById("about-para1").textContent = data1[0].body;
//   // document.getElementById("about-para2").textContent = data1[0].body;

//   let about_p = document.getElementsByClassName("about-paras");
//   // console.log(about_p);

//   for (let i = 0; i < about_p.length; i++) {
//     about_p[i].textContent = data1[0].body;
//   }
// }

// scroll to top button
let stickyhead = document.getElementById("stickyhead");
let element = document.getElementById("about");
let pos = element.offsetTop;

var topBtn = document.getElementById("topBtn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) &&
    screen.width < 900
  ) {
    topBtn.style.display = "block";
    stickyhead.classList.add("stickyheader");
    stickyhead.classList.add("headercolor");
    // stickyhead.classList.add("stickyheader");
  } else {
    topBtn.style.display = "none";
    stickyhead.classList.remove("headercolor");
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

let navigation = document.getElementById("mynav");
navigation.addEventListener("click", (e) => {
  navigation.style.width = "0%";
});

var acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

let userInfo = {
  name: "Manikanta",
  role: "UI/UX/DESIGNER",
  country: "IN INDIA",
  navLinks: [
    "HOME",
    "ABOUT",
    "SERVICES",
    "SKILLS",
    "EDUCATION",
    "EXPERIENCE",
    "WORK",
    "CONTACT",
  ],
  footer: "hello mani",
  about_p1:
    "On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word 'and' and the Little Blind Text should turn around and return to its own, safe country.",
  about_p2:
    "Even the all-powerful Pointing has no control about the blind texts it is an almostunorthographic life One day however a small line of blind text by the name of Lorem Ipsumdecided to leave for the far World of Grammar.",
  about_cards: ["Graphic Design", "Web Design", "Software", "Application"],
  banner_content: "I am happy to know you ",
  banner_content2: "that 300+ projects done sucessfully!",
  services: [
    "INNOVATIVE IDEAS",
    "SOFTWARE",
    "APPLICATION",
    "GRAPHIC DESIGN",
    "SOFTWARE",
    "APPLICATION",
  ],
  serviceText:
    "Separated they live in Bookmarksgrove right at the coast of the Semantics",
  achievements: ["309", "356", "30", "10"],
  achievements_detail: ["CUPS OF COFFEE", "PROJECTS", "CLIENTS", "PARTNERS"],
  skill_content:
    "The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didnt listen. She packed her seven versalia, put her initial into the belt and made herself on the way.",
  progress_names: ["Photoshop", "jQuery", "HTML5", "CSS3", "WordPress", "SEO"],

  accordionTitle: [
    "MASTER DEGREE IN GRAPHIC DESIGN",
    "BACHELOR DEGREE OF COMPUTER SCIENCE",
    "DIPLOMA IN INFORMATION TECHNOLOGY",
    "DIPLOMA IN INFORMATION TECHNOLOGY",
    "HIGH SCHOOL SECONDARY EDUCATION",
  ],
  accordion_body: [
    "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  ],
  accordion_list: "Separated they live in Bookmarksgrove right",

  timeline_headings: [
    "Full Stack Developer ",
    "Front End Developer at Google Company ",
    "System Analyst ",
    "Creative Designer ",
    "UI/UX Designer at Envato ",
  ],
  timeline_span: "2017-2018",
  timeline_content:
    "Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.",
  work_links: ["Graphic Design", "Web Design", "Software", "Software"],
  contact_details: [
    "info@domain.com",
    "198 West 21thStreet, Suite 721 New York NY 10016",
    "+123 456 7890",
  ],
};

const renderData = () => {
  //sidenav
  let sidenav_links = document.getElementsByClassName("sidenav-links");
  for (link in sidenav_links) {
    sidenav_links[link].textContent = userInfo.navLinks[link];
  }

  //name
  document.getElementById("profile-name").textContent = userInfo.name;
  document.getElementById("name").textContent = userInfo.name;
  document.getElementById("role").textContent = userInfo.role;
  document.getElementById("region").textContent = userInfo.country;

  //About us section
  document.getElementById("about-p1").textContent = userInfo.about_p1;
  document.getElementById("about-p2").textContent = userInfo.about_p2;

  let aboutcards = document.getElementsByClassName("card-text");

  for (let i = 0; i < aboutcards.length; i++) {
    aboutcards[i].textContent = userInfo.about_cards[i];
  }

  //banner
  document.getElementById("banner-content").textContent =
    userInfo.banner_content;
  document.getElementById("banner-content2").textContent =
    userInfo.banner_content2;

  //service section
  let service_cards_headings = document.getElementsByClassName(
    "service-card-heading"
  );

  let service_card_text = document.getElementsByClassName("service-card-text");

  for (let i = 0; i < service_cards_headings.length; i++) {
    service_cards_headings[i].textContent = userInfo.services[i];
    service_card_text[i].textContent = userInfo.serviceText;
  }

  //transparent image
  let transparent_img_text = document.getElementsByClassName("p-one");
  let transparent_img_text2 = document.getElementsByClassName("p-two");

  for (text in transparent_img_text) {
    transparent_img_text[text].textContent = userInfo.achievements[text];
    transparent_img_text2[text].textContent =
      userInfo.achievements_detail[text];
  }

  document.getElementById("skill-id1").textContent = userInfo.skill_content;

  //progress bars
  let progress_names = document.getElementsByClassName("progress-names");

  for (progress in progress_names) {
    progress_names[progress].textContent = userInfo.progress_names[progress];
  }

  //accordion
  let accordions = document.getElementsByClassName("accordion");
  for (accordion in accordions) {
    accordions[accordion].textContent = userInfo.accordionTitle[accordion];
  }

  let acc_data = document.getElementsByClassName("acc-para");
  for (accordion_para in acc_data) {
    acc_data[accordion_para].textContent =
      userInfo.accordion_body[accordion_para];
  }

  let acc_lists = document.getElementsByClassName("acc_list");
  for (acc_list in acc_lists) {
    acc_lists[acc_list].textContent = userInfo.accordion_list;
  }

  //timeline
  let timelineheadings = document.getElementsByClassName("timeline-heading");
  let timelinecontent = document.getElementsByClassName("timeline-content");
  let timelinespan = document.getElementsByClassName("timeline-span");

  for (let timelinedata in timelineheadings) {
    timelineheadings[timelinedata].textContent =
      userInfo.timeline_headings[timelinedata];
    timelinecontent[timelinedata].textContent = userInfo.timeline_content;
    timelinespan[timelinedata].textContent = userInfo.timeline_span;
  }

  //work
  let work_navbar_links = document.getElementsByClassName("work-link");
  for (link in work_navbar_links) {
    work_navbar_links[link].textContent = userInfo.work_links[link];
  }

  //contact
  let details = document.getElementsByClassName("contact-details");
  for (contact in details) {
    details[contact].textContent = userInfo.contact_details[contact];
  }
};

//intersection observer

let graphic_card = document.getElementById("card-graphic");
let web_card = document.getElementById("card-web");
let software_card = document.getElementById("card-software");
let application_card = document.getElementById("card-application");

let about_banner = document.getElementById("about-banner");

let service_heading = document.getElementById("service-heading");

let service_cards = document.getElementById("service-cards");
let service_cards1 = document.getElementById("service-cards1");

let service_bulb = document.getElementById("service-bulb");
let service_database = document.getElementById("service-database");
let service_mobile = document.getElementById("service-mobile");
let service_layer = document.getElementById("service-layer");
let service_database1 = document.getElementById("service-database1");
let service_mobile1 = document.getElementById("service-mobile1");

let skill_id = document.getElementById("skill-id");
let skill_name = document.getElementById("skill-name");
let skill_heading = document.getElementById("skill-heading1");

let progress_percent = document.getElementById("progress-percent");

let progress_bars = document.querySelectorAll(".progress-bar");
let progress_percentagees = document.querySelectorAll(".progress-percentage");
// console.log(progress_bars);

let progress_percentages = [75, 60, 85, 90, 70, 80];

let timeline1 = document.getElementById("timeline1");
let timeline2 = document.getElementById("timeline2");
let timeline3 = document.getElementById("timeline3");
let timeline4 = document.getElementById("timeline4");
let timeline5 = document.getElementById("timeline5");

let yellow = document.getElementById("yellow");
let red = document.getElementById("red");
let green = document.getElementById("green");
let gray = document.getElementById("gray");
let blue_black = document.getElementById("blue-black");
let blue_yellow = document.getElementById("blue-yellow");

let loadbtn = document.getElementById("loadmore");

let contact1 = document.getElementById("con-card1");
let contact2 = document.getElementById("con-card2");
let contact3 = document.getElementById("con-card3");

let home = document.getElementById("home1");
let about = document.getElementById("about1");
let services = document.getElementById("services1");
let skills = document.getElementById("skills1");
let education = document.getElementById("education1");
let experience = document.getElementById("experience1");
let work = document.getElementById("work1");
let contact_link = document.getElementById("contact-link");

let sections = document.querySelectorAll(".sub-sections");
let longsection = document.querySelectorAll(".longsection");

const options = {
  threshold: "0.4",
};

const option2 = {
  threshold: "0.35",
};

const observer1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry.target.id);
    if (entry.target.id === "work-cards1") {
      yellow.classList.add("slideright");
      red.classList.add("slideleft");
      green.classList.add("slidetop");
      gray.classList.add("slidetop1");
      blue_black.classList.add("slideright");
      blue_yellow.classList.add("slideleft");
      loadbtn.classList.add("slidetop");
    }
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry.target.id);
      if (entry.target.id === "home") {
        home.classList.add("activelink");
        about.classList.remove("activelink");
        services.classList.remove("activelink");
        skills.classList.remove("activelink");
        education.classList.remove("activelink");
        experience.classList.remove("activelink");
        work.classList.remove("activelink");
        contact_link.classList.remove("activelink");
      }
      if (entry.target.id === "about-content") {
        entry.target.classList.add("slideright");
        // about.classList.toggle("activelink");
        home.classList.remove("activelink");
        about.classList.add("activelink");
        services.classList.remove("activelink");
        skills.classList.remove("activelink");
        education.classList.remove("activelink");
        experience.classList.remove("activelink");
        work.classList.remove("activelink");
        contact_link.classList.remove("activelink");
      }
      if (entry.target.id === "about-para") {
        entry.target.classList.add("slidetop");
      }

      if (entry.target.id === "about-cards") {
        graphic_card.classList.add("slideright");
        web_card.classList.add("slideleft");
        software_card.classList.add("slidetop");
        application_card.classList.add("slidetop1");
      }
      if (entry.target.id === "about-banner") {
        about_banner.classList.add("slideright");
      }
      if (entry.target.id === "service-heading") {
        entry.target.classList.add("slideright");
        // services.classList.toggle("activelink");
        home.classList.remove("activelink");
        about.classList.remove("activelink");
        services.classList.add("activelink");
        skills.classList.remove("activelink");
        education.classList.remove("activelink");
        experience.classList.remove("activelink");
        work.classList.remove("activelink");
        contact_link.classList.remove("activelink");
      }
      if (entry.target.id === "service-cards") {
        service_bulb.classList.add("slidetop");
        service_database.classList.add("slidetop1");
        service_mobile.classList.add("slidetop2");
      }
      if (entry.target.id === "service-cards1") {
        service_layer.classList.add("slidetop");
        service_database1.classList.add("slidetop1");
        service_mobile1.classList.add("slidetop2");
      }

      if (entry.target.id === "skill-heading") {
        entry.target.classList.add("slideright");

        home.classList.remove("activelink");
        about.classList.remove("activelink");
        services.classList.remove("activelink");
        skills.classList.add("activelink");
        education.classList.remove("activelink");
        experience.classList.remove("activelink");
        work.classList.remove("activelink");
        contact_link.classList.remove("activelink");
      }

      if (entry.target.id === "skill-heading1") {
        entry.target.classList.add("slidetop");
      }

      if (entry.target.id === "progress-percent") {
        for (let i = 0; i < progress_bars.length; i++) {
          let width = 0;
          let ele = progress_bars[i];
          let per = progress_percentagees[i];
          let id = setInterval(() => {
            if (width >= progress_percentages[i]) {
              clearInterval(id);
            } else {
              width++;
              ele.style.width = width + "%";
              per.innerHTML = width + "%";
            }
          }, 20);
        }
      }

      if (entry.target.id === "education-title") {
        entry.target.classList.add("slideright");
      }
      if (entry.target.id === "accordion") {
        entry.target.classList.add("slidetop");

        home.classList.remove("activelink");
        about.classList.remove("activelink");
        services.classList.remove("activelink");
        skills.classList.remove("activelink");
        education.classList.add("activelink");
        experience.classList.remove("activelink");
        work.classList.remove("activelink");
        contact_link.classList.remove("activelink");
      }
      if (entry.target.id === "experience-heading") {
        entry.target.classList.add("slideright");
        home.classList.remove("activelink");
        about.classList.remove("activelink");
        services.classList.remove("activelink");
        skills.classList.remove("activelink");
        education.classList.remove("activelink");
        experience.classList.add("activelink");
        work.classList.remove("activelink");
        contact_link.classList.remove("activelink");
      }
      if (entry.target.id === "timeline") {
        timeline1.classList.add("slideright");
        timeline2.classList.add("slideleft");
        timeline3.classList.add("slideright");
        timeline4.classList.add("slideleft");
        timeline5.classList.add("slideright");
      }

      if (entry.target.id === "work-heading") {
        entry.target.classList.add("slideright");

        home.classList.remove("activelink");
        about.classList.remove("activelink");
        services.classList.remove("activelink");
        skills.classList.remove("activelink");
        education.classList.remove("activelink");
        experience.classList.remove("activelink");
        work.classList.add("activelink");
        contact_link.classList.remove("activelink");
      }
      if (entry.target.id === "work-navs") {
        entry.target.classList.add("slidetop");
        // if (document.getElementById("work-cards1")) {
        // }
      }
      // if (entry.target.id === "work-cards1" && screen.width > 480) {
      //   yellow.classList.add("slideright");
      //   red.classList.add("slideleft");
      //   green.classList.add("slidetop");
      //   gray.classList.add("slidetop1");
      //   blue_black.classList.add("slideright");
      //   blue_yellow.classList.add("slideleft");
      //   loadbtn.classList.add("slidetop");
      // }

      if (entry.target.id === "contact-heading") {
        entry.target.classList.add("slideright");
        home.classList.remove("activelink");
        about.classList.remove("activelink");
        services.classList.remove("activelink");
        skills.classList.remove("activelink");
        education.classList.remove("activelink");
        experience.classList.remove("activelink");
        work.classList.remove("activelink");
        contact_link.classList.add("activelink");
      }

      if (entry.target.id === "contact-cards") {
        contact1.classList.add("slideright");
        contact2.classList.add("slidetop");
        contact3.classList.add("slideleft");
      }
    }
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});

longsection.forEach((longsec) => {
  observer1.observe(longsec);
});

function opennav() {
  document.getElementById("mynav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mynav").style.width = "0%";
}
