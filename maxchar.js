// --- Directions
// Given a string, return thecharacter that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let charMap = {}
  let max = 0
  let maxChar = ''

  for (let char of str) {
    if (!charMap[char]) {
      charMap[char] = 0
    }

    charMap[char] += 1
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char]
      maxChar = char
    }
  }

  return console.log(maxChar, ": ", max)
}

maxChar("abcccccd")
