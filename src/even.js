import readlineSync from 'readline-sync';

import greetUser from './cli.js';

const name = greetUser();

console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");

export default function startGame() {
  
  const count = 0;
  const max = 3;

  function isEven(num) {
    return num % 2 === 0;
  }

  while (count < max) {
    const result = Math.floor(Math.random() * 50);
    console.log(`Question: ${result}`);

    const yourAnswer = readlineSync.question('Your answer: ');

    if ((isEven(result) && yourAnswer === 'yes') || (!isEven(result) && yourAnswer === 'no')) {
      count += 1;
      console.log('Correct!');
    } else {
      const correctAnswer = isEven(result) ? 'yes' : 'no';
      console.log(`${yourAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      count = 0;
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}
