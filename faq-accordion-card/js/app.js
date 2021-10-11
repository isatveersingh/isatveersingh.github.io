const questions = document.querySelectorAll(".question");
const answer = document.querySelectorAll(".answer");
const toggleIcon = document.querySelectorAll(".toggle-icon");

questions.forEach((question, index)=>{
    question.addEventListener("click", ()=>{
        const questionActive = document.querySelector(".question.active");
        const answerShow = document.querySelector(".answer.show");
        const toggleIconActive = document.querySelector(".toggle-icon.active");

        questionActive.classList.remove("active");
        answerShow.classList.remove("show");
        toggleIconActive.classList.remove("active");

        question.classList.add("active");
        answer[index].classList.add("show");
        toggleIcon[index].classList.add("active");
    })
})