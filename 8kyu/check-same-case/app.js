/* Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
*/

function sameCaseChar(n1, n2){
   if(n1.toUpperCase() === n1.toLowerCase() || n2.toUpperCase() === n2.toLowerCase()){
      return -1;
   } else if (n1 === n1.toLowerCase() && n2 === n2.toLowerCase() || n1 === n1.toUpperCase() && n2 === n2.toUpperCase()){
      return 1;
   } else {
      return 0;
   }
   

}
console.log("Example 1: " + sameCaseChar("H", "h"));

//Alternate solution

sameCase = (a, b) => /[a-z]/i.test(a) && /[a-z]/i.test(b) ? Number(/[a-z]/.test(a) == /[a-z]/.test(b)) : -1;

console.log("Example 2: " + sameCase("G", "1"));