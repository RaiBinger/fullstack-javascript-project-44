import question, {
  randomizer, raunds, isEven, logics,
} from '../src/index.js';

const isEvenNumber = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  let counter = 0;
  while (counter !== raunds) {
    const randomNum = randomizer(1, 10);
    console.log(question(randomNum));
    const result = isEven(randomNum);

    counter += 1;

    if (logics(result, counter) === false) {
      break;
    }
  }
};

export default isEvenNumber;
