// https://leetcode.com/problems/count-number-of-nice-subarrays/description/?envType=daily-question&envId=2024-06-22

// 1248. Count Number of Nice Subarrays
// Difficulty: Medium

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
  let n = nums.length;
  let count = new Array(n + 1).fill(0);
  count[0] = 1;
  let ans = 0,
    j = 0;
  for (let i = 0; i < n; i++) {
    // if odd add 1
    j += nums[i] & 1;
    // if j<=k
    if (j - k >= 0) {
      // add count of j-k to the ans
      ans += count[j - k];
    }
    // increase count of j like prefix sum
    count[j]++;
  }
  return ans;
};
