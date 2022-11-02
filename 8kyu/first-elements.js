//Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.

// If n == 0 return an empty sequence []

var arr = ['a', 'b', 'c', 'd', 'e'];

first = (arr, n) => n == undefined ? arr.slice(0, 1) : arr.slice(0, n);

first(arr);

//alternate

function first(arr, n=1){
  return arr.slice(0, n);
}
