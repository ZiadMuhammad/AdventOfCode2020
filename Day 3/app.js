fs = require('fs')
let array = fs.readFileSync('input.txt', 'utf8').split('\n');

//Part 1 & 2 - O(N)

function findTreesUsingSlope(input, right, down) {
  let currentIndex = 0;
  let nOfRight = 0;
  
  for(let i = 0; i < input.length; i += down) {
    if(currentIndex >= 31) {
      currentIndex -= 31;
    }

    if(array[i][currentIndex] == "#") {
      nOfRight++;
    }

    currentIndex += right;
  }

  return nOfRight;
}

//Part 1 Output

console.log(findTreesUsingSlope(array, 3, 1));

let a = findTreesUsingSlope(array, 1, 1);
let b = findTreesUsingSlope(array, 3, 1);
let c = findTreesUsingSlope(array, 5, 1);
let d = findTreesUsingSlope(array, 7, 1);
let e = findTreesUsingSlope(array, 1, 2);

//Part 2 Output

console.log(a * b * c * d * e);
