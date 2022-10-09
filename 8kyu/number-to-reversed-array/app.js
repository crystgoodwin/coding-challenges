//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitized(num) {
   return String(num).split('').map(Number).reverse();
}
console.log(digitized(854725));


//Alternate solution
const digitize = (n) => n.toString(10).split('').map(Number).reverse();
 console.log(digitize(23587));

