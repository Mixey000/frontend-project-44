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

function generateNumber() {
return Math.floor(Math.random() * 100);
}

console.log('Find the greatest common divisor of given numbers.');

export default function startGameNod() {
const maxAttempts = 3;
let correctAnswersCount = 0;

while (correctAnswersCount < maxAttempts) {
const num1 = generateNumber();
const num2 = generateNumber();
const result = getGreatestCommonDivisor(num1, num2);

console.log(`Question: ${num1} ${num2}`);

const userAnswer = readlineSync.question('Your answer: ');

if (Number(userAnswer) === result) {
  correctAnswersCount++;
  console.log('Correct!');
  if (correctAnswersCount === maxAttempts) {
    console.log(`Congratulations, ${name}!`);
  }
} else {
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${result}.`);
  console.log(`Let's try again, ${name}!`);
  correctAnswersCount = 0;
  break;
}
}
}
