import gameEngine, {
  randomNumber, getRandomItem,
} from '../index.js';

const simbolArray = ['+', '-', '*'];

const task = 'What is the result of the expression?';

/**
 * Функция логики игры
 * @returns Правильный ответ, item для вопроса
 */
const calcExpression = () => {
  const leftNumber = randomNumber(0, 10);
  const rightNumber = randomNumber(0, 10);
  const operator = getRandomItem(simbolArray);
  const expression = `${leftNumber} ${operator} ${rightNumber}`;
  let result = 0; /*  */
  switch (operator) {
    case '+':
      result = leftNumber + rightNumber; /*  */
      break;
    case '-':
      result = leftNumber - rightNumber; /*  */
      break;
    case '*':
      result = leftNumber * rightNumber; /*  */
      break;
    default:
      return null;
  }
  return [result, expression];
};

const brainCalc = () => gameEngine(task, calcExpression);

export default brainCalc;
