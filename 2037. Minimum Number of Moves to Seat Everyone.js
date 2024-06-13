// https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/description/?envType=daily-question&envId=2024-06-13

// 2037. Minimum Number of Moves to Seat Everyone
// Difficulty: Easy

/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats, students) {
  // sort both the seats and the students so that the distance between them is minimum
  seats.sort(function (a, b) {
    return a - b;
  });
  students.sort(function (a, b) {
    return a - b;
  });
  let ans = 0;
  for (let i = 0; i < seats.length; i++) {
    // whether we move left or right, the number of moves will be positive. So math.abs
    ans += Math.abs(seats[i] - students[i]);
  }
  // return the total
  return ans;
};
