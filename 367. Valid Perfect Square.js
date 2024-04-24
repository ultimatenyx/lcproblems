// https://leetcode.com/problems/valid-perfect-square/description/

// 367. Valid Perfect Square
// Difficulty: Easy

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  for (let i = 1; i * i <= num; i++) {
    if (i * i == num) return true;
  }
  return false;
};
