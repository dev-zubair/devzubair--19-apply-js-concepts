//---------------
//variable
//---------------
var time = "10:11 pm";          //string
var book = 14;                  //number
varmicColor = "white color"     //boolean

//---------------
//Array
//---------------
var partners = ['manik', 'towhid', 'nasim', 'ontu', 'pintu'];
var elementCount = partners.length              //length use kora hoy total element janar jonno
var ontuPosition = partners.indexOf('pintu');   // want to know pintu position
partners.push("johnny");                        //aaa a new value
partners.pop();                                 //delete a value
console.log(partners);


//---------------
//Conditionals
//---------------
if (booPrice < 120) {
        console.log('I will buy the book');
}
else{
    console.log("please give me a discount");
}

//---------------
//loop
//---------------
var i = 0;
while (i <= 17){
    console.log(i);
    i++;
}

for(i=0; i < 17; i++){
    console.log(i);
}

//---------------
//Function
//---------------
function isMoonUp(time){
    if(time > 19 && time <= 5){
    return true;
    }
    return false;
}

var moonStatus = isMoonUp(21);

//---------------
//LET CONST
//---------------
// value of variable could be change 
let price = 30;
price = 34;
price = 60;

// value of variable will not change 
const name = 'lal e lal mr. Helal';
console.log(name);