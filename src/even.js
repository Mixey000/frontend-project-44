import gameLogig from './game.js';

import getRandomNumber from './function.js';

const task = "Answer 'yes' if the number is even, otherwise answer 'no'.";

function isEven(num) {
  return num % 2 === 0;
}

function getQuestion() {
  const number = getRandomNumber(1, 100);
  console.log(`Question: ${number}`);
  return isEven(number) ? 'yes' : 'no';
}
export default function startGame() {
  return gameLogig(task, getQuestion);
}
