
const messages = [
    "Welcome to Forte-Town!",
    "What is your name?",
];
let step = 0;
console.log(messages.length);


document.addEventListener("click", () => {
    const textElement = document.getElementById("welcome-text");
    if(step == 0){
        textElement.textContent = messages[0];
    }
    if(step == 1){
        textElement.textContent = messages[1];
    }
    if(step == 2){}
    step = (step + 1) 
});

