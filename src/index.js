import readlineSync from 'readline-sync'; // это библиотека с Github позволяет работать в консоли и ожидать ответа пользователя. Библиотека для чтения пользовательского ввода.
import greeting from './cli.js';

const name = greeting(); /* Константа для хранения результата работы
функции приветствия, чтобы можно было дальше использовать имя
пользователя и не вызывать функцию повторно. */

const raunds = 3; /* Константа для хранения общего для всех игр
количества раундов, чтобы при желании их количество можно было
изменить в одном месте сразу для всех игр. */

const isAnswer = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
}; /* Функция для получения ответа пользователя и возврата самого
значения ответа пользователя для дальнейшей передачи в переменную. */

const isQuestion = (item) => {
  const question = console.log(`Question: ${item}`);
  return question;
}; /* В этой функции формируется вопрос для пользователя из текста и данных для вывода на экран. */

const isEven = (num) => {
  let result = '';
  if (num % 2 === 0) {
    result = 'yes';
  } else {
    result = 'no';
  }
  return result;
}; /* Функция возвращает результат проверки переданного числа на четность. */

const letCalcExpression = (operator, leftNumber, rightNumber) => {
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
  return result;
}; /* Функция возвращает результат математических операций в зависимости
от переданных в неё оператора и операндов. Калькулятор. */

const getRandom = (start, end) => {
  const min = Math.ceil(start);
  const max = Math.floor(end);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}; /* Функция возвращает случайное число в зависимости от заданного
интервала от стартовой и конечной границ включительно. */

const getRandomItem = (array) => {
  const index = Math.floor(Math.random() * array.length);
  const item = array[index];
  return item;
}; /* Функция возвращает случайный элемент переданного массива. */

const getDeviderArray = (num) => {
  const array = [];
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      array.push(i);
    }
  }
  return array;
}; /* Функция возвращает массив коллекцию делителей, на которые
переданное число может быть поделено без остатка. */

const getGcd = (array, num) => {
  let result = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (num % array[i] === 0) {
      result = array[i] > result ? array[i] : result;
    }
  }
  return result;
}; /* Функция возвращает из коллекции максимальный делитель из возможных для переданного числа */

const isPrimeNum = (array) => {
  let result = '';
  if (array.length === 2) {
    result = 'yes';
  } else {
    result = 'no';
  }
  return result;
}; /* Функция возвращает результат проверки числа простое или не простое. */

const letTypeCheck = (input) => {
  const temp = Number(input);
  let result;
  if (Number.isNaN(temp)) {
    result = input.toLowerCase();
  } else {
    result = temp;
  }
  return result;
}; /* Функция возвращает результат после проверки типа данны и приведения к нужному типу данных. */

const letAnswerCheck = (input, count) => {
  let result;
  const userAnswer = isAnswer();
  const checkedUserAnswer = letTypeCheck(userAnswer);
  if (checkedUserAnswer === input) {
    console.log('Correct!');
    result = true;
    if (count === raunds) {
      console.log(`Congratulations, ${name}!`);
    }
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${input}'\nLet's try again, ${name}!`);
    result = false;
  }
  return result;
}; /* Функция возвращает результат проверки правильности ответа пользователя на вопрос. */

export {
  isAnswer, getRandom, name, getRandomItem, raunds, getDeviderArray,
  isEven, isPrimeNum, getGcd, letAnswerCheck, letTypeCheck, letCalcExpression,
};
export default isQuestion;
