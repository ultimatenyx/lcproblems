// https://leetcode.com/problems/excel-sheet-column-title/description/

// 168. Excel Sheet Column Title
// Difficulty: Easy

/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let chars = [];
  // map to refer to
  for (let i = 0; i < 26; i++) {
    chars[i] = String.fromCharCode("A".charCodeAt(0) + i);
  }
  let ans = "";
  while (columnNumber > 0) {
    let temp = columnNumber % 26;
    // difference of -1 after every 26 chars
    if (temp == 0) columnNumber -= 1;

    columnNumber = parseInt(columnNumber / 26);
    ans += chars[(26 + temp - 1) % 26];
  }
  return ans.split("").reverse().join("");
};
