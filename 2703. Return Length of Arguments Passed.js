// https://leetcode.com/problems/return-length-of-arguments-passed/description/

// 2703. Return Length of Arguments Passed
// Difficulty: Super Easy

/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function (...args) {
  return args.length;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */
