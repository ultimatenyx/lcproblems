// https://leetcode.com/problems/sqrtx/description/

// 69. Sqrt(x)
// Difficulty: Easy

// Solution:
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  //initializing ans with 1
  let ans = 1;
  //Edge case if ans=0 or 1
  if (x < 2 && x >= 0) {
    return x;
  }
  // Starting loop from 2 since 2 is the first positive square root of 4
  for (let i = 2; i * i <= x; i++) {
    ans = i;
  }
  return ans;
};
