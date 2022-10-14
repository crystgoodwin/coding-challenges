//Get the sum of all elements in two arrays

function arrayPlusArray(arr1, arr2) {
   let sum1 = arr1.reduce((accumulator, value) => {
      return accumulator + value;
   }, 0);
   let sum2 = arr2.reduce((accumulator, value) => {
      return accumulator + value;
   });
   console.log(sum1 + sum2);
 }
 arrayPlusArray([5, 3, 40, 6], [10, 20, 30]);

 //Alternate solution
 function arrPlusArr(arrOne, arrTwo) {
   return arrOne.concat(arrTwo).reduce((acc, cur) => acc + cur);
 }
 console.log(arrPlusArr([5, 3, 40, 6], [10, 20, 30]));