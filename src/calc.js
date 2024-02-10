import readlineSync from 'readline-sync';

import greetUser from './cli.js';

const name = greetUser();

function generateNumber() {
  return Math.floor(Math.random() * 50);
}

console.log('What is the result of the expression?');

export default function startGameCalc() {
  let count = 0;
  const max = 3;

  function randomOperator() {
    const operators = ['+', '-', '*'];
    const randomIndex = Math.floor(Math.random() * operators.length);
    return operators[randomIndex];
  }

  while (count < max) {
    const num1 = generateNumber();
    const num2 = generateNumber();
    const operator = randomOperator();
    let result;

    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      default:
        result = null;
        break;
    }
    const randomNumber = `${num1} ${operator} ${num2}`;

    console.log(`Question: ${randomNumber}`);

    const youranswer = readlineSync.question('Your answer: ');

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
}
