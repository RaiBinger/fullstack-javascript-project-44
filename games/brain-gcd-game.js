import question, {
  randomizer, raunds, getDeviderArray, commonGcd, logics,
} from '../src/index.js';

const isGcd = () => {
  console.log('Find the greatest common divisor of given numbers.');
  let counter = 0;
  while (counter !== raunds) {
    const first = randomizer(1, 10);
    const second = randomizer(1, 10);
    const random = `${first} ${second}`;
    console.log(question(random));
    const min = first < second ? first : second;
    const max = first > second ? first : second;
    const gcdMinCollect = getDeviderArray(min);
    const gcd = commonGcd(gcdMinCollect, max);

    counter += 1;

    if (logics(gcd, counter) === false) {
      break;
    }
  }
  return '';
};

export default isGcd;
