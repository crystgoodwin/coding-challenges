//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them. The output should be two capital letters with a dot separating them.

//Initial attempt
function abbrevName(name) {
  return name.charAt(0).toUpperCase() + '.';

}

console.log(abbrevName('crystal goodwin'));

//Final solution
function abbrName(name1) {
  return name1.toUpperCase().split(' ').map(x => x[0]).join('.');
}

console.log(abbrName('crystal goodwin'));