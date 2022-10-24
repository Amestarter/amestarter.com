"use strict";

var mobileNav = document.querySelector(".mobileNav");
var burger = document.querySelector("#burger"),
    hamburger = document.querySelector("#hamburger");
a = document.querySelectorAll(".nav-lists");
burger.addEventListener("click", function (e) {
  mobileNav.classList.toggle("is-open");
  document.body.classList.toggle("stop-scrolling");
});
hamburger.addEventListener("click", function (e) {
  mobileNav.classList.toggle("is-open");
  document.body.classList.toggle("stop-scrolling");
});
a.forEach(function (el) {
  return el.addEventListener("click", function (e) {
    mobileNav.classList.toggle("is-open");
    document.body.classList.remove("stop-scrolling");
  });
}); // const card = document.querySelectorAll('.grid-item'),

var elementsArray = document.querySelectorAll(".grid-item");
console.log(elementsArray);
window.addEventListener('scroll', fadeIn);

function fadeIn() {
  for (var i = 0; i < elementsArray.length; i++) {
    var elem = elementsArray[i];
    var distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;

    if (distInView < 0) {
      elem.classList.add("inView");
    } else {
      elem.classList.remove("inView");
    }
  }
}

fadeIn();
var elementsArrayOne = document.querySelectorAll(".itemwrapper");
console.log(elementsArrayOne);
window.addEventListener('scroll', fadeOut);

function fadeOut() {
  for (var i = 0; i < elementsArrayOne.length; i++) {
    var elemOne = elementsArrayOne[i];
    var distInViewAgain = elemOne.getBoundingClientRect().top - window.innerHeight + 20;

    if (distInViewAgain < 0) {
      elemOne.classList.add("inView");
    } else {
      elemOne.classList.remove("inView");
    }
  }
}

fadeOut();
var elementsArrayOneTwo = document.querySelectorAll(".wrapper");
console.log(elementsArrayOneTwo);
window.addEventListener('scroll', fadeOutIn);

function fadeOutIn() {
  for (var i = 0; i < elementsArrayOneTwo.length; i++) {
    var elemOneTwo = elementsArrayOneTwo[i];
    var distInViewAgainAdd = elemOneTwo.getBoundingClientRect().top - window.innerHeight + 20;

    if (distInViewAgainAdd < 0) {
      elemOneTwo.classList.add("inView");
    } else {
      elemOneTwo.classList.remove("inView");
    }
  }
}

fadeOutIn();