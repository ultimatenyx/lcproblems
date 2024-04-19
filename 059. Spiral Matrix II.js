// https://leetcode.com/problems/spiral-matrix-ii/

// 59. Spiral Matrix II
// Difficulty: Medium

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let ans = new Array(n);
  //initializing a 2D array of nxn in JS
  for (let i = 0; i < n; i++) {
    let temp = new Array(n);
    ans[i] = temp;
  }
  //using a counter for a loop to run nxn times
  let count = n;
  //initializing cols and rows to 0
  let col = 0,
    row = 0;
  for (let i = 0; i <= n * n; i++) {
    //right
    for (let j = 0; j < count; j++) {
      //first we move right, so increasing col
      ans[row][col++] = i + 1;
      i++;
    }
    count--;
    col--; // to remove the extra increment of col beyond the required limit
    //down
    for (let j = 0; j < count; j++) {
      // going down, so increasing row
      ans[++row][col] = i + 1;
      i++;
    }

    //left
    for (let j = 0; j < count; j++) {
      // going left so keeping row constant and reducing col
      ans[row][--col] = i + 1;
      i++;
    }
    count--;
    //up
    for (let j = 0; j < count; j++) {
      // moving up so reducing row
      ans[--row][col] = i + 1;
      if (j !== count - 1) i++;
    }
    // col++ to offset after one spiral is completed
    col++;
  }
  return ans;
};
