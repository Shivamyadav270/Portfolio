const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    const icon = themeToggle.querySelector("i");

    if (document.body.classList.contains("dark")) {

        icon.classList.remove("fa-moon");

        icon.classList.add("fa-sun");

        themeToggle.innerHTML =
            '<i class="fa-solid fa-sun"></i> Light Mode';

        localStorage.setItem("theme", "dark");

    } else {

        icon.classList.remove("fa-sun");

        icon.classList.add("fa-moon");

        themeToggle.innerHTML =
            '<i class="fa-solid fa-moon"></i> Dark Mode';

        localStorage.setItem("theme", "light");

    }

});


/* =================================
   REMEMBER THEME
================================= */

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeToggle.innerHTML =
        '<i class="fa-solid fa-sun"></i> Light Mode';

}


/* =================================
   CONTACT FORM
================================= */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const subject = document.getElementById("subject").value;

    const message = document.getElementById("message").value;


    if (
        name === "" ||
        email === "" ||
        subject === "" ||
        message === ""
    ) {

        alert("Please fill all the fields.");

        return;

    }


    /*
        This opens the user's email application.

        Replace the email address below
        with your preferred email address.
    */

    const myEmail = "shivamyadav24602@gmail.com";


    const mailSubject =
        encodeURIComponent(subject);

    const mailBody =
        encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\n\nMessage:\n" + message
        );


    window.location.href =
        `mailto:${myEmail}?subject=${mailSubject}&body=${mailBody}`;


    contactForm.reset();

});


/* =================================
   CURRENT YEAR
================================= */

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


/* =================================
   ACTIVE NAVIGATION
================================= */

const navLinks =
    document.querySelectorAll("nav a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.forEach(function (item) {

            item.classList.remove("active");

        });

        this.classList.add("active");

    });

});


/* =================================
   SCROLL REVEAL
================================= */

const sections =
    document.querySelectorAll("section");


const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.15
        }

    );


sections.forEach(function (section) {

    observer.observe(section);

});