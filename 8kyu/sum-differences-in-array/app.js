//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

function sumOfDifferences(arr){
   if(arr.length <= 1)
   return 0;

   return Math.max(...arr) - Math.min(...arr);
}

console.log(sumOfDifferences([40, 22, "10", 100, "45"]));