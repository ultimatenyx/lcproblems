// https://leetcode.com/problems/sum-of-all-subset-xor-totals/description/?envType=daily-question&envId=2024-05-20

// 1863. Sum of All Subset XOR Totals
// Difficulty: Easy

/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum |= nums[i];
  }
  return sum << (nums.length - 1);
};
