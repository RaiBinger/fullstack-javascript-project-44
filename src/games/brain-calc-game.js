import gameEngine, {
  randomNumber, getRandomItem,
} from '../index.js';

const simbolArray = ['+', '-', '*']; /* Массив математических операторов. */

const task = 'What is the result of the expression?';

const calcExpression = () => {
  const leftNumber = randomNumber(0, 10); /* Случайное значение левого
  операнда из заданного диапазона */
  const rightNumber = randomNumber(0, 10); /* Случайное значение
  правого операнда из заданного диапазона */
  const operator = getRandomItem(simbolArray); /* Случайный
  математический оператор из массива коллекции операторов. */
  const expression = `${leftNumber} ${operator} ${rightNumber}`; /* Текстовое представление математического выражения для формирования вопроса пользователю. */
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
}; /* Функция возвращает результат математических операций в зависимости
от переданных в неё оператора и операндов. Калькулятор. */

const brainCalc = () => gameEngine(task, calcExpression);

export default brainCalc;
