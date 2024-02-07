#!/usr/bin/env node

import readlineSync from 'readline-sync';

export default function greetUser() {}

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");
greetUser();

// const result = Math.floor(Math.random() * 50);

function startGame() {
  let count = 0;
  const max = 3;
  function isEven(num) {
    return num % 2 === 0;
  }
  while (count < max) {
    const result = Math.floor(Math.random() * 50);
    console.log(`Question: ${result}`);
    const youranswer = readlineSync.question('Your answer: ');

    if ((isEven(result) && youranswer === 'yes') || (!isEven(result) && youranswer === 'no')) {
      count += 1;
      console.log('Correct!');
      if (count === max) { return console.log(`Congratulations, ${name}!`); }
    } else {
      console.log(`${youranswer} is wrong answer ;(. Correct answer was ${(result % 2 === 0 ? 'yes' : 'no')}.`);
      console.log(`Let's try again,  ${name}!`);
      count = 0;
      break;
    }
  }
}

startGame();
