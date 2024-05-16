// https://leetcode.com/problems/count-and-say/description/

// 038. Count and Say
// Difficulty: Medium

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  // last level return 1
  if (n == 1) return "1";
  // recursive call
  let r = countAndSay(n - 1);
  // count = 0
  let c = 0,
    ans = "",
    currentNum = r[0];
  // loop r times
  for (let i = 0; i <= r.length; i++) {
    if (r[i] === currentNum) {
      // if num is same, increment count
      c++;
    } else if (currentNum) {
      // if number is diff, append count and initialize it to one for the new num. Initialize the new num as current
      ans = ans + c + currentNum;
      currentNum = r[i];
      c = 1;
    }
  }
  return ans;
};
