//THERO PORTFOLIO - JAVASCRIPT PRACTICE

// ============================================================
// MODULES 1–6 — Variables, Data Types, Operators, Conditions
// ============================================================

//JavaScript Variables

let portfolioName = "THERO"
let portfolioType = "Software Engineering Portfolio"
let portfolioStatus = "Currently learning JavaScript"
let latestUpdate = "I have completed the first six JavaScript modules.";


console.log("=== " + portfolioName + " Portfolio ===");
console.log("Type: " + portfolioType);
console.log("Status: " + portfolioStatus);
console.log("Latest Update: " + latestUpdate);


//JavaScript Conditions
let learningJavaScript = true;

let learningStatus = document.getElementById("learning-status");

if (learningJavaScript) {

    learningStatus.innerText = "Currently learning JavaScript and applying it to this portfolio.";

    console.log("I am currently learning JavaScript and improving my skills.");

} else {

    learningStatus.innerText = "JavaScript learning is currently paused.";

    console.log("JavaScript learning is currently paused.");

}


//Project Status
let projectCount = 4;
if (projectCount > 0) {
    console.log("Projects are available in the portfolio.");
} else {
    console.log("Projects are coming soon.");
}



// ============================================================
// MODULE 7 — LOOPS
// ============================================================

// Use a loop to work through the portfolio navigation links.
let navLinks = document.querySelectorAll(".primary-nav a");

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function () {
        console.log("Navigating to: " + navLinks[i].innerText);
    });
}


// ============================================================
// MODULE 8 — STRINGS
// ============================================================

// String methods used with the portfolio name.
let displayName = portfolioName.toUpperCase();

console.log("Portfolio name: " + displayName);
console.log("Name length: " + displayName.length);


// ============================================================
// MODULE 9 — NUMBERS
// ============================================================

let currentYear = 2026;
let portfolioAge = currentYear - 2024;

console.log("Portfolio journey started in 2024.");
console.log("Years since starting Software Engineering: " + portfolioAge);


// ============================================================
// MODULE 10 — FUNCTIONS
// ============================================================

function updateLearningStatus(message) {
    if (learningStatus) {
        learningStatus.innerText = message;
    }
}

function countProjects() {
    return document.querySelectorAll(".project-card").length;
}

console.log("Projects currently displayed: " + countProjects());


// ============================================================
// MODULE 11 — TIMERS
// ============================================================

// Demonstrates setTimeout without interrupting the page.
setTimeout(function () {
    console.log("THERO Portfolio JavaScript is running.");
}, 2000);


// ============================================================
// MODULE 12 — OBJECTS
// ============================================================

let portfolio = {
    name: "THERO",
    type: "Software Engineering Portfolio",
    artist: true,
    learning: "JavaScript",
    projectCount: projectCount
};

console.log("Portfolio object:", portfolio);
console.log("Portfolio owner: " + portfolio.name);
console.log("Current learning: " + portfolio.learning);


// ============================================================
// PRACTICAL PORTFOLIO INTERACTION
// ============================================================

// Gallery — uses the existing data-artwork-id attributes.
let artworkCards = document.querySelectorAll(".art-card");

artworkCards.forEach(function (card) {
    card.addEventListener("click", function () {
        let artworkId = card.dataset.artworkId;

        console.log("Selected artwork: " + artworkId);
    });
});


// Mobile navigation — existing HTML/CSS hooks.
let menuOpen = document.getElementById("menu-open");
let menuClose = document.getElementById("menu-close");
let mobileDrawer = document.getElementById("mobile-drawer");
let drawerBackdrop = document.getElementById("drawer-backdrop");

function openMenu() {
    mobileDrawer.classList.add("mobile-drawer--open");
    menuOpen.setAttribute("aria-expanded", "true");
}

function closeMenu() {
    mobileDrawer.classList.remove("mobile-drawer--open");
    menuOpen.setAttribute("aria-expanded", "false");
}

if (menuOpen) {
    menuOpen.addEventListener("click", openMenu);
}

if (menuClose) {
    menuClose.addEventListener("click", closeMenu);
}

if (drawerBackdrop) {
    drawerBackdrop.addEventListener("click", closeMenu);
}


// Close mobile navigation when a link is selected.
let mobileLinks = document.querySelectorAll(".mobile-drawer nav a");

mobileLinks.forEach(function (link) {
    link.addEventListener("click", closeMenu);
});