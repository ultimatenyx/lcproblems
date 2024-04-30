// https://leetcode.com/problems/guess-number-higher-or-lower/description/

// 374. Guess Number Higher or Lower
// Difficulty: Easy

// Intuition: Plain old Binary search

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  // function to calculate mid
  function getMid(s, e) {
    return parseInt((s + e) / 2);
  }
  let start = 1,
    end = n;
  let mid = getMid(start, end);
  let temp = guess(mid);
  while (temp != 0) {
    if (temp == -1) {
      end = mid - 1;
      mid = getMid(start, end);
      temp = guess(mid);
    }
    if (temp == 1) {
      start = mid + 1;
      mid = getMid(start, end);
      temp = guess(mid);
    }
  }
  return mid;
};
