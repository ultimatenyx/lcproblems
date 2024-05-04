// https://leetcode.com/problems/boats-to-save-people/description/?envType=daily-question&envId=2024-05-04

// 881. Boats to Save People
// Difficulty: Medium

/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
  // first sort the people
  people.sort(function (a, b) {
    return a - b;
  });
  let boats = 0;
  let i = 0,
    j = people.length - 1;
  // using 2 pointers
  while (i <= j) {
    // if sum from start and end(i & j) is less than limit, increase from left
    if (people[i] + people[j] <= limit) {
      i++;
    }
    // if the above condition is false, it means that the sum is greater than limit, which means the end elem is bigger and we need one boat for it by itself
    j--;
    boats++;
  }
  return boats;
};
