/* 
3! = 3 x 2 x 1
4! = 4 x 3 x 2 x 1
5! = 5 x 4 x 3 x 2 x 1
6! = 6 x 5 x 4 x 3 x 2 x 1
7! = 7 x 6 x 5 x 4 x 3 x 2 x 1
*/

//---------------
//FACTORIAL - FACTORIAL - এর মানে হলো বিন্যাস। যেমনঃ 3! এর মানে হলো 3 এর নিচে যা আছে সেগুলো গুণ করা। 
//---------------
// var factorial = 1;
// for(var i = 1; i <= 5; i++){
//     // console.log(i);
//     factorial = factorial * i
// }
// console.log(factorial);


let factorial1 = 1;
for(let i = 1; i <= 5; i++){
    factorial1 = factorial1 * i
}
console.log(factorial1);