// --- Week 10: Existing Greeting & Age Calculation ---
let userName = "Yugant Adhikari";
let currentHour = new Date().getHours();

if (currentHour < 12) {
  console.log("Good morning, " + userName + "!");
} else if (currentHour < 18) {
  console.log("Good afternoon, " + userName + "!");
} else {
  console.log("Good evening, " + userName + "!");
}

let birthYear = 2007; // 19 years old in 2026
let age = 2026 - birthYear;
let daysLived = age * 365;

console.log("You have lived for approximately " + daysLived + " days!");

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// --- Week 11: Dark Mode Toggle ---
// 1. Select the toggle button (make sure your HTML button has id="theme-toggle" or class="theme-toggle")
const themeBtn = document.querySelector("#theme-toggle") || document.querySelector(".theme-toggle");

// 2. Add the click event listener to toggle the "dark-mode" class on the body
if (themeBtn) {
  themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    console.log("Dark mode toggled!");
  });
}
