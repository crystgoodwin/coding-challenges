//build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

function findMultiples(integer, limit) {
  return Array.from({length: parseInt(limit / integer)}, (_, index) => (index + 1) * integer)
}

console.log(findMultiples(2, 6));

//alternate solution
function findMulti(int, limit) {
  let result = [];

  for (let i = int; i <= limit; i += int) {
    result.push(i);
  }
  return result;
}

console.log(findMulti(2, 6));