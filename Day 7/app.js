//These are the solutions for both parts of Day 7.
//Solutions were implemented in JS using Recursion and Hashing.

const fs = require('fs')
let array = fs.readFileSync('input.txt', 'utf8').split('\n');

//A function that maps each color to its subcolors.

function hashGenerator(input) {
  hashObject = {};

  for(let i = 0; i < input.length; i++) {
    let str = input[i].split('s contain ');
    hashObject[str[0]] = str[1].split(', ');
  }

  return hashObject;
}

//A function that formats input to fit my solution.

function inputCleaner(input) {
  if(input == 'shiny gold bag') {
    return input;
  }

  let inputEdit = '';

  if(input[input.length-1] == '.') {
    inputEdit = input.substring(2).slice(0, -1);
  } else {
    inputEdit = input.substring(2);
  }

  if(inputEdit[inputEdit.length - 1] == 's') {
    inputEdit = inputEdit.slice(0, -1);
  }

  return inputEdit;
}

//A function that checks recursively if each bag can contain shiny golds.

function doesBagContainShiny(array, hashInput) {
  if(array[0] == 'no other bags.') {
    return false;
  }

  for(let i = 0; i < array.length; i++) {
    if(array[i].includes('shiny gold')) {
      return true;
    } else if(array[i] == 'no other bags.') {
      continue;
    } else if(doesBagContainShiny(hashInput[inputCleaner(array[i])], hashInput)) {
      return true;
    } 
  }
  return false;
}

//A function that iterated through each property in the hash table.

function getBagsContainShiny(hashInput) {
  let count = 0;

  for (const property in hashInput) {
    if(doesBagContainShiny(hashInput[property], hashInput)) {
      count++;
    }
  }

  return count;
}

//A function that checks recursively for the number of bags
//that shiny gold can hold.

function bagsThatShinyCanContain(color, hashInput) {
    let count = 0;

    for (let i = 0; i < hashInput[inputCleaner(color)].length; i++) {
      subColor = hashInput[inputCleaner(color)][i];
      if (subColor !== 'no other bags.') {
          count += parseInt(subColor[0]);
          
          const subColorCount = parseInt(subColor[0]);
          let subCount = bagsThatShinyCanContain(subColor, hashInput);

          if (subCount > 0) {
              subCount = subCount * subColorCount;
              count += subCount;
          }
      }
    }
    return count;
}

//Part 1 Output

console.log(getBagsContainShiny(hashGenerator(array)));

//Part 2 Output

console.log(bagsThatShinyCanContain('shiny gold bag', hashGenerator(array)));