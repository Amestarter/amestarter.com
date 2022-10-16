"use strict";

var burger = document.getElementById('burger'),
    nav = document.getElementById('main-nav'); //  slowmo = document.getElementById('slowmo');

burger.addEventListener('click', function (e) {
  this.classList.toggle('is-open');
  nav.classList.toggle('is-open');
}); // const navToggle = document.querySelector('.nav-toggle')

var navLink = document.querySelectorAll('.nav-lists');
navLink.addEventListener('click', function (e) {
  nav.classList.toggle('is-open');
});