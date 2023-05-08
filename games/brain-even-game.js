import answer, {
  question, randomNumber, name,
} from '../src/index.js';

const isEvenNumber = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  let i = 0;
  while (i !== 3) {
    const randomNum = randomNumber(1, 10);
    console.log(question(randomNum));
    if (randomNum % 2 === 0) {
      if (answer().toLowerCase() === 'yes') {
        console.log('Correct!');
      } else {
        return `"no" is wrong answer ;(. Correct answer was "yes".\nLet's try again, ${name}!`;
      }
    } else if (randomNum % 2 !== 0) {
      if (answer().toLowerCase() === 'no') {
        console.log('Correct!');
      } else {
        return `"yes" is wrong answer ;(. Correct answer was "no".\nLet's try again, ${name}!`;
      }
    }
    i += 1;
    if (i === 3) {
      return `Congratulations, ${name}!`;
    }
  }
  return '';
};

export default isEvenNumber;
