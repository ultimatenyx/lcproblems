// https://leetcode.com/problems/height-checker/description/?envType=daily-question&envId=2024-06-10

// 1051. Height Checker
// Difficulty: Easy

/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  // creating a copy of the heights array
  let sortedheights = [...heights];
  // sorting the newly prepared copy array
  sortedheights.sort(function (a, b) {
    return a - b;
  });
  let count = 0;
  for (let i = 0; i < heights.length; i++) {
    // compare and count
    if (sortedheights[i] != heights[i]) {
      count++;
    }
  }
  return count;
};
