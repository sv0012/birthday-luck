const dateOfBirth = document.querySelector('#date-of-birth');
const luckyNumber = document.querySelector('#lucky-number');
const checkButton = document.querySelector('#check-btn');
const answer = document.querySelector('#answer');

checkButton.addEventListener('click',function calculateLuck(){
    const dateValue =  dateOfBirth.value;
    const checkNumber = luckyNumber.value;
    const sum = calculateSum(dateValue);
    if(dateValue && checkNumber){
        if(sum % checkNumber === 0){
        
            answer.innerText = "Hey!!!"+checkNumber+" is lucky!!!😍😍😍"
        }
        else {
            answer.innerText = "Sorry Bud!!!"+checkNumber+" isn't lucky!!!🥲🥲🥲"
        }
    }
    else {
        answer.innerText = "Hey! Please enter both the values!"
    }
    

});


function calculateSum(dateValue) {
    const number = dateValue.replaceAll("-", "");
    let sum = 0;
    for(let i = 0; i < number.length; i++) {
        sum = sum + Number(number[i]);
    }
    return sum;
}