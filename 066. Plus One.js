// https://leetcode.com/problems/plus-one/description/

// 66. Plus One
// Difficulty: Easy

/**
 * Adding an unoptimized solution
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  // Substituting n for digits length, temp variable and the base to divide by
  let n = digits.length,
    temp,
    base = 10;
  // Adding one as the problem required 1 to be added to the digits array
  temp = digits[n - 1] + 1;
  // If adding one does not cause the LSB to increase more than the base, then no need to process further. This is it
  if (temp < base) {
    digits[n - 1] = temp;
    return digits;
  }
  // Since this is not returned, LSB is greater than base. Adjusting it to below base and passing the carry to the temp variable
  digits[n - 1] = temp % base;
  temp = parseInt(temp / base);
  // Looping thru LSB-1(n-2) to MSB(0)
  for (let i = n - 2; i >= 0; i--) {
    //Adding carry and last digit and storing in temp
    temp = temp + digits[i];
    //if sum is less than base, no need to process further. Return and exit
    if (temp < base) {
      digits[i] = temp;
      return digits;
    }
    // Going forward, since we have another carry. Adjusting to below base
    digits[i] = temp % base;
    //Updating carry forward
    temp = parseInt(temp / base);
  }
  // Loop has ended and so the entire array has been processed. Check if any carry is left. If carry left, add to the front of the array
  if (temp > 0) {
    digits.unshift(temp);
  }
  //return the final ans
  return digits;
};
