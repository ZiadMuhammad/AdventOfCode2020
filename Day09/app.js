//These are the solutions for both parts of Day 9.
//Solutions were implemented in JS using Two Pointers.

const fs = require('fs')
let array = fs.readFileSync('input.txt', 'utf8').split('\n');

//Finds the wrong number based on some 
//encryption rules.

function findWrongNumber(input, p) {
  loop1:
  for(let i = p; i < input.length; i++) {
    let x = input[i];
    let j = i - p;
    let z = i - 1;

    let originalP = [];
    let sortedP = [];

    for(var1 = j; var1 <= z; var1++) {
      originalP.push(parseInt(input[var1]));
    }

    originalP.sort(function(a, b){return a-b});

    var1 = 0;
    var2 = originalP.length - 1;

    while(var1 < var2) {
      if(originalP[var1] + originalP[var2] == x) {
        continue loop1;
      } else if(originalP[var1] + originalP[var2] > x) {
        var2--;
      } else {
        var1++;
      }
    }

    return x;
  }
}

//Finds contiguous numbers that add up
//to the wrong number.

function findSetSumsToWrongNo(input, wrong) {
  for(let i = 0; i < input.length; i++) {
    const elements = [input[i]];
    let sum = parseInt(input[i]);

    for(let j = i + 1; j < input.length; j++) {
      sum += parseInt(input[j]);
      elements.push(input[j]);

      if(sum == wrong) {
        return elements;
      } else if(elements > wrong) {
        break;
      }
    }
  }
}

//Part 1 Output

console.log(findWrongNumber(array, 25));

//Part 2 Output

console.log(findSetSumsToWrongNo(array, 2089807806));