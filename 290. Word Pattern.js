// https://leetcode.com/problems/word-pattern/description/

// 290. Word Pattern
// Difficulty: Easy

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  // splitting the string into words array
  let words = [];
  s = s.trim();
  let temp = "";
  // splitting logic
  for (let i = 0; i < s.length; i++) {
    temp = "";
    while (s[i] != " " && i < s.length) {
      temp += s[i];
      i++;
    }
    words.push(temp);
  }
  // console.log(words);
  // map to map chars with words
  let mp = new Map();
  // reverse map to map words with chars
  let rmp = new Map();
  for (let i = 0; i < pattern.length; i++) {
    if (mp.has(pattern[i])) {
      if (mp.get(pattern[i]) != words[i]) {
        return false;
      }
    } else {
      mp.set(pattern[i], words[i]);
    }
    if (rmp.has(words[i])) {
      if (rmp.get(words[i]) != pattern[i]) {
        return false;
      }
    } else {
      rmp.set(words[i], pattern[i]);
    }
  }
  return true;
};
