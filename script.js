let menubar = document.querySelector('#menu-bar');
let mynav = document.querySelector('.nav');
let searchbar = document.querySelector('#search-bar');
let search = document.querySelector('.search-form');



menubar.onclick = () =>{
    menubar.classList.toggle('fa-times')
    mynav.classList.toggle('active')
}
searchbar.onclick = () =>{
    search.classList.toggle('active');
}

// faq
var faq = document.getElementsByClassName("faq-page");
var i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}



/* Demo purposes only */
$(".hover").mouseleave(
    function() {
      $(this).removeClass("hover");
    }
  );





