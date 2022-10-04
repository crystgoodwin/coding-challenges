//Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?

function greet(name){
   return `Hello, ${name} how are you today?`;
}

console.log(greet('Nevada'));

//Using an arrow function

const greeting = fname => `Hello, ${fname} how are you doing today?`;

console.log(greeting('Kaya'));