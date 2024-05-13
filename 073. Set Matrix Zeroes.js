// https://leetcode.com/problems/set-matrix-zeroes/description/

// 73. Set Matrix Zeroes
// Difficulty: Medium

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let zeroes = [];
  // store all i,j for zero occurences
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == 0) {
        zeroes.push([i, j]);
      }
    }
  }
  // function to set an entire row as zero based on column
  function setRowZero(col) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][col] = 0;
    }
  }
  //   func to set an entire col as zero based on row
  function setColZero(row) {
    for (let i = 0; i < matrix[row].length; i++) {
      matrix[row][i] = 0;
    }
  }
  // for all zeroes, update rows and cols
  for (let i = 0; i < zeroes.length; i++) {
    setRowZero(zeroes[i][1]);
    setColZero(zeroes[i][0]);
  }
  return matrix;
};
