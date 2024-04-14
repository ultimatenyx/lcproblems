// https://leetcode.com/problems/majority-element/description/

// 169. Majority Element
// Difficulty: Easy

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // Using a hashmap to track frequency
  let mp = new Map();
  let n = nums.length;
  // Handling edge case
  if (n == 1) return nums[0];
  for (let i = 0; i < n; i++) {
    if (!mp.has(nums[i])) {
      mp.set(nums[i], 1);
    } else {
      let m = mp.get(nums[i]);
      mp.set(nums[i], m + 1);
      // return the elem if frequency becomes greater than n/2
      if (m + 1 > n / 2) {
        return nums[i];
      }
    }
  }
};
