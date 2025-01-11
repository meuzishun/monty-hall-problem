const doors = ['Door 1', 'Door 2', 'Door 3'];

function randomDoor(doors) {
  return doors[Math.floor(Math.random() * doors.length)];
}

// Make sure distribution is mostly even
function testDistribution() {
  const results = {
    'Door 1': 0,
    'Door 2': 0,
    'Door 3': 0,
  };

  for (let i = 0; i < 1_000_000; i++) {
    const prizeDoor = randomDoor(doors);
    results[prizeDoor]++;
  }

  return results;
}

function montyHallProblem(chosenDoor, change) {
  const prizeDoor = randomDoor(doors);

  const shownDoor = doors.filter(
    (door) => door !== chosenDoor && door !== prizeDoor
  )[0];

  let finalChoice;

  if (change) {
    finalChoice = doors.filter(
      (door) => door !== chosenDoor && door !== shownDoor
    )[0];
  } else {
    finalChoice = chosenDoor;
  }

  return {
    chosenDoor,
    prizeDoor,
    shownDoor,
    finalChoice,
    result: finalChoice === prizeDoor ? 'win' : 'loss',
  };
}

function testMontyHallProblem(change, numOfTests) {
  const data = {
    wins: 0,
    losses: 0,
    records: [],
  };

  for (let i = 0; i < numOfTests; i++) {
    const chosenDoor = randomDoor(doors);
    const record = montyHallProblem(chosenDoor, change);
    data.records.push(record);

    if (record.result === 'win') {
      data.wins++;
    }

    if (record.result === 'loss') {
      data.losses++;
    }
  }

  return data;
}

const yesChangeTests = testMontyHallProblem(true, 1_000_000);
const noChangeTests = testMontyHallProblem(false, 1_000_000);

console.log(`Wins when changing answer: ${yesChangeTests.wins}`);
console.log(`Wins when not changing answer: ${noChangeTests.wins}`);
