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


// let elementsArray = document.querySelectorAll(".grid-item"); 
// console.log(elementsArray); 
// window.addEventListener('scroll', fadeIn );  
// function fadeIn() { 
//     for (var i = 0; i < elementsArray.length; i++) { 
//         var elem = elementsArray[i] 
//         var distInView = elem.getBoundingClientRect().top - window.innerHeight + 20; 
//         if (distInView < 0) { 
//             elem.classList.add("inView"); 
//         } else { 
//             elem.classList.remove("inView"); 
//         } 
//     } 
// } 
// fadeIn();