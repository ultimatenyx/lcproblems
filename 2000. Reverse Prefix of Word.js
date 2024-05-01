// https://leetcode.com/problems/reverse-prefix-of-word/description/?envType=daily-question&envId=2024-05-01

// 2000. Reverse Prefix of Word
// Difficulty: Easy

/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  let i = 0;
  let ans = "";
  // run a loop till we find the char or atleast till the entire word is parsed if the char is not found
  while (i < word.length && word[i] != ch) {
    ans = word[i] + ans;
    i++;
  }
  // this condition implies that we have parsed the entire word but there was no char ch that we were looking for. Return the word as it is
  if (i == word.length) {
    return word;
  }
  // in the first loop, we exited when we found the char ch. Now appending the char ch since i<word.length
  ans = word[i] + ans;
  i++;
  // append the other chars as they are and not in reverse
  while (i < word.length) {
    ans += word[i];
    i++;
  }
  // return the ans
  return ans;
};
