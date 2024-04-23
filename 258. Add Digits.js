// https://leetcode.com/problems/add-digits/description/

// 258. Add Digits
// Difficulty: Easy

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  let ans = 0;
  // Split the number by the digits place and add it to ans
  while (num > 0) {
    ans += num % 10;
    num = parseInt(num / 10);
  }
  // if ans is greater than 9, repeat the same process by a recursive call
  if (ans > 9) {
    return addDigits(ans);
  }
  //if ans is less than or equal to 9 return the ans
  return ans;
};
