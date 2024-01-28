var btnContainer = document.getElementById("navbar");
var sections = document.querySelectorAll(".section");
var secBtns = document.querySelectorAll(".controls");
var btns = document.getElementsByClassName("control");
var allSections = document.querySelector(".main-contents");

function transitions() {
    for (i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("active-btn");
            current[0].className = current[0].className.replace(" active-btn", "");
            this.className += " active-btn active";

            // var currents = document.getElementsByClassName("active");
            // currents[0].className = current[0].className.replace(" active", "");
            // this.className += " active";
        });
    }
}

    // section active
    allSections.addEventListener("click", function(e) {
        const id = e.target.dataset.id;
        if (id) {
            secBtns.forEach((element) => {
                element.classList.remove("active");
            });

            e.target.classList.add("active");

            sections.forEach((elements) => {
                elements.classList.remove("active");
            });

            // removedisplay-b
            var sec2 = document.querySelector(".sec-2");
            var sec3 = document.querySelector(".sec-3");
            var sec4 = document.querySelector(".sec-4");
            console.log(sec2.classList[4]);

            if (sec2.classList === "active" || sec3.classList === "active") {
                console.log("hello");
            } else if (sec4.classList === "active") {
                s1.classList.remove("display-b");
            }

            const eliment = document.getElementById(id);
            eliment.classList.add("active");
        }
    });

    // Toggle

    function updateClock() {
        const element = document.querySelector(".theme-btn");
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? "pm" : "am";
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        var strTime = hours + ":" + minutes + " " + ampm;

        element.innerHTML = [strTime].join(" / ");

        setTimeout(updateClock, 1000);
    }
    updateClock();

transitions();

// textTransition

function updateType() {
    var typed = new Typed(".auto-input", {
        strings: [
            "I am a computer science student at Kibo School of Technology.",
            "Welcome to my portfolio.",
            "Feel free to explore my site.",
        ],
        typeSpeed: 70,
        backSpeed: 20,
        loop: true,
    });
    $(".typed-cursor").css("visibility", "hidden");
}

setTimeout(updateType, 8000);



var s1 = document.querySelector(".intro");
var h1 = document.querySelector(".header");
var settings = document.querySelector(".settings");

function change() {
    setTimeout(changed, 4000);
    setTimeout(visi, 5000);
}

function changed() {
    s1.classList.add("display-n");
    $(".controls").addClass("display-op");
    $(".auto-input").addClass("display-block");
    $(".theme-btn").addClass("display-block");
}

function visi() {
    h1.classList.add("display-b");
    settings.classList.add("display-iblock");
    $(".h2").addClass("display-iblock");
}


// colorpallete



window.addEventListener("load", function() {
    const colorOptions = document.querySelectorAll(".circle");
    let selectedColor = getComputedStyle(document.documentElement).getPropertyValue('--color-secondary'); // Initialize with the default color

    colorOptions.forEach((option) => {
        const color = option.getAttribute("data-color");

        option.addEventListener("mouseover", () => {
            document.documentElement.style.setProperty('--color-secondary', color);
        });

        option.addEventListener("mouseleave", () => {
            document.documentElement.style.setProperty('--color-secondary', selectedColor);
        });

        option.addEventListener("click", () => {
            selectedColor = color; // Update the selected color on click
        });
    });
});