// let burger = document.getElementById('burger'),
// 	 nav    = document.getElementById('main-nav');
// 	//  slowmo = document.getElementById('slowmo');

// burger.addEventListener('click', function(e){
// 	this.classList.toggle('is-open');
// 	nav.classList.toggle('is-open');
// });
const
  burger = document.querySelector("#burger"), 
  nav = document.querySelector("#main-nav"),  // Use ID, if you already use one.
  a = document.querySelectorAll(".nav-lists"); // PS: Use the right selectors!

burger.addEventListener("click", function(e) {
  this.classList.toggle("is-open");
  nav.classList.toggle("is-open");
  document.body.classList.toggle("stop-scrolling");
  
});

a.forEach(el => el.addEventListener("click", function(e) {
  burger.classList.toggle("is-open");
  document.body.classList.remove("stop-scrolling");
  nav.classList.toggle("is-open");
}));

