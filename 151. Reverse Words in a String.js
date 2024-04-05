// https://leetcode.com/problems/reverse-words-in-a-string/description/

// 151. Reverse Words in a String
// Difficulty: Medium

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  //storing ans as a separate string. and initiaing a temp stack
  let ans = "",
    stack = [];
  let n = s.length;
  // Moving from last to start
  for (let i = n - 1; i >= 0; i--) {
    // if char is empty, check if stack is full and pop the stack and append to ans string
    if (s[i] == " ") {
      if (stack.length > 0) {
        while (stack.length > 0) {
          ans += stack.pop();
        }
        ans += " ";
      }
      continue;
    }
    //if char is not a space, take the entire word and insert in stack in reverse
    while (s[i] != " " && i >= 0) {
      stack.push(s[i]);
      i--;
      // balance hack. Not the best way but it works
      if (s[i] == " ") {
        i++;
        break;
      }
    }
  }
  // on the off case, if anything is left out in the stack.
  if (stack.length > 0) {
    while (stack.length > 0) {
      ans += stack.pop();
    }
  }
  return ans.trim();
};
