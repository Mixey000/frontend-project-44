import readlineSync from 'readline-sync';

import greetUser from './cli.js';

const name = greetUser();

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function randomNumber() {
  return Math.floor(Math.random() * 50);
}

const max = 3;
let count = 0;

export default function startGame() {
  while (count < max) {
    console.log(`Question: ${randomNumber()}`);
    const answer = readlineSync.question('Your answer: ');

    const isPrimeNumber = isPrime(randomNumber);

    if ((isPrimeNumber && answer === 'yes') || (!isPrimeNumber && answer === 'no')) {
      count += 1;
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${isPrimeNumber ? 'yes' : 'no'}`);
      break;
    }
  } console.log(`Congratulations, ${name}!`);
}
