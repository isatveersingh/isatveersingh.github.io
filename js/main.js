const navMenu = document.querySelector(".nav-links");
const navOpen = document.querySelector(".menu-open");
const navClose = document.querySelector(".menu-close");
const navLinkItem = document.querySelectorAll(".nav-link-item");

navOpen.addEventListener("click", ()=>{
    if(window.innerWidth < 992) {
        if(!navMenu.classList.contains("show")) {
            navMenu.classList.add("show");
        }
    }
});

function removeNavmenu() {
    if(window.innerWidth < 992) {
        if(navMenu.classList.contains("show")) {
            navMenu.classList.remove("show");
        }
    }
}

navClose.addEventListener("click", ()=>{
    removeNavmenu();
});

navLinkItem.forEach((navLink)=>{
    navLink.addEventListener("click", ()=>{
        removeNavmenu();
    })
})