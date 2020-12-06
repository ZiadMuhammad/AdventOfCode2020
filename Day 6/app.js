//These are the solutions for both parts of Day 6.
//Solutions were implemented in JS using Simple For Loops and Hashing.

const fs = require('fs')
let array = fs.readFileSync('input.txt', 'utf8').split('\n\n');

//Part 1 - O(N) Considering that we know the maximum number of string operations.

function getSumYesPart1(input) {  
  let count = 0;

  for(let i = 0; i < input.length; i++) {
    str = input[i].replace(/\n/g, '');
    const hashObj = {};
    
    for(let j = 0; j < str.length; j++) {
      if(!hashObj.hasOwnProperty(str[j])) {
        hashObj[str[j]] = true;
        count++;
      }
    }

  }
  return count;
}

//Part 2 - O(N) Also considering that we know the maximum number of string operations.

function getSumYesPart2(input) {  
  let count = 0;

  for(let i = 0; i < input.length; i++) {
    str = input[i].split('\n');
    const hashObj = {};

    for(let j = 0; j < str.length; j++) {
      for(let z = 0; z < str[j].length; z++) {
        if(!hashObj.hasOwnProperty(str[j][z])) {
          hashObj[str[j][z]] = 1;
          if(hashObj[str[j][z]] == str.length) {
            count++;
          }
        } else {
          hashObj[str[j][z]]++;
          if(hashObj[str[j][z]] == str.length) {
            count++;
          }
        }
      }
    }
  }
  return count;
}

//Part 1 Output

console.log(getSumYesPart1(array));

//Part 2 Output

console.log(getSumYesPart2(array));