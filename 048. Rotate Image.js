// https://leetcode.com/problems/rotate-image/description/

// 48. Rotate Image
// Difficulty: Medium

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  function swapme(i, j) {
    let temp = matrix[i][j];
    matrix[i][j] = matrix[j][i];
    matrix[j][i] = temp;
  }
  // first swapping diagonally
  for (let i = 0; i < m; i++) {
    for (let j = i + 1; j < n; j++) {
      swapme(i, j);
    }
  }
  //   then swapping horizontally
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n / 2; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][n - j - 1];
      matrix[i][n - j - 1] = temp;
    }
  }
  return matrix;
};
