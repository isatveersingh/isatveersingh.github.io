const revealOnScroll = document.querySelectorAll(".reveal-on-scroll");
const revealFromSide = document.querySelectorAll(".reveal-from-side");
window.addEventListener("scroll", ()=>{
    revealOnScroll.forEach((revealEle, revealIndex)=>{
        if(window.scrollY + window.innerHeight > revealEle.offsetTop + revealEle.offsetHeight + 100){
            // revealEle.style.backgroundColor = "red";
            revealEle.style.animation = `reveal 0.5s linear forwards`;
        }
    })

    revealFromSide.forEach((revealSide, revealSideIndex)=>{
        if(window.scrollY + window.innerHeight > revealSide.offsetTop + revealSide.offsetHeight) {
            if(revealSideIndex % 2 == 0) {
                revealSide.style.animation = `revealfromright 0.5s linear forwards`;
            } else {
                revealSide.style.animation = `revealfromleft 0.5s linear forwards`;
            }
        }
    })
})