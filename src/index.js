/**
 * Библиотека для чтения пользовательского ответа из консоли
 */
import readlineSync from 'readline-sync';

import greeting from './cli.js';

/**
 * Константа для хранения имени пользователя
 */
const getName = greeting();

/**
 * Константа для хранения общего для всех игр количества раундов
 */
const ROUNDS_COUNT = 3;

/**
 * Функция запрашивает и возвращает ответ пользователя
 */
const askAnswer = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

/**
 * Функция выводит вопрос для пользователя на экран
 * @param {*} item - данные для вопроса
*/
const giveQuestion = (item) => {
  const question = console.log(`Question: ${item}`);
  return question;
};

/**
 * Функция возвращает случайное число
 * @param {number} start - нижняя граница
 * @param {number} end - верхняя граница
 */
const randomNumber = (start, end) => {
  const min = Math.ceil(start);
  const max = Math.floor(end);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Функция возвращает случайный элемент переданного массива.
 * @param {*} array - массив
 */
const getRandomItem = (array) => {
  const index = Math.floor(Math.random() * array.length);
  const item = array[index];
  return item;
};

/**
 * Функция возвращает массив делителей
 * @param {number} num - число
 */
const getDivisorArray = (num) => {
  const array = [];
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      array.push(i);
    }
  }
  return array;
};

/**
 * Функция возвращает результат проверки типа данных и преобразует
 * @param {*} input - ввод данных пользователя
 */
const typeCheck = (input) => {
  const temp = Number(input);
  let result;
  if (Number.isNaN(temp)) {
    result = input.toLowerCase();
  } else {
    result = temp;
  }
  return result;
};

/**
 * Функция возвращает результат проверки ответа пользователя.
 * @param {*} input - правильный ответ
 * @param {number} count - счетчик цикла
 */
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
};

/**
 * Функция игрового движка
 * @param {*} task - условие игры
 * @param {*} gameLogic - логика конкретной игры
 */
const gameEngine = (task, gameLogic) => {
  console.log(task);
  let counter = 0;
  while (counter !== ROUNDS_COUNT) {
    const resultGameLogic = gameLogic();
    const result = resultGameLogic[0];
    const question = resultGameLogic[1];
    giveQuestion(question);

    counter += 1;

    if (answerCheck(result, counter) === false) {
      break;
    }
  }
};

export {
  askAnswer, randomNumber, getRandomItem, getDivisorArray,
  answerCheck, typeCheck, giveQuestion,
};
export default gameEngine;
