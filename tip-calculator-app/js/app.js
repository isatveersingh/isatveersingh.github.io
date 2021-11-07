const billAmountError = document.getElementById("amount-error");
const tipSelectBtn = document.querySelectorAll(".tip-btn");
const billAmount = document.getElementById("bill-amount");
const tipVal = document.querySelectorAll(".tip-val");
const numPeople = document.getElementById("num-people");
const numPeopleError = document.getElementById("people-error");
const customTip = document.getElementById("custom");


tipSelectBtn.forEach((btn, index)=>{
    btn.addEventListener("click", ()=>{

        if(customTip.value != "") {
            customTip.value = "";
        }

        let billVal = billAmount.value;
        if(billVal == "" || isNaN(billVal) || billVal <= 0){
            billAmountError.classList.add("show");
        } else {
            if(billAmountError.classList.contains("show")){
                billAmountError.classList.remove("show");
            }

            let numPeopleVal = numPeople.value;
            if(numPeopleVal == "" || isNaN(numPeopleVal) || numPeopleVal <= 0){
                numPeopleError.classList.add("show");
            } else {
                if(numPeopleError.classList.contains("show")){
                    numPeopleError.classList.remove("show");
                }

                let tipBtnActive = document.querySelector(".tip-btn.active");

                if (tipBtnActive != null) {
                    tipBtnActive.classList.remove("active");
                    btn.classList.add("active");
                } else {
                    btn.classList.add("active");
                }

                let tipValRatio = parseInt(tipVal[index].innerHTML);
                if(tipValRatio > 0) {
                    let tipAmount = (tipValRatio / 100) * Number(billVal);
                    let tipPerPerson = Number((tipAmount / numPeopleVal).toFixed(2));
                    let totalPerPerson = Number(((tipAmount + Number(billVal)) / numPeopleVal).toFixed(2));

                    document.getElementById("tip-per-person").innerHTML = `$${tipPerPerson}`;
                    document.getElementById("total-per-person").innerHTML = `$${totalPerPerson}`;
                }
            }

        }
    })
})


//For custom tip 
customTip.addEventListener("input", ()=>{
    let tipBtnActive = document.querySelector(".tip-btn.active");
    if (tipBtnActive != null) {
        tipBtnActive.classList.remove("active");
    }

    let customTipVal = customTip.value;
    if(customTipVal != "" && !isNaN(customTipVal) && customTipVal > 0){
        let billVal = billAmount.value;
        if(billVal == "" || isNaN(billVal) || billVal <= 0){
            billAmountError.classList.add("show");
        } else {
            if(billAmountError.classList.contains("show")){
                billAmountError.classList.remove("show");
            }
    
            let numPeopleVal = numPeople.value;
            if(numPeopleVal == "" || isNaN(numPeopleVal) || numPeopleVal <= 0){
                numPeopleError.classList.add("show");
            } else {
                if(numPeopleError.classList.contains("show")){
                    numPeopleError.classList.remove("show");
                }

                let tipValRatio = Number(customTipVal);
                if(tipValRatio > 0) {
                    let tipAmount = (tipValRatio / 100) * Number(billVal);
                    let tipPerPerson = Number((tipAmount / numPeopleVal).toFixed(2));
                    let totalPerPerson = Number(((tipAmount + Number(billVal)) / numPeopleVal).toFixed(2));
    
                    document.getElementById("tip-per-person").innerHTML = `$${tipPerPerson}`;
                    document.getElementById("total-per-person").innerHTML = `$${totalPerPerson}`;
                }
            }
    
        }
    }

})


// For Reset Button 
const reset = document.getElementById("reset");
reset.addEventListener("click", ()=>{
    billAmount.value = "";
    numPeople.value = "";
    let tipBtnActive = document.querySelector(".tip-btn.active");
    if (tipBtnActive != null) {
        tipBtnActive.classList.remove("active");
    }
    document.getElementById("tip-per-person").innerHTML = `$0.00`;
    document.getElementById("total-per-person").innerHTML = `$0.00`;
})