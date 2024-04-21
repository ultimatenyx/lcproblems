// https://leetcode.com/problems/integer-to-roman/

// 12. Integer to Roman
// Difficulty: Medium

// Intuition: Roman numbers are going from left to right
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let symbols = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  let ans = "";
  for (let i = 0; i < values.length; i++) {
    // Subtract number till num becomes smaller
    while (num >= values[i]) {
      num -= values[i];
      ans += symbols[i];
    }
  }
  return ans;
};
