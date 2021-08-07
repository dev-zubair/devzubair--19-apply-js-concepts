/* 
1! = 1                                         1! = 1
2! = 2 x 1                                     2! = 2 x 1!
3! = 3 x 2 x 1                                 3! = 3 x 2!
4! = 4 x 3 x 2 x 1                             4! = 4 x 3!
5! = 5 x 4 x 3 x 2 x 1                         5! = 5 x 4!
6! = 6 x 5 x 4 x 3 x 2 x 1                     6! = 6 x 5!
7! = 7 x 6 x 5 x 4 x 3 x 2 x 1                 7! = 7 x 6!
n! - n * (n-1)!

Example -   n এর মান যদি 7 বসাই তাহলে, 7! = 7 * (7-1)!
            n এর মান যদি 6 বসাই তাহলে, 6! = 6 * (6-1)!
            n এর মান যদি 5 বসাই তাহলে, 5! = 5 * (5-1)!
*/

function factorial(n){
    if (n==1){
        return 1;
    }
    return n * factorial(n-1);
}
const myFactorial = factorial (5);
console.log(myFactorial);