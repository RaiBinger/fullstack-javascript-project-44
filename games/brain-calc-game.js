import isQuestion, {
  getRandom, getRandomItem, raunds, letAnswerCheck, letCalcExpression,
} from '../src/index.js';

const operatorsArray = ['+', '-', '*']; /* Массив математических операторов. */

const isExpression = () => {
  console.log('What is the result of the expression?');
  let counter = 0; /* Счётчик цикла while */
  while (counter !== raunds) {
    const leftNumber = getRandom(0, 10); /* Случайное значение левого
    операнда из заданного диапазона */
    const rightNumber = getRandom(0, 10); /* Случайное значение
    правого операнда из заданного диапазона */
    const operator = getRandomItem(operatorsArray); /* Случайный
    математический оператор из массива коллекции операторов. */
    const expression = `${leftNumber} ${operator} ${rightNumber}`; /* Текстовое представление математического выражения для формирования вопроса пользователю. */

    isQuestion(expression); /* Вопрос пользователю */

    const result = letCalcExpression(operator, leftNumber, rightNumber); /* Вычисление
    математического выражения для дальнейшей проверки правильности ответа пользователя. */

    counter += 1; /* Увеличение счетчика цикла */

    if (letAnswerCheck(result, counter) === false) {
      break;
    } /* Выполнение проверки правильности ответа пользователя
    и остановка выполнения в случае неверного ответа. */
  }
};

export default isExpression;
