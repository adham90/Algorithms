// --- Directions
// Write a function that returns the number of vowels
// used in a string. Vowels are the characters 'a', 'e', 'i'
// 'o', and 'u'.
// --- Ex
// vowels("Hi There!") => 3

function vowels(str) {
  let count = 0
  for (const char of str.toLowerCase()) {
    if ('aeiou'.includes(char)) {
      count++
    }
  }
  console.log(count)
}

vowels('Hi There!')
