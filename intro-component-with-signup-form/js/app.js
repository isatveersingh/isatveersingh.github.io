const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");

function validate(){
    if(firstName.value.length > 4){
        if(firstName.value == firstName.value.trim()){
            console.log("it is ok");
        } else {
            console.log("anem slho a");
        }
    } else {
        console.log("enter a vlaid name");
    }



    return false;
}