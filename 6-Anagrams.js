// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('coding money', 'money coding') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function charMapGenerator(str) {
  let charMap = {};
  str = str.toLowerCase().replace(/[\W]/g, "");
  for (let char of str) {
    if (charMap[char]) {
      charMap[char] = charMap[char] + 1;
    } else {
      charMap[char] = 1;
    }
  }
  return charMap;
}

function anagrams(string1, string2) {
  const str1CharMap = charMapGenerator(string1);
  const str2CharMap = charMapGenerator(string2);

  if (Object.keys(str1CharMap).length !== Object.keys(str2CharMap).length) return false;

  for (let key in str1CharMap) {
    if (str1CharMap[key] !== str2CharMap[key]) return false;
  }

  return true;
}

console.log(anagrams('Hi there', 'Bye there'));
