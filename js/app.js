// For Toggle Button to show the skills 
const infoBtn = document.querySelectorAll(".info-btn");
const skillsInfo = document.querySelectorAll(".skills-info");

infoBtn.forEach((btn, index)=>{
    btn.addEventListener("click", ()=>{
        const btnActive = document.querySelector(".info-btn.active");
        const skillsInfoActive = document.querySelector(".skills-info.active");

        btnActive.classList.remove("active");
        btn.classList.add("active");

        skillsInfoActive.classList.remove("active");
        skillsInfo[index].classList.add("active");
    })
})