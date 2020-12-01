//These are the solutions for both parts of Day 1.
//Solutions were implemented in JS using Hashing.

fs = require('fs')
let array = fs.readFileSync('input.txt', 'utf8').split('\n');

function convertArrayToIntegers() {
  for(let i = 0; i < array.length; i++) {
    array[i] = parseInt(array[i]);
  }
}

//Part 1 - O(N)

function findTwoEntries(input) {
  const hashObject = {};

  //Iterating through all values.
  for(let i = 0; i < input.length; i++) {
    //Check if the object has the current value as key.
    if(hashObject.hasOwnProperty(input[i])) {
      console.log(input[i] + " " + (2020 - input[i]));
      return true;
      //If value is not a key then add it's complement as a key.
    } else if(!hashObject.hasOwnProperty[input[i]]) {
      hashObject[2020 - input[i]] = true;
    }
  }

  return false;
}

//Part 2 - O(N^2)

function findThreeEntries(input) {
  const hashObject = {};

  //Iterating through all possible pairs.
  for(let i = 0; i < input.length; i++) {
    for(let j = i + 1; j < input.length; j++) {
      //Adding the complement of two pairs as a key.
      hashObject[2020 - (input[i] + input[j])] = [input[i], input[j]];
    }
  }

  //Finding a value that is a complement to a sum of pairs.
  for(let i = 0; i < input.length; i++) {
    if(hashObject.hasOwnProperty(input[i])) {
      console.log(input[i] + " " + hashObject[input[i]][0] + " " + hashObject[input[i]][1]);
      return true;
    }
  }

  return false;
}

convertArrayToIntegers();
//console.log(findThreeEntries(array));
//console.log(findTwoEntries(array));