import readlineSync from 'readline-sync';

import greetUser from './cli.js';

const name = greetUser();

function generateNumber() {
  return Math.floor(Math.random() * 50);
}

console.log('What is the result of the expression?');

function generateOperator() {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
}

function calculateResult(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
}

function checkAnswer(answer, result, name, count) {
  if (Number(answer) === result) {
    count += 1;
    console.log('Correct!');
    const max = 3;
    if (count === max) {
      console.log(`Congratulations, ${name}!`);
    }
  } else {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.`);
    console.log(`Let's try again, ${name}!`);
    count = 0;
    return false;
  }

  return count;
}

export default function startGameCalc() {
  let count = 0;
  const max = 3;

  while (count < max) {
    const num1 = generateNumber();
    const num2 = generateNumber();
    const operator = generateOperator();
    const result = calculateResult(num1, num2, operator);
    const randomNumber = `${num1} ${operator} ${num2}`;

    console.log(`Question: ${randomNumber}`);
    const youranswer = readlineSync.question('Your answer: ');

    count = checkAnswer(youranswer, result, name, count);

    if (!count) {
      break;
    }
  }
}
