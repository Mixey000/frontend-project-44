import gameLogig from './game.js';

import getRandomNumber from './function.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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
export function getQuestion() {
  const number = getRandomNumber(1, 100);
  const isPrimeNumber = isPrime(number);
  console.log(`Question: ${number}`);
  return isPrimeNumber ? 'yes' : 'no';
}
export default function startGame() {
  return gameLogig(task, getQuestion);
}
