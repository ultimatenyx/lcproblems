// https://leetcode.com/problems/intersection-of-two-arrays-ii/description/?envType=daily-question&envId=2024-07-02

// 350. Intersection of Two Arrays II
// Difficulty: Easy

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let n1 = nums1.length;
  let n2 = nums2.length;
  // sort the numbers
  nums1.sort(function (a, b) {
    return a - b;
  });
  nums2.sort(function (a, b) {
    return a - b;
  });
  let m = 0,
    n = 0,
    ans = [];
  // using 2 pointers
  while (m < n1 && n < n2) {
    if (nums1[m] == nums2[n]) {
      ans.push(nums1[m]);
      m++;
      n++;
    } else if (nums1[m] < nums2[n]) {
      m++;
    } else if (nums1[m] > nums2[n]) {
      n++;
    }
  }
  return ans;
};
