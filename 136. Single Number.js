// https://leetcode.com/problems/single-number/description/

// 136. Single Number
// Difficulty: Easy

/**
 * Approach: XOR properties used.
 * Property 1 states that XOR of a number with itself is 0
 * Property 2 states that XOR of a number with 0 is the number itself
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let ans = nums[0];
  for (let i = 1; i < nums.length; i++) {
    //XORing all numbers in the array
    ans ^= nums[i];
  }
  return ans;
};
