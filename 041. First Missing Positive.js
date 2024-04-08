// https://leetcode.com/problems/first-missing-positive/description/

// 41. First Missing Positive
// Difficulty: Hard

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  let n = nums.length;
  let flag = true;
  for (let i = 0; i < n; i++) {
    // Make all negative or 0 numbers greater than n so that they are not considered
    if (nums[i] <= 0 || nums[i] > n) {
      nums[i] = nums[i] + n + 2;
      if (nums[i] < 0) {
        nums[i] *= -1;
        nums[i] = nums[i] + n + 2;
      }
      continue;
    }
    flag = false;
  }
  // flag added to check if there is atleast 1 positive element in the array
  if (flag) return 1;
  let idx;
  for (let i = 0; i < n; i++) {
    idx = Math.abs(nums[i]) - 1;
    // skip all indexes greater than n
    if (idx > n) {
      continue;
    }
    // make all valid array elements negative
    nums[idx] = -1 * Math.abs(nums[idx]);
  }
  // find the first postive index as that is the one that is missing
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      //return the index+1
      return i + 1;
    }
  }
  // return n+1 if all array elems are negative
  return n + 1;
};
