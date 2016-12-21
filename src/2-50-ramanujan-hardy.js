/*
 * The Algorithm Design Manual, 2nd Edition
 * Steven S. Skiena
 * Interview Problems (2-50), p.64
 *
 * RAMANUJAN-HARDY NUMBERS
 * A Ramanujan-Hardy number can be written two different ways as the sum of
 * cubes -- i.e., there exist distinct a, b, c, and d such that
 *   a^3 + b^3 = c^3 + d^3.
 * Generate all Ramanujan numbers where a, b, c, d < n.
 */

/*jshint esversion: 6*/

const ramanujanHardy = (n) => {
  /*
   * We assume that a, b, c, d > 0 otherwise many other possible sequences
   * not officially recognized as Ramanujan-Hardy numbers will be generated
   */
  const result = [];

  for (let a = 1; a <= n; a++) {
    let a3 = Math.pow(a, 3);

    for (let b = a + 1; b <= n; b++) {
      let b3 = Math.pow(b, 3);

      for (let c = a + 1; c <= n; c++) {
        let c3 = Math.pow(c, 3);

        /*
         * Break condition when solution is iterating out of bounds that
         * greatly improve this algorithm's efficiency (repeated for d)
         */
        if (c3 > a3 + b3) { break; }

        for (let d = c + 1; c <= n; d++) {
          let d3 = Math.pow(d, 3);

          if (c3 + d3 > a3 + b3) { break; }

          if (a3 + b3 === c3 + d3) {
            console.log(`${a3 + b3} = ${a}^3 + ${b}^3 = ${c}^3 + ${d}^3`);
            result.push(a3 + b3);
          }
        }
      }
    }
  }

  return result;
};

console.log(ramanujanHardy(24)); // [1729, 4104, 13832]
