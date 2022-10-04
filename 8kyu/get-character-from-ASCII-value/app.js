//Write a function get_char()/getChar() which takes a number and returns the corresponding ASCII char for that value

const getChar = String.fromCharCode;

console.log(getChar(560));

//Alternate solution
let get_Char = c => String.fromCharCode(c);

console.log(get_Char(71));