const number = 4;
const reminder = number % 2;
console.log(reminder == 0);             //2 diye vag korar por jodi vag ses 0 hoy tahole JOR and jodi 0 na hoy tahole BIJOR

//---------------
//is Even Funcrtion
//---------------
function isEven(number){
    if (number % 2 == 0){
        return true;
    }
    return false;
}
const myNumber = 1661;
const isMyNumberEven = isEven(myNumber);
console.log('Is my Number even', isMyNumberEven);

const herNumber = 1444;
const isHerNumberEven = isEven(herNumber);
console.log('Is her number Even ', isHerNumberEven);

//---------------
//is Odd Funcrtion
//---------------
function isOdd(number){
    if(number % 2 != 0){
        return true;
    }
    return false;
}
const zahraNumber = 1551;
const IsZahraNumberOdd = isOdd(zahraNumber);
console.log("Zahra's Number is Odd ", IsZahraNumberOdd);







//---------------
//I did this example
//---------------
function myJorNumber(evennumber){
    var jor = evennumber / 2;
    return jor;
}

var parulNumber = myJorNumber(7);
console.log("this is my new number ", parulNumber);