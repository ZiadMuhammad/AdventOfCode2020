//These are the solutions for both parts of Day 4.
//Solutions were implemented in JS using Regular Expressions.

const fs = require('fs')
let array = fs.readFileSync('input.txt', 'utf8').split('\n\n');

//This function is going to check if all required passport keys exist.

function includesRequiredData(input) {
  required = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
  for(let i = 0; i < required.length; i++) {
    if(!input.includes(required[i])) {
      return false;
    }
  }
  return true;
}

//This function is going to check if the value of passport keys
//are valid using regular expressions.

function followRestrictions(input) {
  let passportObject = {}

  inputSplit = input.split(/ |\n/);

  for(let i = 0; i < inputSplit.length; i++) {
    keysWithValue = inputSplit[i].split(':');
    passportObject[keysWithValue[0]] = keysWithValue[1];
  }

  let byrCase = /^19[2-8][0-9]|199[0-9]|200[0-2]$/;

  if(!byrCase.test(passportObject['byr'])) {
    return false;
  }

  let iyrCase = /^201[0-9]|2020$/;

  if(!iyrCase.test(passportObject['iyr'])) {
    return false;
  }

  let eyrCase = /^202[0-9]|2030$/;

  if(!eyrCase.test(passportObject['eyr'])) {
    return false;
  }

  let case1 = /^(1[5-8][0-9]|19[0-3])cm$|^(59|6[0-9]|7[0-6])in$/

  if(!case1.test(passportObject['hgt'])) {
    return false;
  }

  let case2 = /^#[0-9a-f]{6}$/

  if(!case2.test(passportObject['hcl'])) {
    return false;
  }

  let case3 = /^amb|blu|brn|gry|grn|hzl|oth$/;

  if(!case3.test(passportObject['ecl'])) {
      return false;
  }

  let case4 = /^[0-9]{9}$/;

  if(!case4.test(passportObject['pid'])) {
      return false;
  }

  return true;
}

//Part 1 - O(N)

function checkPassportsPart1(input) {
  let correctPassports = 0;

  for(let i = 0; i < input.length; i++) {
    if(includesRequiredData(input[i])) {
      correctPassports++;
    }
  }
  
  return correctPassports;
}

//Part 2 - O(N)

function checkPassportsPart2(input) {
  let correctPassports = 0;

  for(let i = 0; i < input.length; i++) {
    if(includesRequiredData(input[i]) && followRestrictions(input[i])) {
      correctPassports++;
    }
  }
  
  return correctPassports;
}

console.log(checkPassportsPart1(array));
console.log(checkPassportsPart2(array));