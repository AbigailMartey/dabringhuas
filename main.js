const closeBtn = document.getElementById("close-popup");
const openBtn  = document.getElementById("open-popup");
const popup = document.getElementById("popup")

closeBtn.addEventListener("click",( ) =>{
    popup.classList.remove("open")
  } )
  openBtn.addEventListener("click",( ) =>{
    popup.classList.add("open")
  } )
