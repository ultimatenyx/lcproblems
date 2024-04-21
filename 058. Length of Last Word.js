// https://leetcode.com/problems/length-of-last-word/description/

// 58. Length of Last Word
// Difficulty: Easy

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  //flag to track space at end before any words start
  let flag = false;
  let n = s.length;
  let ans = 0;
  // iterating from end to start
  for (let i = n - 1; i >= 0; i--) {
    // continue if we are yet to encounter a word
    if (s[i] == " " && !flag) continue;
    // if the below condition is satisfied, we have encountered first word
    if ((s[i] >= "a" && s[i] <= "z") || (s[i] >= "A" && s[i] <= "Z")) {
      // switching the flag to true so that the first condition is no longer used
      flag = true;
      //   calculate the length of the word
      ans++;
    }
    // if we encounter space again, break and return the length
    if (s[i] == " ") {
      return ans;
    }
  }
  // if there is no space before the word, return the ans at the end of the loop anyways
  return ans;
};
