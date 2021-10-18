// fetch all elements from html file
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");

let validate = ()=>{
    // Get value of all input fields
    let firstNameVal = firstName.value;
    let lastNameVal = lastName.value;
    let emailVal = email.value;
    let passwordVal = password.value;

    // if any input field is invalid then any Flag will be 0 and function returns false
    let fnameFlag = 0, lnameFlag = 0, emailFlag = 0, passwordFlag = 0;
    
    // To validate First Name 
    if(firstNameVal == ""){
        setError("fname-error");
        fnameFlag = 0;
    } else {
        removeError("fname-error");
        fnameFlag = 1;
    }
    
    // To validate Last Name
    if(lastNameVal == ""){
        setError("lname-error");
        lnameFlag = 0;
    } else {
        removeError("lname-error");
        lnameFlag = 1;
    }
    
    // To validate Email Field in correct format
    let correctWay = /^[a-z0-9_.-]+@[a-z]+\.[a-z]+$/;
    if(emailVal == "" || !correctWay.test(emailVal)){
        setError("email-error");
        emailFlag = 0;
    } else {
        removeError("email-error");
        emailFlag = 1;
    }
    

    // To validate password field and password must be 8 char long
    if(passwordVal == ""){
        setError("password-error");
        passwordFlag = 0;
    } else if(passwordVal.length < 8) {
        setError("password-error");
        document.querySelector(".error.password-error").innerHTML = "Password must be 8 char long";
        passwordFlag = 0;
    }
    else {
        removeError("password-error");
        passwordFlag = 1;
    }

    // If all input fields are valid then return true otherwise return false and form will not be submitted
    if(fnameFlag == lnameFlag == emailFlag == passwordFlag == 1){
        return true;
    } else {
        return false;
    }

}


// This function shows the error if input field is not valid 
// Pass error fiels class name as argument in funtion
function setError(clName){
    const errors = document.querySelectorAll(`.${clName}`);
    errors.forEach((item)=>{
        item.classList.add("active");
    })
}


// This function removes the error if error exists and input field id valid
// Pass error fiels class name as argument in funtion
function removeError(clName){
    const errors = document.querySelectorAll(`.${clName}`);
    errors.forEach((item)=>{
        if(item.classList.contains("active")){
            item.classList.remove("active");
        }
    })
}
