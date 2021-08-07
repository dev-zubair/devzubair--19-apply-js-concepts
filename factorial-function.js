//---------------
//FACTORIAL
//---------------
let factorial = 1
for (i = 1; i <= 5; i++){
    factorial = factorial * i;
}
console.log(factorial);


//---------------
//FACTORIAL - যদি Function  এর মধ্যে লিখতে চাই তাহলে এইভাবে লিখতে হবে। 
//---------------

function getFactorial(number){
    let factorial = 1;
    for(let i = 1; i <= number; i++){
        factorial = factorial * i;
    }
    return factorial ;
}

var firstFactorial = getFactorial(5);
console.log('My 1st factorial is', firstFactorial);

var secondFactorial = getFactorial(9);
console.log('My second factorial is', secondFactorial);