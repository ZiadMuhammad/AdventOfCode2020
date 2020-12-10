//These are the solutions for both parts of Day 8.
//Solutions were implemented in JS using Regex and Loops.

const fs = require('fs')
let array = fs.readFileSync('input.txt', 'utf8').split('\n');

//A program that executes the assembly
//instructions but quits after repeating
//any instruction.

//Part 1 - O(N)

function startProgram(input) {
  let acc = 0;
  let executed = [];

  for(let i = 0; i < input.length; i++) {
    if(executed.includes(i)) {
      return acc;
    }

    if(input[i].substr(0, 3) == 'acc') {
      executed.push(i);
      [, sign, no] = /acc\s([+-])([0-9]+)/.exec(input[i]);
      if(sign == '+') {
        acc += parseInt(no);
      } else {
        acc -= parseInt(no);
      }
    } else if(input[i].substr(0, 3) == 'jmp') {
      executed.push(i);
      [, sign, no] = /jmp\s([+-])([0-9]+)/.exec(input[i]);
      if(sign == '+') {
        i += parseInt(no) - 1;
      } else {
        i -= parseInt(no) + 1;
      }
    } else {
      executed.push(i);
    }
  }

  //Prints the accumulator's value after
  //fixing the program.

  console.log(acc);

  return 'SUCCESS';
}

//A program to detect the instruction that
//causes the infinite loop and fix it.

//Part 2 - O(N ^ 2)

function findWrongInstruction(input) {
  original = '';
  for(let i = 1; i < input.length; i++) {
    if(input[i].substr(0, 3) == 'jmp') {
      input[i] = input[i].replace('jmp', 'nop');
      let x = startProgram(input);
      if(x == 'SUCCESS') {
        return input;
      } else {
        input[i] = input[i].replace('nop', 'jmp');
        continue;
      }
    } else if(input[i].substr(0, 3) == 'nop') {
      input[i] = input[i].replace('nop', 'jmp');
      let x = startProgram(input);
      if(x == 'SUCCESS') {
        return input;
      } else {
        input[i] = input[i].replace('jmp', 'nop');
        continue;
      }
    } else {
      continue;
    }
  }
}

//Part 1 Output

startProgram(array);

//Part 2 Output

findWrongInstruction(array);