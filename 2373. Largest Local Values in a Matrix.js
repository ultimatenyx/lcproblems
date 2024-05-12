// https://leetcode.com/problems/largest-local-values-in-a-matrix/description/?envType=daily-question&envId=2024-05-12

// 2373. Largest Local Values in a Matrix
// Difficulty: Easy

/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
  const n = grid.length;
  const ans = [];
  let tempRow = [],
    temp = 0;
  // loop from 1 to n-2
  for (let i = 1; i < n - 1; i++) {
    tempRow = [];
    // loop from 1 to n-2
    for (let j = 1; j < n - 1; j++) {
      temp = 0;
      // loop from -1 to +1 for i and j to find max since we check for 3x3
      for (let k = i - 1; k <= i + 1; k++) {
        for (let l = j - 1; l <= j + 1; l++) {
          temp = Math.max(temp, grid[k][l]);
        }
      }
      tempRow.push(temp);
    }
    ans.push(tempRow);
  }
  return ans;
};
