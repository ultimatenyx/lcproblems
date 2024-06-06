// https://leetcode.com/problems/contains-duplicate/description/

// 217. Contains Duplicate
// Difficulty: Easy

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  nums.sort();
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] == nums[i - 1]) return true;
  }
  return false;
};
