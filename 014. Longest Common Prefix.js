// https://leetcode.com/problems/longest-common-prefix/description/

// 014. Longest Common Prefix
// Difficulty: Easy

// Approach: sort the strings array lexicographically.
// The first and the last element will be worlds apart.
// compare the starting letters for both the elements

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  strs.sort();
  let ans = "";
  // taking the first word separate
  let first = strs[0],
    n = first.length;
  // taking the last word separate
  let last = strs[strs.length - 1];
  // running it for the length of the first word
  for (let i = 0; i < n; i++) {
    if (first[i] == last[i]) {
      ans += first[i];
      continue;
    }
    // break if it does not match
    break;
  }
  return ans;
};
