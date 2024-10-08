document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

window.onscroll = function() {
    hideViewGallery();
    checkScroll()
};

var viewGallery = document.getElementById("view-gallery");
var form = document.getElementById("form");
var coord = form.getBoundingClientRect();
const mediaQueryMobile = window.matchMedia('(max-width: 768px)');

function focusInput() {
    console.log("focusInput running")
    if (mediaQueryMobile.matches) {
        document.getElementById("name-mobile").focus();
    } else {
        document.getElementById("name").focus();
    }
}

function hideViewGallery () {
    if (window.scrollY < 5) {
        viewGallery.classList.remove("hide")
    } else {
        viewGallery.classList.add("hide")
    }; 
};


window.addEventListener("resize", (event) => {
    coord = form.getBoundingClientRect();
    // console.log("resize");
});


//  ORIGINAL SCROLL FUNCTION
//  function checkScroll () {
//     console.log(window.scrollY)
//     if (window.scrollY + 52 >= coord.top) {
//         // form.style.backgroundColor = "#000000";
//         form.style.position = "fixed";
//         form.style.top = "0";
//         form.style.bottom = "auto";
//         form.style.boxShadow = "0 4px 8px #00000040";
//         // console.log("if");
//         // console.log(window.scrollY);
//     } 
//         else {
//         // form.style.backgroundColor = "#ff0000"
//         form.style.position = "absolute";
//         form.style.bottom = "6.8rem";
//         form.style.top = "auto";
//         form.style.boxShadow = "none";
//         // console.log("else");
//         //   console.log(window.scrollY);
//       }
// };

function checkScroll () {
    if (window.scrollY <= 100) {
        form.style.position = "absolute";
        form.style.bottom = "6.8rem";
        form.style.top = "auto";
        form.style.boxShadow = "none";
    }

        else if (window.scrollY + 52 >= coord.top) {
            form.style.position = "fixed";
            form.style.top = "0";
            form.style.bottom = "auto";
            form.style.boxShadow = "0 4px 8px #00000040";

        }

        else {
        form.style.position = "absolute";
        form.style.bottom = "6.8rem";
        form.style.top = "auto";
        form.style.boxShadow = "none";
      }
};