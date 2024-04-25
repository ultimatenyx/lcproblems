// https://leetcode.com/problems/next-greater-element-i/description/

// 496. Next Greater Element I
// Difficulty: Easy

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  // Edge case: if num1 and num2 are empty
  if (nums1.length == 0 || nums2.length == 0) return 0;
  // using a map and a stack
  let mp = new Map();
  let s = [];
  let n2 = nums2.length;
  // pushing last elem into stack
  s.push(nums2[n2 - 1]);
  // nothing greater than the last element on its right. so -1 in the map
  mp.set(nums2[n2 - 1], -1);
  // iterating from second last to 0
  for (let i = n2 - 2; i >= 0; i--) {
    let stacktop = s[s.length - 1];
    // if number is less than stack elem(last), update the same in map and push the new num into stack
    if (nums2[i] < stacktop) {
      mp.set(nums2[i], stacktop);
      s.push(nums2[i]);
      continue;
    }
    // while stack is not empty and last element is less than the current num, pop the last element from stack
    while (s.length > 0 && s[s.length - 1] < nums2[i]) {
      s.pop();
    }
    // if stack is empty, push the current num in stack and map -1 to its map
    if (s.length == 0) {
      s.push(nums2[i]);
      mp.set(nums2[i], -1);
    } else {
      // since stack is not empty, it means we found something greater in the stack so map it
      mp.set(nums2[i], s[s.length - 1]);
      s.push(nums2[i]);
    }
  }
  // now map is ready, iterate over num1 and return the corresponding array
  let ans = new Array(nums1.length);
  for (let i = 0; i < nums1.length; i++) {
    ans[i] = mp.get(nums1[i]);
  }
  return ans;
};
