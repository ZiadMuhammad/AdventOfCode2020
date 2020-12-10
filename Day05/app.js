//These are the solutions for both parts of Day 5.
//Solutions were implemented in JS using Math and Two Pointers.

const fs = require('fs')
let array = fs.readFileSync('input.txt', 'utf8').split('\n');
let arrayAll = []; 

//Part 1 - O(N)

function getHighestSeatPart1(input) {
  for(let i = 0; i < input.length; i++) {
    let sp1 = 0;
    let ep1 = 127;
    let row = 0;

    let sp2 = 0;
    let ep2 = 7;
    let column = 0;

    for(let j = 0; j < 7; j++) {
      if(input[i][j] === 'B') {
        sp1 = sp1 + Math.ceil((ep1 - sp1) / 2);
      } else {
        ep1 = sp1 + Math.floor((ep1 - sp1) / 2);
      }
    }

    for(let j = 7; j < 10; j++) {
      if(input[i][j] === 'R') {
        sp2 = sp2 + Math.ceil((ep2 - sp2) / 2);
      } else {
        ep2 = sp2 + Math.floor((ep2 - sp2) / 2);
      }
    }

    arrayAll.push(sp1 * 8 + sp2);
  }
}

//Part 2 - O(N)

function getMissingId(input) {
  for(let i = 1; i < input.length; i++) {
    if(input[i + 1] != input[i] + 1) {
      return input[i] + 1;
    }
  }
}

//Part 1 Answer

getHighestSeatPart1(array);
console.log(Math.max.apply(Math, arrayAll));

//Part 2 Answer

arrayAll.sort(function(a, b) {
  return a - b;
});

console.log(getMissingId(arrayAll));