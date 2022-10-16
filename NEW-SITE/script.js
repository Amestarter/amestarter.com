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

var items = document.querySelectorAll("li");

function isItemInView(item){
  var rect = item.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}



let toggles = document.getElementsByClassName('toggle');
let contentDiv = document.getElementsByClassName('content');
let icons = document.getElementsByClassName('icon');

for(let i=0; i<toggles.length; i++){
    toggles[i].addEventListener('click', ()=>{
        if( parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight){
            contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
            toggles[i].style.color = "#ce8a0d";
            icons[i].classList.remove('fa-plus');
            icons[i].classList.add('fa-minus');
        }
        else{
            contentDiv[i].style.height = "0px";
            toggles[i].style.color = "#111130";
            icons[i].classList.remove('fa-minus');
            icons[i].classList.add('fa-plus');
        }

        for(let j=0; j<contentDiv.length; j++){
            if(j!==i){
                contentDiv[j].style.height = "0px";
                toggles[j].style.color = "#111130";
                icons[j].classList.remove('fa-minus');
                icons[j].classList.add('fa-plus');
            }
        }
    });
}

