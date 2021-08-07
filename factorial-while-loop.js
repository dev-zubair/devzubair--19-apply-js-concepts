//---------------
//FACTORIAL - While Loop
//---------------
function getFactorial(number){
    let factorial = 1;
    let i = 1;
    while(i <= number){
        factorial = factorial * i;
        i++;
    }
    return factorial;
}

const myFactorial = getFactorial(6);
console.log(myFactorial);


//---------------
//FACTORIAL - While Loop REVERSE
//---------------
function getReverseFactorial(number){
    let factorial = 1;
    let i = number;
        while(i >= 1){
        factorial = factorial * i;
        i--;
    }
    return factorial;
}

const reverseFactorial = getReverseFactorial(5);
console.log(reverseFactorial);


//---------------
//FACTORIAL - For Loop REVERSE
//---------------
function getReverseFactorial2(number){
    let factorial = 1;
    for (let i = number; i >= 1; i--){
        factorial = factorial * i;
    }
    return factorial;
}

const reverseFactorial = getReverseFactorial2(5);
console.log(reverseFactorial);