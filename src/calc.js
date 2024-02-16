import gameLogig from './game.js';

import getRandomNumber from './function.js';

const task = 'What is the result of the expression?';

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

function getQuestion() {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const operator = generateOperator();
  const result = calculateResult(num1, num2, operator);
  const randomNumber = `${num1} ${operator} ${num2}`;
  console.log(`Question: ${randomNumber}`);
  return result.toString();
}

export default function startGame() {
  return gameLogig(task, getQuestion);
}
