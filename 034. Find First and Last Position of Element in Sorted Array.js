// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/

// 034. Find First and Last Position of Element in Sorted Array
// Difficulty: Medium

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let notfound = [-1, -1];
  let n = nums.length;
  // edge case
  if (n == 0) return notfound;

  let start = 0,
    end = n - 1,
    mid,
    found = -1;
  // standard binary search to find element
  while (start <= end) {
    mid = parseInt((start + end) / 2);
    if (nums[mid] == target) {
      found = mid;
      break;
    } else if (nums[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  if (found == -1) {
    return notfound;
  }
  // normal iterations to check how many before are the same as target on left side
  start = found;
  while (nums[start] == target) {
    start--;
  }
  // offset for the extra start--
  start++;
  // same towards right side
  end = found;
  while (nums[end] == target) {
    end++;
  }
  // offset for the extra end++
  end--;

  return [start, end];
};
