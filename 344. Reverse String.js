// https://leetcode.com/problems/reverse-string/description/

// 344. Reverse String
// Difficulty: Easy

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  //temp variable for O(1) space
  let temp;
  //swap function
  function swapme(i, j) {
    temp = s[i];
    s[i] = s[j];
    s[j] = temp;
  }
  //loop n/2 times and replace first and last and so on
  for (let i = 0; i < s.length / 2; i++) {
    swapme(i, s.length - i - 1);
  }
  return s;
};
