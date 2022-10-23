let toggler = document.getElementsByClassName("toggle");
let divContent = document.getElementsByClassName("content");
let iconElement = document.getElementsByClassName("icon");
for (let i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", () => {
    if (parseInt(divContent[i].style.height) != divContent[i].scrollHeight) {
      divContent[i].style.height = divContent[i].scrollHeight + "px";
      toggler[i].style.color = "#EC984F";
      iconElement[i].classList.remove("fa-plus");
      iconElement[i].classList.add("fa-minus");
    } else {
      divContent[i].style.height = "0px";
      toggler[i].style.color = "#fff";
      iconElement[i].classList.remove("fa-minus");
      iconElement[i].classList.add("fa-plus");
    }

    for (let j = 0; j < divContent.length; j++) {
      if (j !== i) {
        divContent[j].style.height = "0px";
        toggler[j].style.color = "#fff";
        iconElement[j].classList.remove("fa-minus");
        iconElement[j].classList.add("fa-plus");
      }
    }
  });
}
