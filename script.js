//get element
let Form = document.getElementById('formid');
let SelectForm = document.getElementById('reg');
let Submit = document.getElementById('submitbtn');
let Expression = document.getElementById('expression');
let Valid = document.getElementById('valid');
let resultVal = document.getElementById('result');
resultVal.className="d-none";


//let selectVal=SelectForm.option.length;
let tmp=false;
Submit.addEventListener('click', (e) => {
    let selectVal;
    selectVal = SelectForm.value;
    //console.log(selectVal);
    if (selectVal) {
        let promptVal = prompt("Enter Your Expression");
        switch (selectVal) {
            case "email":
                tmp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(promptVal);
                break;
            case "phone":
                tmp = /^(?:\+88|01)?(?:\d{11}|\d{13})$/.test(promptVal);
                break;
            case "post":
                tmp = /^([0-9]){4}$/.test(promptVal);
                break;
            default:
                tmp = false;

                break;
        }
        if (tmp) {
            resultVal.className="d-block";
            Valid.className = "text-danger font-weight-bold";
            Expression.innerText = promptVal;
            Valid.className = "text-success font-weight-bold";
            Valid.innerText = "Valid";
        }
        else{
            resultVal.className = "d-block";
            Valid.className = "text-success font-weight-bold";
            Expression.innerText = promptVal;
            Valid.className ="text-danger font-weight-bold";
            Valid.innerText = "Invalid";
        }
    }
    else{
        alert("Please Select One");
    }

    //console.log(promptVal);
    
    e.preventDefault();
});