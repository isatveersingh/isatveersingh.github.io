const correctWay = /^[a-z0-9_.-]+@[a-z]+\.[a-z]+$/;

const email = document.getElementById("email");

let validate = ()=>{
    let emailVal = email.value;
    if(emailVal == "" || !correctWay.test(emailVal)){
        setError();
        return false;
    } else {
        removeError();
        return true;
    }
}

function setError(){
    const errors = document.querySelectorAll(".error");
    errors.forEach((item)=>{
        item.classList.add("show");
    })
}

function removeError(){
    const errors = document.querySelectorAll(".error");
    errors.forEach((item)=>{
        if(item.classList.contains("show")){
            item.classList.remove("show");
        }
    })
}