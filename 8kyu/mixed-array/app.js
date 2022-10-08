//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

function sumMix(x){
   let sum = 0; 
   x.map(function(element){
      sum += parseInt(element);
   });
   return sum;
}

console.log(sumMix([1, 5, "80", 100, "9"]));