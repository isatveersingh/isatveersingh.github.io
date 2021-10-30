const mobileMenu = document.getElementById("menu-open");
const navbar = document.querySelector(".nav-links-con");
mobileMenu.addEventListener("click", ()=>{
    mobileMenu.classList.toggle("fa-times");
    navbar.classList.toggle("show");
})

window.addEventListener("scroll", ()=>{
    if(navbar.classList.contains("show")){
        mobileMenu.classList.remove("fa-times");
        navbar.classList.remove("show");
    }
})