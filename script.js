const section = document.querySelector("section")
const blue = document.querySelector(".thumb1")
const red= document.querySelector(".thumb2")
const black= document.querySelector(".thumb3")
const img = document.querySelector(".pepsi")

function backgroundColor (){
    section.style.background = "#2255ff"
}

blue.addEventListener("click", () =>{
   backgroundColor();
   img.setAttribute("src", "images/pepsi001.png");
})


red.addEventListener("click", () =>{
    section.style.background = "#ff3355";
    img.setAttribute("src", "images/pepsi002.png");
})

 black.addEventListener("click", () =>{
    section.style.background = "black";
    img.setAttribute("src", "images/pepsi003.png");
})


