let mobileNav = document.querySelector(".mobileNav");
const burger = document.querySelector("#burger"),
  hamburger = document.querySelector("#hamburger");
a = document.querySelectorAll(".nav-lists");
burger.addEventListener("click", function (e) {
  mobileNav.classList.toggle("is-open");
  document.body.classList.toggle("stop-scrolling");
});
hamburger.addEventListener("click", (e) => {
  mobileNav.classList.toggle("is-open");
  document.body.classList.toggle("stop-scrolling");
});

a.forEach((el) =>
  el.addEventListener("click", function (e) {
    mobileNav.classList.toggle("is-open");
    document.body.classList.remove("stop-scrolling");
  })
);
// const card = document.querySelectorAll('.grid-item');
// window.onscroll = () => {
//     if (window.scrollY > 300){

//         card.classList.add('inView');
//     }
//     else{
//         card.classList.remove('inView');
//     }
// };

let elementsArray = document.querySelectorAll(".grid-item"); 
console.log(elementsArray); 
window.addEventListener('scroll', fadeIn );  
function fadeIn() { 
    for (var i = 0; i < elementsArray.length; i++) { 
        var elem = elementsArray[i] 
        var distInView = elem.getBoundingClientRect().top - window.innerHeight + 20; 
        if (distInView < 0) { 
            elem.classList.add("inView"); 
        } else { 
            elem.classList.remove("inView"); 
        } 
    } 
} 
fadeIn();