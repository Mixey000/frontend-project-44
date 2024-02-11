import readlineSync from 'readline-sync';

import greetUser from './cli.js';

const name = greetUser();

console.log('What number is missing in the progression?');

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

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

const max = 3;
let count = 0;

function makeQuestion(progression) {
  return console.log(`Question: ${progression.join(' ')}`);
}
console.log('What number was replaced by dots?');

export default function startGameNod() {
  while (count < max) {
    const firstNumber = getRandomNumber(0, 100);
    const step = getRandomNumber(1, 10);
    const result = generateProgression(10, firstNumber, step);
    makeQuestion(result.progression);
    const answer = readlineSync.question('Your answer: ');

    if (Number(answer) === firstNumber + step * result.hiddenIndex) {
      count += 1;
      console.log('Correct!');
      if (count === max) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${firstNumber + step * result.hiddenIndex}.`);
      console.log(`Let's try again, ${name}!`);// ${result.progression.join(' ')}result.progression[result.hiddenIndex]
      count = 0;
      break;
    }
  }
}
