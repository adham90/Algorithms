// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not. Palindromes are strings that
// from the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
// palindrome("abba") === true
// palindrome("abcdefg") === false

function palindrome(str) {
  let reversed = str.split("").reverse().join("");

  return str === reversed;
}

console.log('abba: ', palindrome("abba"))
console.log('abcdefg: ', palindrome("abcdefg"))
