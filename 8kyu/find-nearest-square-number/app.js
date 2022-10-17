//Find the nearest square number of a positive integer.

const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2);

console.log(nearestSq(117));

//Alternate solution
function nearestSquare(num){
   return Math.round(num**0.5)**2
}
console.log(nearestSquare(117));