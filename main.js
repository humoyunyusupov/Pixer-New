var burger = document.querySelector(".burger");
var siteNav = document.querySelector(".site-nav")

burger.addEventListener("click" , function(evt){
    evt.preventDefault();

    siteNav.classList.toggle("site-nav-block");
})