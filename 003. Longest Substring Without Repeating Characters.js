// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

// 3. Longest Substring Without Repeating Characters
// Difficulty: Medium

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  //ans
  let maxlen = 0;
  //map to track
  let mp = new Map();
  let j = 0;
  //looping over the string
  for (let i = 0; i < s.length; i++) {
    if (!mp.has(s[i])) {
      //if map does not have the string, initialize it with 1 since we found it for the first time
      mp.set(s[i], 1);
    } else {
      // Since we found it again, increment the frequency
      mp.set(s[i], mp.get(s[i]) + 1);
    }
    //if a string occurs again, the frequency will become 2.
    //count all elems before s[i] using j and decrement the frequency of preceding elements by 1
    while (mp.get(s[i]) > 1) {
      mp.set(s[j], mp.get(s[j]) - 1);
      j++;
    }
    //maxlen = ith letter - j elements+1
    maxlen = Math.max(maxlen, i - j + 1);
  }
  return maxlen;
};
