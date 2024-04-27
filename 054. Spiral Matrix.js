// https://leetcode.com/problems/spiral-matrix/description/

// 54. Spiral Matrix
// Difficulty: Medium

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  // Starting with row 0 and col 0
  let row = 0,
    col = 0;
  // count of m and n to be iterated
  let mc = m - 1,
    nc = n;
  let ans = [];
  for (let i = 0; i <= m * n; i++) {
    //right
    for (let j = 0; j < nc && i <= m * n; j++) {
      ans.push(matrix[row][col++]);
      i++;
    }
    // balancing the last col increment at the end
    col--;
    // increase row by one to meet start condition for next iteration
    row++;
    // break if we have the answer, no need to proceed further
    if (ans.length == m * n) break;

    //down
    for (let j = 0; j < mc && i <= m * n; j++) {
      ans.push(matrix[row++][col]);
      i++;
    }
    // balancing the last row increment at the end
    row--;
    // one less iteration for n
    nc--;
    // offsetting the start point
    col--;
    // break if we have the answer, no need to proceed further
    if (ans.length == m * n) break;

    //left
    for (let j = 0; j < nc && i <= m * n; j++) {
      ans.push(matrix[row][col--]);
      i++;
    }
    col++;
    mc--;
    row--;
    if (ans.length == m * n) break;
    //up
    for (let j = 0; j < mc && i <= m * n; j++) {
      ans.push(matrix[row--][col]);
      i++;
    }
    row++;
    col++;
    nc--;
    mc--;
    //offset the last extra i
    i--;
    if (ans.length == m * n) break;
  }
  return ans;
};
