import readlineSync from 'readline-sync';

import greetUser from './cli.js';

const name = greetUser();

console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");

function generateRandomNumber() {
  return Math.floor(Math.random() * 50);
}

function isEven(num) {
  return num % 2 === 0;
}

function getUserAnswer() {
  return readlineSync.question('Your answer: ');
}

let count = 0;
const max = 3;

export default function startGame() {
  while (count < max) {
    const result = generateRandomNumber();
    console.log(`Question: ${result}`);
    const yourAnswer = getUserAnswer();
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
