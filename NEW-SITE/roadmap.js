function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isItemInView(items[i])) {
        items[i].classList.add("show");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);


  const progressBar = document.getElementById("progressbar");
progressBar.style.height = 1 + "%";

window.onscroll = () => {
	const scroll = document.documentElement.scrollTop;
	const height =
		document.documentElement.scrollHeight - document.documentElement.clientHeight;
	let scrolled = (scroll / height) * 100;

	if (scrolled <= 1) {
		progressBar.style.height = 1 + "%";
	} else if (scrolled >= 2 && scrolled <= 99.9) {
		progressBar.style.height = scrolled + "%";
		progressBar.classList.remove("glow");
	} else if (scrolled === 100) {
		progressBar.style.height = scrolled + "%";
		// 		Do something when reached 100% scroll
		progressBar.classList.add("glow");
	}
};


