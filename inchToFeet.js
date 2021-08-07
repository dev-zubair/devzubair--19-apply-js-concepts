//---------------
//INCH TO FEET
//---------------

// ekta kaj jodi ekadhik bar kora lage tahole function declear kore korte hoy 
function inchesToFeet(inches){
    var feet = inches / 12;
return feet;
}
var myInches = 132;
var feet = inchesToFeet(myInches);
console.log('My Inches is', feet);

var dadiInches = 144;
var feet = dadiInches / 12;
console.log(feet);

var naniInches = 156;
var feet = naniInches / 12
console.log(feet);

//---------------
//MILE TO KELOMITER
//---------------
function mileToKilometer(miles){
    var km = miles * 1.60934;
    return km;
}
var marathon = mileToKilometer(26.2);
console.log("Marathon is ", marathon);