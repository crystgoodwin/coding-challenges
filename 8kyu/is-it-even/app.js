//In this Kata we are passing a number (n) into a function. Your code will determine if the number passed is even (or not). The function needs to return either a true or false. Numbers may be positive or negative, integers or floats. Floats with decimal part non equal to zero are considered UNeven for this kata.

function testEven(n) {
   if((n % 2) === 0){
      return true;
   } else {
      return false;
   }
}
console.log(testEven(22));

//Alternate solution
function testIfEven(num) {
   return num % 2 === 0;
}

//Alternative solution
function testForEven(n1){
   return n1 % 2 === 0 ? true : false;
}