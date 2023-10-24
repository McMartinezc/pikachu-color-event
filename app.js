// Pika-pika suerte!
const colors = document.getElementById("colors");
const pikachu = document.querySelector("img");

colors.addEventListener("click", (event)=>{
    const selectColor= event.target.id;
    pikachu.style.background = selectColor;
})