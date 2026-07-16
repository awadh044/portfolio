// ===============================
// Loader
// ===============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

    }, 600);

});

// ===============================
// Typing Effect
// ===============================

new Typed(".typing", {

    strings: [

        "Frontend Developer",

        "AI & ML Enthusiast",

        "Data Science Student",

        "React Developer"

    ],

    typeSpeed: 70,

    backSpeed: 45,

    backDelay: 1500,

    loop: true

});

// ===============================
// AOS Animation
// ===============================

AOS.init({

    duration: 1000,

    once: true,

    offset: 120

});

// ===============================
// Dark / Light Mode
// ===============================

const themeBtn = document.getElementById("theme-btn");

let dark = true;

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {

        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

    } else {

        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';

    }

    dark = !dark;

});

// ===============================
// Back To Top Button
// ===============================

const topBtn = document.createElement("button");

topBtn.id = "topBtn";

topBtn.innerHTML = "↑";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 350) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ===============================
// Navbar Shadow
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.35)";

    } else {

        header.style.boxShadow = "none";

    }

});

// ===============================
// Active Navigation
// ===============================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ===============================
// Scroll Progress Bar
// ===============================

const progress = document.createElement("div");

progress.style.position = "fixed";

progress.style.top = "0";

progress.style.left = "0";

progress.style.height = "4px";

progress.style.background = "#00D4FF";

progress.style.zIndex = "99999";

document.body.appendChild(progress);

window.addEventListener("scroll", () => {

    const totalHeight =

        document.documentElement.scrollHeight -

        document.documentElement.clientHeight;

    const progressWidth =

        (window.pageYOffset / totalHeight) * 100;

    progress.style.width = progressWidth + "%";

});

// ===============================
// Smooth Hover Animation
// ===============================

const cards = document.querySelectorAll(

    ".skill-card,.project-card,.certificate-card,.edu-box"

);

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

// ===============================
// Contact Form
// ===============================

const form = document.querySelector(".contact-form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank you! Your message has been received.");

        form.reset();

    });

}

// ===============================
// Console Message
// ===============================

console.log(
"%cPortfolio Designed by Awadhesh Singh",
"color:#00D4FF;font-size:18px;font-weight:bold;"
);