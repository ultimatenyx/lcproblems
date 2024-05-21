// https://leetcode.com/problems/valid-anagram/description/

// 242. Valid Anagram
// Difficulty: Easy

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // create a hashmap on the first string
  let mp = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!mp.has(s[i])) {
      mp.set(s[i], 1);
    } else {
      mp.set(s[i], mp.get(s[i]) + 1);
    }
  }
  // cross check elements of second string against the hashmap. Return false if not found
  for (let i = 0; i < t.length; i++) {
    if (!mp.has(t[i])) {
      return false;
    }
    let temp = mp.get(t[i]);
    if (temp == 1) {
      mp.delete(t[i]);
    } else {
      mp.set(t[i], temp - 1);
    }
  }
  // edge case where map still has elements left
  if (mp.size > 0) {
    return false;
  }
  return true;
};
