// https://leetcode.com/problems/ransom-note/

// 383. Ransom Note
// Difficulty: Easy

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  // Solving using 2 hashmaps
  let r = new Map();
  let m = new Map();
  // populate magazine hashmap
  for (let i = 0; i < magazine.length; i++) {
    if (m.has(magazine[i])) {
      m.set(magazine[i], m.get(magazine[i]) + 1);
    } else {
      m.set(magazine[i], 1);
    }
  }
  // populate ransomNote hashmap
  for (let i = 0; i < ransomNote.length; i++) {
    if (r.has(ransomNote[i])) {
      let rr = r.get(ransomNote[i]);
      // if ransomeNote has more letters than the magazine, return false
      if (rr >= m.get(ransomNote[i])) {
        return false;
      }
      r.set(ransomNote[i], rr + 1);
    } else {
      // the magazine hashmap is completed before. If the ransomNote has letters not present in magazine then return false;
      if (!m.has(ransomNote[i])) return false;
      r.set(ransomNote[i], 1);
    }
  }
  // All good so far, return true
  return true;
};
