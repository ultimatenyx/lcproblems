// https://leetcode.com/problems/relative-ranks/description/?envType=daily-question&envId=2024-05-08

// 506. Relative Ranks
// Difficulty: Easy

/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  // store indexes in a map
  let mp = new Map();
  for (let i = 0; i < score.length; i++) {
    mp.set(score[i], i);
  }
  // sort by score so we know positions
  score.sort(function (a, b) {
    return b - a;
  });
  let ans = new Array(score.length);
  // filling by brute force
  ans[mp.get(score[0])] = "Gold Medal";
  ans[mp.get(score[1])] = "Silver Medal";
  ans[mp.get(score[2])] = "Bronze Medal";
  // numbers for the rest
  for (let i = 3; i < score.length; i++) {
    ans[mp.get(score[i])] = (i + 1).toString();
  }
  return ans;
};
