import answer, {
  question, randomNumber, name, raunds, getGcdArray, commonGcd,
} from '../src/index.js';

const isGcd = () => {
  console.log('Find the greatest common divisor of given numbers.');
  let i = 0;
  while (i !== raunds) {
    const first = randomNumber(1, 10);
    const second = randomNumber(1, 10);
    const random = `${first} ${second}`;
    console.log(question(random));
    const min = first < second ? first : second;
    const max = first > second ? first : second;
    const gcdMinCollect = getGcdArray(min);
    const gcd = commonGcd(gcdMinCollect, max);
    const result = gcd;
    const userAnswer = answer();
    if (Number(userAnswer) === result) {
      console.log('Correct!');
    } else {
      return `${userAnswer} is wrong answer ;(. Correct answer was ${result}\nLet's try again, ${name}!`;
    }
    i += 1;
    if (i === raunds) {
      return `Congratulations, ${name}!`;
    }
  }
  return '';
};

export default isGcd;
