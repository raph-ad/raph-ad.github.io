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

window.onscroll = function() {hideViewGallery()};

var viewGallery = document.getElementById("view-gallery");

function hideViewGallery () {
    if (window.scrollY == 0) {
        viewGallery.classList.remove("hide")
    } else {
        viewGallery.classList.add("hide")
    }; 
};
