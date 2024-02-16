import readlineSync from 'readline-sync';
import greetUser from './cli.js';

export default function gameLogig(task, getQuestion) {
  let count = 0;
  const maxAttempts = 3;
  const name = greetUser();
  console.log(task);
  while (count < maxAttempts) {
    const answer = getQuestion();
    const yourAnswer = readlineSync.question('Your answer: ');
    if (yourAnswer === answer) {
      count += 1;
      console.log('Correct!');
    } else {
      console.log(`${yourAnswer} is wrong answer ;(. Correct answer was ${answer}.`);
      console.log(`Let's try again, ${name}!`);
      count = 0;
      return false;
    }
  } console.log(`Congratulations, ${name}!`);
  return count;
}
