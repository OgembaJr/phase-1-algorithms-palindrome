function isPalindrome(word) {
  // Write your algorithm here
  const palindromeWord =  word.split("").reverse().join("");
  return word === palindromeWord
}
/* 
  Add your pseudocode here
*/

// set a variable to take in the word that is reversed 
// split the word so that it turns into an array
// reverse the array
// string the array by use of join method
// Do a comparison to the reversed word
// return true if they match and false otherwise

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
