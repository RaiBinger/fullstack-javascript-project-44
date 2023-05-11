import answer, {
  question, randomizer, name, randomIndex, raunds,
} from '../src/index.js';

const operatorsArray = ['+', '-', '*'];

const isExpression = () => {
  console.log('What is the result of the expression?');
  let i = 0;
  while (i !== raunds) {
    const leftNumber = randomizer(0, 100);
    const rightNumber = randomizer(0, 100);
    const operatorSimbol = operatorsArray[randomIndex(operatorsArray)];
    const expression = `${leftNumber} ${operatorSimbol} ${rightNumber}`;
    console.log(question(expression));
    let result = 0;
    switch (operatorSimbol) {
      case '+':
        result = leftNumber + rightNumber;
        break;
      case '-':
        result = leftNumber - rightNumber;
        break;
      case '*':
        result = leftNumber * rightNumber;
        break;
      default:
        return null;
    }
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

export default isExpression;
