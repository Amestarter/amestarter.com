"use strict";

function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isItemInView(items[i])) {
      items[i].classList.add("show");
    }
  }
} // listen for events


window.addEventListener("load", callbackFunc);
window.addEventListener("resize", callbackFunc);
window.addEventListener("scroll", callbackFunc);
var progressBar = document.getElementById("progressbar");
progressBar.style.height = 1 + "%";

window.onscroll = function () {
  var scroll = document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = scroll / height * 100;

  if (scrolled <= 1) {
    progressBar.style.height = 1 + "%";
  } else if (scrolled >= 2 && scrolled <= 99.9) {
    progressBar.style.height = scrolled + "%";
    progressBar.classList.remove("glow");
  } else if (scrolled === 100) {
    progressBar.style.height = scrolled + "%"; // 		Do something when reached 100% scroll

    progressBar.classList.add("glow");
  }
};

var body = document.getElementsByTagName('body')[0];
body.style.backgroundColor = 'green'; // trigger this function every time the user scrolls

window.onscroll = function (event) {
  var scroll = window.pageYOffset;

  if (scroll < 300) {
    // green
    body.style.backgroundColor = 'green';
  } else if (scroll >= 300 && scroll < 600) {
    // yellow
    body.style.backgroundColor = 'yellow';
  } else if (scroll >= 600 && scroll < 1200) {
    // blue
    body.style.backgroundColor = 'blue';
  } else if (scroll >= 1200 && scroll < 1800) {
    // orange
    body.style.backgroundColor = 'orange';
  } else if (scroll >= 1800 && scroll < 3000) {
    // red
    body.style.backgroundColor = 'red';
  } else {
    // purple
    body.style.backgroundColor = 'purple';
  }
};