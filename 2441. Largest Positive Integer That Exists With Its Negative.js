// https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/description/?envType=daily-question&envId=2024-05-02

// 2441. Largest Positive Integer That Exists With Its Negative
// Difficulty: Easy

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
  let n = nums.length;
  let k = 0;
  // sort the nums in asc
  nums.sort(function (a, b) {
    return a - b;
  });

  //   run the loop from end to start or till nums are positive
  for (let i = n - 1; i >= 0 && nums[i] > 0; i--) {
    // run the loop till nums are negative or nums[i]>=nums[k]
    while (-1 * nums[i] >= nums[k] && nums[k] < 0) {
      // Condition we are looking for met. Return ans;
      if (-1 * nums[i] == nums[k]) return nums[i];
      k++;
    }
  }
  return -1;
};
