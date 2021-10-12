const email = document.getElementById("email");
const error = document.querySelector(".error");
const form = document.querySelector(".form");
const errorImg = document.querySelector(".error-img");

form.addEventListener("submit", (evt)=>{
    let emailVal = email.value;
    if(emailVal == "" || emailVal.length < 8 || email.validity.typeMismatch){
        evt.preventDefault();
        error.classList.add("show");
        errorImg.classList.add("show");
    } else {
        if(error.classList.contains("show")){
            error.classList.remove("show");
        }

        if(errorImg.classList.contains("show")){
            errorImg.classList.remove("show");
        }
    }
})
