//These are the solutions for both parts of Day 10.
//Solutions were implemented in JS using Loops and Dynamic Programming.

const fs = require('fs')
let array = fs.readFileSync('input.txt', 'utf8').split('\n');

array.sort(function(a, b){return a-b});

console.log(array);

//A function to get the joltage distributions
//and returns the required value in the problem.

function getJoltageDistribution(input) {
  currentJoltage = 0;
  diffOfOneCount = 0;
  diffOfTwoCount = 0;
  diffOfThreeCount = 0;

  for(let i = 0; i < input.length; i++) {
    if(parseInt(input[i]) - currentJoltage == 1) {
      diffOfOneCount++;
      currentJoltage = input[i];
    } else if(parseInt(input[i]) - currentJoltage == 3) {
      diffOfThreeCount++;
      currentJoltage = input[i];
    } else {
      continue;
    }
  }

  return diffOfOneCount * (diffOfThreeCount + 1);
}

//Using Dynamic Programming to return number
//of combinations.

function getAllJoltageCombinations(input) {
  return input.reduce((calc, joltage) => {
    calc[joltage] =
      (calc[joltage - 3] || 0) +
      (calc[joltage - 2] || 0) +
      (calc[joltage - 1] || 0)
    return calc
  }, [1]).pop();
}

//Part 1 Output

console.log(getJoltageDistribution(array));

//Part 2 Output

console.log(getAllJoltageCombinations(array));