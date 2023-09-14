document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

// // When the user scrolls the page, execute stickyForm
// window.onscroll = function() {stickyForm()};

// // Get the form
// var form = document.getElementById("sticky-form");

// // Get the offset position of the form
// var sticky = form.offsetTop;

// // Add the sticky class to the form when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function stickyForm() {
//     console.log(window.scrollY)
//   if (window.scrollY + 272.5 >= sticky * -1) {
//     form.classList.add("sticky")
//   } else {
//     form.classList.remove("sticky");
//   }
// }


window.onscroll = function() {
    hideViewGallery();
    checkScroll()
};


var viewGallery = document.getElementById("view-gallery");

function hideViewGallery () {
    if (window.scrollY < 5) {
        viewGallery.classList.remove("hide")
    } else {
        viewGallery.classList.add("hide")
    }; 
};

var form = document.getElementById("form");
var coord = form.getBoundingClientRect();

window.addEventListener("resize", (event) => {
    coord = form.getBoundingClientRect();
    console.log("resize");
});


function checkScroll () {
    if (window.scrollY + 52 >= coord.top) {
        // form.style.backgroundColor = "#000000";
        form.style.position = "fixed";
        form.style.top = "0";
        form.style.bottom = "auto";
        console.log("if");
        console.log(window.scrollY);
    } 
        else {
        // form.style.backgroundColor = "#ff0000"
        form.style.position = "absolute";
        form.style.bottom = "6.8rem";
        form.style.top = "auto";
        console.log("else");
          console.log(window.scrollY);
      }
};

// console.log(window.scrollY);
    // console.log(form.offsetTop);
    // if ((window.scrollY + 52) >= (form.offsetTop)) {
    //     form.style.position = "fixed";
    //         form.style.top = "0";
    //         form.style.bottom = "auto";
    //         console.log("else");
    // }
    // else if ((window.scrollY + 52) <= (form.offsetTop)) {
    //     form.style.position = "absolute";
    //     form.style.bottom = "6.8rem";
    //     form.style.top = "auto";
    //     console.log("if");
    // }