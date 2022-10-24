"use strict";

var toggles = document.getElementsByClassName('toggle');
var contentDiv = document.getElementsByClassName('content');
var icons = document.getElementsByClassName('icon');

var _loop = function _loop(i) {
  toggles[i].addEventListener('click', function () {
    if (parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight) {
      contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
      toggles[i].style.color = "#ce8a0d";
      icons[i].classList.remove('fa-plus');
      icons[i].classList.add('fa-minus');
    } else {
      contentDiv[i].style.height = "0px";
      toggles[i].style.color = "#111130";
      icons[i].classList.remove('fa-minus');
      icons[i].classList.add('fa-plus');
    }

    for (var j = 0; j < contentDiv.length; j++) {
      if (j !== i) {
        contentDiv[j].style.height = "0px";
        toggles[j].style.color = "#111130";
        icons[j].classList.remove('fa-minus');
        icons[j].classList.add('fa-plus');
      }
    }
  });
};

for (var i = 0; i < toggles.length; i++) {
  _loop(i);
}

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