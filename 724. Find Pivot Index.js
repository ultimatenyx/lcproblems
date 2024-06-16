// https://leetcode.com/problems/find-pivot-index/description/

// 724. Find Pivot Index
// Difficulty: Easy

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  // Going by the prefix sum method
  let prefix = [];
  prefix[0] = nums[0];
  let n = nums.length;
  // build the prefix sum array
  for (let i = 1; i < n; i++) {
    prefix[i] = nums[i] + prefix[i - 1];
  }
  // Edge case
  if (prefix[n - 1] - prefix[0] == 0) return 0;
  // Normal cases
  for (let i = 1; i < n - 1; i++) {
    if (prefix[i - 1] == prefix[n - 1] - prefix[i]) {
      return i;
    }
  }
  // Edge case
  if (prefix[n - 2] == 0) return n - 1;
  return -1;
};
