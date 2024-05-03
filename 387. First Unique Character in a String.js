// https://leetcode.com/problems/first-unique-character-in-a-string/description/

// 387. First Unique Character in a String
// Difficulty: Easy

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  // create a hashmap
  let mp = new Map();
  for (let i = 0; i < s.length; i++) {
    if (mp.has(s[i])) {
      mp.set(s[i], mp.get(s[i]) + 1);
    } else {
      mp.set(s[i], 1);
    }
  }
  // iterate and report first occurennce that only occurs once
  for (let i = 0; i < s.length; i++) {
    if (mp.get(s[i]) == 1) {
      return i;
    }
  }
  return -1;
};
