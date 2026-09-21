//THERO PORTFOLIO - JAVASCRIPT PRACTICE

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