import question, {
  randomizer, raunds, getDeviderArray, getPrimeNum, logics,
} from '../src/index.js';

const isPrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let counter = 0;
  while (counter !== raunds) {
    const num = randomizer(2, 20);
    const deviders = getDeviderArray(num);
    console.log(deviders);
    console.log(question(num));
    const prime = getPrimeNum(deviders);

    counter += 1;

    if (logics(prime, counter) === false) {
      break;
    }
  }
};

export default isPrime;
