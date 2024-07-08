function maxChars(string) {
  let charMap = {};
  let max = 0;
  let maxChar = "";

  for (let char of string) {
    if (charMap[char]) {
      charMap[char] += 1;
    } else {
      charMap[char] = 1;
    }
  }

  for (let key in charMap) {
    if (charMap[key] > max) {
      (max = charMap[key]), (maxChar = key);
    }
  }

  return maxChar;
}

console.log(maxChars("abcccccccd"));