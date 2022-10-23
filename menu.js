let mobileNav = document.querySelector(".mobileNav");
const burger = document.querySelector("#burger"),
  hamburger = document.querySelector("#hamburger");
a = document.querySelectorAll(".nav-lists");
burger.addEventListener("click", function (e) {
  mobileNav.classList.toggle("is-open");
  // document.body.classList.toggle("stop-scrolling");
});
hamburger.addEventListener("click", (e) => {
  mobileNav.classList.toggle("is-open");
  // document.body.classList.toggle("stop-scrolling");
});

a.forEach((el) =>
  el.addEventListener("click", function (e) {
    mobileNav.classList.toggle("is-open");
    // document.body.classList.remove("stop-scrolling");
  })
);
