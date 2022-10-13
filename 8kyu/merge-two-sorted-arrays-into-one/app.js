/* You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result. */

function mergeArrays(arr1, arr2) {
  let arr3 = arr1.concat(arr2);
  let arr4 = [...new Set(arr3)].sort((a, b) => a - b);
  return arr4;
}

console.log(mergeArrays([4, 7, 33, 94, 0, 5], [9, 22, 54, 1, 4, 15]));

//Alternate solution
function mergArr(x, y){
   return [...new Set(x.concat(y))].sort((x, y) => x - y);
}

console.log(mergArr([4, 7, 33, 94, 0, 5], [9, 22, 54, 1, 4, 15]));

// const arr1 = [4, 7, 33, 94, 0, 5];
// const arr2 = [9, 22, 54, 1, 4, 15];
// const arr3 = arr1.concat(arr2);
// const arr4 = [...new Set(arr3)].sort((a, b) => a - b);

// console.log(arr4);


