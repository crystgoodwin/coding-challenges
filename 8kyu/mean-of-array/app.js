//Return the average of the given array rounded down to its nearest integer.



function getAverage(marks){
  return Math.floor(marks.reduce((a, b) => (a + b)) / marks.length);
 }

 const average = getAverage([99, 55, 98, 47, 60]);
 console.log(average);