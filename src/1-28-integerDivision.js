/*
 * The Algorithm Design Manual, 2nd Edition
 * Steven S. Skiena
 * Interview Problems (I-28), p.30
 *
 * INTEGER DIVISION
 * Write a function to perform integer division without using either the / or *
 * operators. Find a fast way to do it.
 */

/*jshint esversion: 6 */

const integerDivision = (numerator, denominator) => {
  if (denominator === 0) { return NaN; } // Handle non-divisible cases

  const originalDenominator = Math.abs(denominator);
  let result = 1;
  let negative = false;

  if (!(numerator < 0 && denominator < 0) &&
    (numerator < 0 || denominator < 0)) {
    // Flag for negative input in either numerator or denominator
    negative = true;
  }

  numerator = Math.abs(numerator);
  denominator = Math.abs(denominator);

  while (numerator > denominator) {
    denominator <<= 1; // Bitshift to double the denominator
    result <<= 1; // Double the result correspondingly
  }

  while (denominator > numerator) {
    denominator -= originalDenominator; // Handle over-doubling by subtracting
    result--;
  }

  return result === 0 ? 0 :
    negative ? -result : result;
};

console.log(integerDivision(18, 3)); // 6
console.log(integerDivision(-24, 2)); // -12
console.log(integerDivision(39, -3)); // -13
console.log(integerDivision(-42, -20)); // 2
console.log(integerDivision(1000, 10)); // 100
