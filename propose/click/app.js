const color = document.getElementById("color");
const color_button =  document.getElementById("color_button");

const colors = ["red", "blue", "green", "aqua", "yellow", "black", "pink", "chartreuse", "fuchsia"];

color_button.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random () * 10);
    color.style.backgroundColor = colors [randomIndex];
});

setInterval(()=>{
    const randomIndex = Math.floor(Math.random() * 10);
    color.style.backgroundColor = colors[randomIndex];
}, 500);




const btn = document.getElementById("btn");
const Message = document.getElementById("Message");

const msg  = "I love you Nipa💕";
btn.addEventListener("click", (e) =>{
    Message .textContent = msg;
});

