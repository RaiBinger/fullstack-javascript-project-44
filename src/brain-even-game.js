import readlineSync from 'readline-sync';
import greeting from './cli.js';

const randomeNumber = () => {
  const min = Math.ceil(1);
  const max = Math.floor(10);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const greetingLocal = greeting();
const temp = greetingLocal.indexOf(' ');
const name = greetingLocal.slice(temp);

const isEvenNumber = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  let i = 0;
  while (i !== 3) {
    const randomeNum = randomeNumber();
    console.log(`Question: ${randomeNum}`);
    if (randomeNum % 2 === 0) {
      if (readlineSync.question('Your answer: ').toLowerCase() === 'yes') {
        console.log('Correct!');
      } else {
        return `"no" is wrong answer ;(. Correct answer was "yes".\nLet's try again,${name}`;
      }
    }
    if (randomeNum % 2 !== 0) {
      if (readlineSync.question('Your answer: ').toLowerCase() === 'no') {
        console.log('Correct!');
      } else {
        return `"yes" is wrong answer ;(. Correct answer was "no".\nLet's try again,${name}`;
      }
    }
    i += 1;
    if (i === 3) {
      return `Congratulations,${name}`;
    }
  }
  return '';
};

export { greetingLocal };
export default isEvenNumber;
