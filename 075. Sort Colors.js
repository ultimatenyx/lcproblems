﻿// https://leetcode.com/problems/sort-colors/description/?envType=daily-question&envId=2024-06-12

// 075. Sort Colors
// Difficulty: Medium

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  // Using bubble sort
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }
  }
  return nums;
};
