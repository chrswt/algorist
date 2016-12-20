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

class Horse {
  constructor(name, speed) {
    this.name = name;
    this._speed = speed;
  }
}

const race = (horsesArray, raceNumber) => {
  if (raceNumber || raceNumber === 0) {
    // Only assign a race group for the first race
    horsesArray.forEach(function(horse) {
      horse.raceGroup = raceNumber;
    });
  }

  horsesArray.sort((a, b) => {
    return a._speed < b._speed;
  });

  return horsesArray;
};

const stable = [];

const startSimulation = (numHorses) => {
  // Populate the stable with horses of varying speeds
  const posA = 'a'.charCodeAt(0);
  const raceGroup1 = [];
  const raceGroup2 = [];
  let raceResults1 = {};
  let raceResults2;
  let raceResults3;
  let fastestGroup;
  let secondFastestGroup;
  let thirdFastestGroup;
  let numRaces = 0;

  for (let i = 0; i < numHorses; i++) {
    stable.push(new Horse(String.fromCharCode(posA + i), i));
  }

  // Split the horses into 5 groups of 5 and race them
  for (let j = 0; j < 5; j++) {
    raceResults1['group' + j] = race(stable.slice(j * 5, j * 5 + 5), j);
    numRaces++;
  }

  // Race the fastest of each group to eliminate other horses
  for (let k = 0; k < 5; k++) {
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

  console.log('The 3 fastest horses are:',
    raceResults2[0], raceResults3[0], raceResults3[1]);

  return numRaces;
};

console.log(startSimulation(25)); // 7
