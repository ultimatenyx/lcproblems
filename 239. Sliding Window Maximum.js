// https://leetcode.com/problems/sliding-window-maximum/description/

// 239. Sliding Window Maximum
// Difficulty: Hard

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let n = nums.length;
  let ans = [],
    w = [];
  for (let i = 0; i < n; i++) {
    // if window length greater than k or if w[0] is greater than window length. remove elements from start of w
    while (w.length >= k || (w.length != 0 && w[0] <= i - k)) {
      w.shift();
    }
    // use the last w element to check if nums[last]<curent nums. If yes, remove from end
    while (w.length != 0 && nums[w[w.length - 1]] < nums[i]) {
      w.pop();
    }
    // push the current element index to w
    w.push(i);
    // if(i>= window size) the answer is the first element.
    if (i >= k - 1) {
      ans.push(nums[w[0]]);
    }
  }
  return ans;
};
