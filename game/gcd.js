import gameLogig from '../src/gameLogic.js';

import getRandomNumber from '../src/function.js';

const task = 'Find the greatest common divisor of given numbers.';

function getGreatestCommonDivisor(a, b) {
  let divisor = 1;
  for (let i = 1; i <= Math.min(a, b); i += 1) {
    if (a % i === 0 && b % i === 0) {
      divisor = i;
    }
  }
  return divisor;
}

function getQuestion() {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  console.log(`Question: ${num1} ${num2}`);
  const answer = getGreatestCommonDivisor(num1, num2);
  return answer.toString();
}

export default function startGame() {
  return gameLogig(task, getQuestion);
}
