import isQuestion, {
  getRandom, getRandomItem, raunds, letAnswerCheck,
} from '../src/index.js';

const operatorsArray = ['+', '-', '*'];

const isExpression = () => {
  console.log('What is the result of the expression?');
  let counter = 0;
  while (counter !== raunds) {
    const leftNumber = getRandom(0, 10);
    const rightNumber = getRandom(0, 10);
    const operatorSimbol = getRandomItem(operatorsArray);
    const expression = `${leftNumber} ${operatorSimbol} ${rightNumber}`;
    console.log(isQuestion(expression));
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

    counter += 1;

    if (letAnswerCheck(result, counter) === false) {
      break;
    }
  }
  return '';
};

export default isExpression;
