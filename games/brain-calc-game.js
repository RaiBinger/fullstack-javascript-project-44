import question, {
  randomizer, randomItem, raunds, logics,
} from '../src/index.js';

const operatorsArray = ['+', '-', '*'];

const isExpression = () => {
  console.log('What is the result of the expression?');
  let counter = 0;
  while (counter !== raunds) {
    const leftNumber = randomizer(0, 10);
    const rightNumber = randomizer(0, 10);
    const operatorSimbol = randomItem(operatorsArray);
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

    counter += 1;

    if (logics(result, counter) === false) {
      break;
    }
  }
  return '';
};

export default isExpression;
