// --- Directions
// Check to see if two provided strings are anagrams of eachother,
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only onsider characters, not spaces or
// punctuation, Consider capital letters to be the same as lower case
// --- Examples
// anagrams('rail safety', 'fairy tales') => true
// anagrams('RAIL SAFETY!', 'fairy tales') => true
// anagrams('Hi there', 'Bye there') => false

function anagrams(strA, strB) {
  console.log(cleanString(strA) === cleanString(strB))
}

function cleanString(string) {
  return string.replace(/[^\w]/g, "")
               .toLowerCase()
               .split('')
               .sort()
               .join('');
}

anagrams('rail safety', 'fairy tales')
anagrams('RAIL SAFETY!', 'fairy tales')
anagrams('Hi there', 'Bye there')
