const share = document.querySelector(".share");
const tooltip = document.querySelector(".tooltip");
const cardText = document.querySelector(".card-text");
const shareIcons = document.querySelector(".share-icons");

if(window.innerWidth > 768){
    share.addEventListener("click", ()=>{
        tooltip.classList.toggle("show");
    })
    
    cardText.addEventListener("mouseleave", ()=>{
        if(tooltip.classList.contains("show")){
            tooltip.classList.remove("show");
        }
    })
}

if(window.innerWidth <= 768){
    share.addEventListener("click", ()=>{
        shareIcons.classList.toggle("show");
    })

    shareIcons.addEventListener("mouseleave", ()=>{
        if(shareIcons.classList.contains("show")){
            shareIcons.classList.remove("show");
        }
    })
}

