import isQuestion, {
  getRandom, raunds, getDeviderArray, isPrimeNum, letAnswerCheck,
} from '../src/index.js';

const isPrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let counter = 0;
  while (counter !== raunds) {
    const num = getRandom(2, 20);
    const deviders = getDeviderArray(num);
    console.log(isQuestion(num));
    const prime = isPrimeNum(deviders);

    counter += 1;

    if (letAnswerCheck(prime, counter) === false) {
      break;
    }
  }
};

export default isPrime;
