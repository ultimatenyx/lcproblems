// https://leetcode.com/problems/valid-palindrome/description/

// 125. Valid Palindrome
// Difficulty: Easy

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let start = 0,
    end = s.length - 1;
  s = s.toLowerCase();
  while (start < end) {
    while (
      !(
        (s[start] >= "a" && s[start] <= "z") ||
        (s[start] >= "0" && s[start] <= "9")
      ) &&
      start < end
    ) {
      start++;
    }
    while (
      !((s[end] >= "a" && s[end] <= "z") || (s[end] >= "0" && s[end] <= "9")) &&
      start < end
    ) {
      end--;
    }
    if (s[start] == s[end]) {
      start++;
      end--;
    } else {
      return false;
    }
  }
  return true;
};
