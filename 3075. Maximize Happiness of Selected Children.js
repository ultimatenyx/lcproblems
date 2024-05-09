// https://leetcode.com/problems/maximize-happiness-of-selected-children/description/?envType=daily-question&envId=2024-05-09

// 3075. Maximize Happiness of Selected Children
// Difficulty: Medium

/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function (happiness, k) {
  // sort in desc so as to get max happiness
  happiness.sort(function (a, b) {
    return b - a;
  });
  let maxsum = 0,
    tmp;
  // selecting k children with max happiness
  for (let i = 0; i < k; i++) {
    tmp = happiness[i] - i;
    if (tmp < 0) tmp = 0;
    maxsum += tmp;
  }
  return maxsum;
};
