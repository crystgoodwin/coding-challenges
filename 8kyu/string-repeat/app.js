//Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

function repeatStr(n, s){
   return s.repeat(n);
}

console.log(repeatStr(5, "Boo "));

//Arrow function

const repeatString = (x, y) => y.repeat(x);

console.log(repeatString(10, "Fun "));