//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
  if(number % 2 == 0){
    console.log(number * 8)
} else {
    console.log(number * 9)
}
}

console.log(simpleMultiplication(10));
