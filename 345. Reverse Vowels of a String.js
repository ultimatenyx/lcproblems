// https://leetcode.com/problems/reverse-vowels-of-a-string/description/

// 345. Reverse Vowels of a String
// Difficulty: Easy

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let stack = new Array();
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "a":
      case "A":
      case "e":
      case "E":
      case "i":
      case "I":
      case "o":
      case "O":
      case "u":
      case "U":
        stack.push(s[i]);
        break;
      default:
        break;
    }
  }
  let ans = "";
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "a":
      case "A":
      case "e":
      case "E":
      case "i":
      case "I":
      case "o":
      case "O":
      case "u":
      case "U":
        ans += stack.pop();
        break;
      default:
        ans += s[i];
        break;
    }
  }
  return ans;
};
