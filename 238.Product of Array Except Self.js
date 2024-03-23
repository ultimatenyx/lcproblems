// https://leetcode.com/problems/product-of-array-except-self/description/

// 238. Product of Array Except Self
// Difficulty: Medium

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let n = nums.length;
  //creating an array of elements with product to the left of the array
  let lp = new Array(n).fill(1);
  //creating an array of elements with product to the right of the array
  let rp = new Array(n).fill(1);
  //populating the arrays
  for (let i = 1; i < n; i++) {
    lp[i] = lp[i - 1] * nums[i - 1];
  }
  for (let i = n - 2; i >= 0; i--) {
    rp[i] = rp[i + 1] * nums[i + 1];
  }
  let ans = new Array(n);
  //multiplying left and right
  for (let i = 0; i < n; i++) {
    ans[i] = lp[i] * rp[i];
  }
  return ans;
};
