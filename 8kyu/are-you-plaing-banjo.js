//Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

function areYouPlayingBanjo(name) {
   if (name.charAt(0) === 'R' || 'r') {
    return `${name} plays banjo`;
   } else {
    return `${name} does not play banjo`
   }
  return name;
}

console.log(areYouPlayingBanjo('Robert'));
