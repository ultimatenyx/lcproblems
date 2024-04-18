// https://leetcode.com/problems/zigzag-conversion/description/

// 6. Zigzag Conversion
// Difficulty: Medium

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

/***
 * Intuition: Using a 2D array to store data in the format needed and then reading it to output
 */
var convert = function (s, numRows) {
  // ans is my 2D array for storing the format temprorarily
  let ans = new Array();
  // special logic for initializing 2D array or else javascript replicates the same object
  for (let i = 0; i < numRows; i++) {
    let temp = new Array();
    ans.push(temp);
  }
  // iterating over the string
  for (let i = 0; i < s.length; i++) {
    // first fill rowwise. i<s.length condition to prevent overflow
    for (let k = 0; k < numRows && i < s.length; k++) {
      ans[k].push(s[i]);
      // increment i as we push each letter
      i++;
    }
    // so as per the pattern, the first and last row is not needed when we move diagnally upwards. so ignoring them in the loop
    for (let k = numRows - 2; k > 0 && i < s.length; k--) {
      ans[k].push(s[i]);
      i++;
    }
    // this is to balance out the last overflow
    i--;
  }
  // create an ans string
  let tempans = "";
  // iterate the old fashioned way. rowwise and then column wise in each row. Append te letters and voila!
  for (let i = 0; i < ans.length; i++) {
    for (let j = 0; j < ans[i].length; j++) {
      tempans += ans[i][j];
    }
  }
  return tempans;
};
