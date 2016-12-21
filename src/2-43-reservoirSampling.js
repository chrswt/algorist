/*
 * The Algorithm Design Manual, 2nd Edition
 * Steven S. Skiena
 * Interview Problems (2-43), p.63
 *
 * RESERVOIR SAMPLING
 * You are given a set S of n numbers. You must pick a subset S' of k numbers
 * such that the probability of each element of S occurring in S' is equal
 * (i.e. each is selected with probability k/n). You may make only one pass
 * over the numbers. What if n is unknown?
 */

/*jshint esversion: 6, expr:true */

const reservoirSample = (set, k) => {
  // Populate the reservoir (subset) with the first k numbers of set S
  let reservoir = set.slice(0, k);

  /*
   * Initially, we populate the reservoir with the first k numbers, then each
   * number has a decreasing chance of getting selected (because they have a
   * correspondingly lower chance of getting replaced. Consider S = {1, 2, 3, 4}
   * and k = 2. We can populate the reservoir, r with [1, 2]. Because 4 does
   * not have potential to be replaced, we can observe that randomizing a
   * number between 0 and 3 (it's index) gives it a 2/4 = 50% chance of being
   * selected (it replaces index 0 or 1 if the random number is 0 or 1. 1 has a
   * 100% chance of initially being seeded into the reservoir, a 33% chance of
   * getting replaced by 3 (rnd 0, 1, 2), which implies a ~67% chance of
   * remaining when 4 is assessed, which has a 25% chance of replacing it (rnd
   * 0, 1, 2, 3). 67% * 75% gives us the expected 50% chance of sampling 1.
   */

  for (let i = k; i < set.length; i++) {
    // Generate a random number from 0 to i
    let rnd = Math.floor(Math.random() * (i + 1));
    // If rnd is a reservoir index, replace the sample with the new number
    rnd < k ? reservoir[rnd] = set[i] : null;
  }

  return reservoir;
};

console.log(reservoirSample([1, 2, 3, 4, 5], 2));
console.log(reservoirSample([1], 1));
console.log(reservoirSample([9, 13, 4, 82.5, 0, -13], 3));
