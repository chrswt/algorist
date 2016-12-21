'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * The Algorithm Design Manual, 2nd Edition
 * Steven S. Skiena
 * Interview Problems (I-28), p.30
 *
 * 25 HORSES
 * There are 25 horses. At most, 5 horses can race together at a time. You must
 * determine the fastest, second fastest, and third fastest horses. Find the
 * minimum number of races in which this can be done.
 */

/*jshint esversion: 6 */

var Horse = function Horse(name, speed) {
  _classCallCheck(this, Horse);

  this.name = name;
  this._speed = speed;
};

var race = function race(horsesArray, raceNumber) {
  if (raceNumber || raceNumber === 0) {
    // Only assign a race group for the first race
    horsesArray.forEach(function (horse) {
      horse.raceGroup = raceNumber;
    });
  }

  horsesArray.sort(function (a, b) {
    return a._speed < b._speed;
  });

  return horsesArray;
};

var stable = [];

var startSimulation = function startSimulation(numHorses) {
  // Populate the stable with horses of varying speeds
  var posA = 'a'.charCodeAt(0);
  var raceGroup1 = [];
  var raceGroup2 = [];
  var raceResults1 = {};
  var raceResults2 = void 0;
  var raceResults3 = void 0;
  var fastestGroup = void 0;
  var secondFastestGroup = void 0;
  var thirdFastestGroup = void 0;
  var numRaces = 0;

  for (var i = 0; i < numHorses; i++) {
    stable.push(new Horse(String.fromCharCode(posA + i), i));
  }

  // Split the horses into 5 groups of 5 and race them
  for (var j = 0; j < 5; j++) {
    raceResults1['group' + j] = race(stable.slice(j * 5, j * 5 + 5), j);
    numRaces++;
  }

  // Race the fastest of each group to eliminate other horses
  for (var k = 0; k < 5; k++) {
    raceGroup1.push(raceResults1['group' + k][0]);
  }
  raceResults2 = race(raceGroup1);
  numRaces++;

  // We now know that the slowest 2 groups do not contain any of the 3 fastest
  // horses. We also know that the 2nd and 3rd horses in the 3rd fastest group
  // and the 3rd fastest horse in the 2nd fastest group are not part of the 3
  // fastest. Therefore, we are left with 6 horses (the top 3 from group A,
  // the top 2 from group B, and the top 1 from group C). We already know that
  // the fastest horse from the fastest group is the absolute fastest horse,
  // so we can simply race the remaining 5 and take the next 2 fastest.

  fastestGroup = raceResults2[0].raceGroup;
  secondFastestGroup = raceResults2[1].raceGroup;
  thirdFastestGroup = raceResults2[2].raceGroup;

  raceGroup2.push(raceResults1['group' + fastestGroup][1]);
  raceGroup2.push(raceResults1['group' + fastestGroup][2]);
  raceGroup2.push(raceResults1['group' + secondFastestGroup][0]);
  raceGroup2.push(raceResults1['group' + secondFastestGroup][1]);
  raceGroup2.push(raceResults1['group' + thirdFastestGroup][0]);

  raceResults3 = race(raceGroup2);
  numRaces++;

  console.log('The 3 fastest horses are:', raceResults2[0], raceResults3[0], raceResults3[1]);

  return numRaces;
};

console.log(startSimulation(25)); // 7
//# sourceMappingURL=1-29-25horses.js.map