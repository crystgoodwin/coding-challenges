//write a function that takes a String and returns an Array/list with the length of each word added to each element .

//Note: String will have at least one element; words will always be separated by a space.

let str = 'apple ban';

function addLength(str) {
  return str.split(" ").map(s => `${s} ${s.length}`);
}

addLength('apple ban');