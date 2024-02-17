import getRandomNumber from '../src/function.js';

import gameLogig from '../src/gameLogic.js';

const task = 'What number is missing in the progression?';

function generateProgression(length, firstNumber, step) {
  const progression = [];
  const hiddenIndex = getRandomNumber(0, length - 1);

  for (let i = 0; i < length; i += 1) {
    if (i === hiddenIndex) {
      progression.push('..');
    } else {
      progression.push(firstNumber + step * i);
    }
  }

  return {
    progression,
    hiddenIndex,
  };
}

function makeQuestion(progression) {
  return console.log(`Question: ${progression.join(' ')}`);
}

function getQuestion() {
  const firstNumber = getRandomNumber(0, 100);
  const step = getRandomNumber(1, 10);
  const result = generateProgression(10, firstNumber, step);
  makeQuestion(result.progression);

  return firstNumber + step * result.hiddenIndex;
}

export default function startGame() {
  return gameLogig(task, getQuestion);
}
