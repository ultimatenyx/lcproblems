// https://leetcode.com/problems/power-of-two/description/

// 231. Power of Two
// Difficulty: Easy

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  // base condition
  if (n == 1) return true;
  let i = 0,
    ans = 1;
  // as per the contraints -2^31 <= n <= 2^31 - 1 so we have to run this only 31 times
  while (i < 32 && ans < n) {
    ans = 1 << i;
    if (ans == n) return true;
    i++;
  }

  return false;
};
