import readlineSync from 'readline-sync';

import greetUser from './cli.js';

const name = greetUser();

function getGreatestCommonDivisor(a, b) {
  let divisor = 1;
  for (let i = 1; i <= Math.min(a, b); i += 1) {
    if (a % i === 0 && b % i === 0) {
      divisor = i;
    }
  }
  return divisor;
}
const result = getGreatestCommonDivisor();

function generateNumber() {
  return Math.floor(Math.random() * 100);
}

console.log('Find the greatest common divisor of given numbers.');

export default function startGameNod() {
  let count = 0;
  const max = 3;

  while (count < max) {
    const num1 = generateNumber();
    const num2 = generateNumber();

    const randomNumber = `${num1} ${num2}`;

    console.log(`Question: ${randomNumber}`);

    const youranswer = readlineSync.question('Your answer: ');
    //   let result = ;
    if (Number(youranswer) === result) {
      count += 1;
      console.log('Correct!');
      if (count === max) { console.log(`Congratulations, ${name}!`); }
    } else {
      console.log(`${youranswer} is wrong answer ;(. Correct answer was ${result}.`);
      console.log(`Let's try again,  ${name}!`);
      count = 0;
      break;
    }
  }
  return result;
}
