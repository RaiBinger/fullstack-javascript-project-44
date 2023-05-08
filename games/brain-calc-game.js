import answer, {
  question, randomNumber, name, randomOperator, raunds,
} from '../src/index.js';

const isExpression = () => {
  console.log('What is the result of the expression?');
  let i = 0;
  while (i !== raunds) {
    const leftNumber = randomNumber(0, 100);
    const rightNumber = randomNumber(0, 100);
    const operatorSimbol = randomOperator();
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
    console.log(result);
    const userAnswer = answer();
    if (Number(userAnswer) === result) {
      console.log('Correct!');
    } else {
      return `${userAnswer} is wrong answer ;(. Correct answer was ${String(result)}\nLet's try again, ${name}!`;
    }
    i += 1;
    if (i === raunds) {
      return `Congratulations, ${name}!`;
    }
  }
  return '';
};

export default isExpression;
