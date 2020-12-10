//These are the solutions for both parts of Day 2.
//Solutions were implemented in JS using Simple Loops.

fs = require('fs')
let array = fs.readFileSync('input.txt', 'utf8').split('\n');

//Just a function to allow me to parse the needed parameters.
//This function will return the parameters in an array.

function valueCleaner(input) {
  mainArr = input.split(':');
  beforeColon = mainArr[0];
  firstTwoChars = beforeColon.split(' ');
  firstTwoCharsSplit = firstTwoChars[0].split('-');
  
  x = firstTwoCharsSplit[0];
  y = firstTwoCharsSplit[1];
  characterToTrace = firstTwoChars[1];
  password = mainArr[1];

//  console.log(x + " " + y + " " + characterToTrace + " " + password);

  outputArray = [];
  outputArray.push(parseInt(x));
  outputArray.push(parseInt(y));
  outputArray.push(characterToTrace);
  outputArray.push(password.substring(1));

  return outputArray;
}

//valueCleaner("4-5 r: rrrjr");

//Part 1 - O(N * J)

function rightPasswordCounter(input) {
  rightPasswords = 0;

  for(let i = 0; i < input.length; i++) {
    parsedValues = valueCleaner(input[i]);
    x = parsedValues[0];
    y = parsedValues[1];
    character = parsedValues[2];
    password = parsedValues[3];
    characterCount = 0;

    for(let j = 0; j < password.length; j++) {
      if(password[j] == character) {
        characterCount++;
      }
    }

    if(characterCount >= x && characterCount <= y) {
      rightPasswords++;
    }
  }

  return rightPasswords;
}

//Part 2 - O(N)

function rightPasswordCounterPart2(input) {
  rightPasswords = 0;

  for(let i = 0; i < input.length; i++) {
    parsedValues = valueCleaner(input[i]);
    x = parsedValues[0];
    y = parsedValues[1];
    character = parsedValues[2];
    password = parsedValues[3];
    characterCount = 0;

    if(password[x-1] == character && password[y-1] != character || password[x-1] != character && password[y-1] == character) {
      rightPasswords++;
    }
  }

  return rightPasswords;
}

// console.log(rightPasswordCounter(array));
// console.log(rightPasswordCounterPart2(array));

