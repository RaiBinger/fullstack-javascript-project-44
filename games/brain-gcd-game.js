import isQuestion, {
  getRandom, raunds, getDeviderArray, getGcd, letAnswerCheck,
} from '../src/index.js';

const isGcd = () => {
  console.log('Find the greatest common divisor of given numbers.');
  let counter = 0;
  while (counter !== raunds) {
    const first = getRandom(1, 10);
    const second = getRandom(1, 10);
    const coupleNum = `${first} ${second}`;
    console.log(isQuestion(coupleNum));
    const min = first < second ? first : second;
    const max = first > second ? first : second;
    const gcdMinCollect = getDeviderArray(min);
    const gcd = getGcd(gcdMinCollect, max);

    counter += 1;

    if (letAnswerCheck(gcd, counter) === false) {
      break;
    }
  }
};

export default isGcd;
