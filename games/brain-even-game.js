import isQuestion, {
  getRandom, raunds, isEven, letAnswerCheck,
} from '../src/index.js';

const isEvenNumber = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  let counter = 0;
  while (counter !== raunds) {
    const randomNum = getRandom(1, 10);
    console.log(isQuestion(randomNum));
    const result = isEven(randomNum);

    counter += 1;

    if (letAnswerCheck(result, counter) === false) {
      break;
    }
  }
};

export default isEvenNumber;
