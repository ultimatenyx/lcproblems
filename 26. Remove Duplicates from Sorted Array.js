// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

// 26. Remove Duplicates from Sorted Array
// Difficulty: Easy

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  //k=1 bcoz there will atleast be 1 unique element in any array. initializing last to be the first element.
  let k = 1,
    last = nums[0];
  //running a loop from 1 to n-1
  for (let i = 1; i < nums.length; i++) {
    //if current element is same as first element, continue and do not do anything further
    if (nums[i] == last) {
      continue;
    }
    //if current element is not as the first element, update the new element in last. Add the new element to the front using k. Increment k
    last = nums[i];
    nums[k] = last;
    k++;
  }
  return k;
};
