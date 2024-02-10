import readlineSync from 'readline-sync';

import greetUser from './cli.js';

const name = greetUser();

console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");

export default function startGame() {
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
    } else {
      console.log(`${youranswer} is wrong answer ;(. Correct answer was ${(result % 2 === 0 ? 'yes' : 'no')}.`);
      console.log(`Let's try again,  ${name}!`);
      count = 0;
      return;
    }
  }console.log(`Congratulations, ${name}!`);
}
