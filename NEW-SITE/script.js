const slides = document.querySelector(".slider-inner-container").children;

let index = 0;
function autoPlay(){
  nextSlide();
  updateDotIndicator();
}
function nextSlide(){
  if (index == slides.length - 1) {
     index = 0;
  }
  else{
     index++;
  }
  changeSlide();
}
function changeSlide(){
  for(let i=0; i < slides.length; i++){
     slides[i].classList.remove("active1");
  }
  slides[index].classList.add("active1");
}
let timer = setInterval(autoPlay, 5000);
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
function prevSlide(){
if (index == 0) {
index = slides.length - 1;
}
else{
index--;
}
changeSlide();
}
prev.addEventListener("click", function(){
prevSlide();
updateDotIndicator();
resetTimer();
})
next.addEventListener("click", function(){
nextSlide();
updateDotIndicator();
resetTimer();
})
function resetTimer(){
clearInterval(timer);
timer = setInterval(autoPlay, 3000);
}
const indicator = document.querySelector(".indicator");
prev.addEventListener("click", function(){
prevSlide();
updateDotIndicator();
resetTimer();
})
next.addEventListener("click", function(){
nextSlide();
updateDotIndicator();
resetTimer();
})
function resetTimer(){
clearInterval(timer);
timer = setInterval(autoPlay, 3000);
}
dotIndicator();
function dotIndicator(){
for(let i=0; i < slides.length; i++){
const div = document.createElement("div");
div.setAttribute("onclick", "indicateSlide(this)");
div.id = i;
if(i == 0){
div.className = "active1";
}
indicator.appendChild(div);
}
}
function indicateSlide(element){
index = element.id;
changeSlide();
updateDotIndicator();
resetTimer();
}
function updateDotIndicator(){
for(let i=0; i < indicator.children.length; i++){
indicator.children[i].classList.remove("active1");
}
indicator.children[index].classList.add("active1");
}
const disableAutoSlideOnHover = () => {
  const slideContainer = document.querySelector( ".slider-inner-container" );
  slideContainer.addEventListener( "mouseover", function() {
    clearTimeout( timer );
    timer = null;
  } );
  slideContainer.addEventListener( "mouseleave", function() {
    setTimeout( () => resetTimer(), 500 )
  } );
}
disableAutoSlideOnHover();


const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links span");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});