//Complete the solution so that it reverses the string passed into it

function solution(str){
  return str.split('').reverse().join('');
}

console.log(solution('Crystal'));

//Arrow function
const reverseStr = str1 => str1.split('').reverse().join('');
console.log(reverseStr('Crystal'));