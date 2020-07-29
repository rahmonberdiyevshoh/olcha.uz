 if ($(window).width() > 998) {
     window.addEventListener("scroll", function() {
         var header = document.getElementById("sticky-menu");
         header.classList.toggle("sticky", window.scrollY > 222);
         header.classList.toggle("d-show", window.scrollY > 222);
         var logo = document.getElementById("logo");
         logo.classList.toggle("d-inline-block", window.scrollY > 222);
     });
 }




 if ($(window).width() < 998) {
     window.addEventListener("scroll", function() {
         var nav = document.getElementById("nav")
         nav.classList.toggle("sticky-expand", window.scrollY > 0);


     });
 }