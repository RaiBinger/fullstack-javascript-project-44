import readlineSync from 'readline-sync'; // это библиотека с Github позволяет работать в консоли и ожидать ответа пользователя. Библиотека для чтения пользовательского ввода.
import greeting from './cli.js';

const getName = greeting(); /* Константа для хранения результата работы
функции приветствия, чтобы можно было дальше использовать имя
пользователя и не вызывать функцию повторно. */

const ROUNDS_COUNT = 3; /* Константа для хранения общего для всех игр
количества раундов, чтобы при желании их количество можно было
изменить в одном месте сразу для всех игр. */

const askAnswer = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
}; /* Функция для получения ответа пользователя и возврата самого
значения ответа пользователя для дальнейшей передачи в переменную. */

const giveQuestion = (item) => {
  const question = console.log(`Question: ${item}`);
  return question;
}; /* В этой функции формируется вопрос для пользователя из текста и данных для вывода на экран. */

const randomNumber = (start, end) => {
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

const getDivisorArray = (num) => {
  const array = [];
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      array.push(i);
    }
  }
  return array;
}; /* Функция возвращает массив коллекцию делителей, на которые
переданное число может быть поделено без остатка. */

const typeCheck = (input) => {
  const temp = Number(input);
  let result;
  if (Number.isNaN(temp)) {
    result = input.toLowerCase();
  } else {
    result = temp;
  }
  return result;
}; /* Функция возвращает результат после проверки типа данны и приведения к нужному типу данных. */

const answerCheck = (input, count) => {
  let result;
  const userAnswer = askAnswer();
  const userAnswerCheck = typeCheck(userAnswer);
  if (userAnswerCheck === input) {
    console.log('Correct!');
    result = true;
    if (count === ROUNDS_COUNT) {
      console.log(`Congratulations, ${getName}!`);
    }
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${input}'\nLet's try again, ${getName}!`);
    result = false;
  }
  return result;
}; /* Функция возвращает результат проверки правильности ответа пользователя на вопрос. */

const gameEngine = (task, gameLogic) => {
  console.log(task);
  let counter = 0; /* Счётчик цикла while */
  while (counter !== ROUNDS_COUNT) {
    const resultGameLogic = gameLogic(); /* Вычисление
    математического выражения для дальнейшей проверки правильности ответа пользователя. */
    const result = resultGameLogic[0];
    const question = resultGameLogic[1];
    giveQuestion(question); /* Вопрос пользователю */

    counter += 1; /* Увеличение счетчика цикла */

    if (answerCheck(result, counter) === false) {
      break;
    } /* Выполнение проверки правильности ответа пользователя
    и остановка выполнения в случае неверного ответа. */
  }
};

export {
  askAnswer, randomNumber, getRandomItem, getDivisorArray,
  answerCheck, typeCheck, giveQuestion,
};
export default gameEngine;
