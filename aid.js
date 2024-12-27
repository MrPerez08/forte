/*   THIS IS FOR FIRST TIMERS!!
document.addEventListener("DOMContentLoaded", () => {
    const storageKey = "hasVisited";

    if (!localStorage.getItem(storageKey)) {
        // First visit
        console.log("Welcome, first-time visitor!");
        localStorage.setItem(storageKey, "true");
    } else {
        // Returning visit
        console.log("Welcome back!");
    }
});
*/

/* THIS IS FOR CHANGING TEXT OR THINGS WHEN YOU CLICK ON THEM
const messages = [
    "Hello, world!",
    "You clicked the screen!",
    "Keep clicking for more surprises!",
    "This is fun, right?",
];
let index = 0;
  
document.addEventListener("click", () => {
    const textElement = document.getElementById("welcome-text");
    textElement.textContent = messages[index];
    index = (index + 1) % messages.length; // Loop through messages
});
*/