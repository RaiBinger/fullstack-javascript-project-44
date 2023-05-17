/**
 * Библиотека для чтения пользовательского ответа из консоли
 */
import readlineSync from 'readline-sync';

import greeting from './cli.js';

/**
 * Константа для хранения общего для всех игр количества раундов
 */
const ROUNDS_COUNT = 3;

/**
 * Функция возвращает случайное число
 * @param {number} start - нижняя граница
 * @param {number} end - верхняя граница
 * @returns случайное число
 */
const randomNumber = (start, end) => {
  const min = Math.ceil(start);
  const max = Math.floor(end);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Функция возвращает случайный элемент переданного массива.
 * @param {*} array - массив
 * @returns случайный элемент массива
 */
const getRandomItem = (array) => {
  const index = Math.floor(Math.random() * array.length);
  const item = array[index];
  return item;
};

/**
 * Функция возвращает массив делителей
 * @param {number} num - число
 * @returns массив
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
 * @returns число или строка
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
 * @param {*} answer - правильный ответ
 * @param {number} count - счетчик цикла
 * @param {string} name - имя пользователя
 * @returns true or false
 */
const answerCheck = (answer, count, name) => {
  let result;
  const userAnswer = readlineSync.question('Your answer: ');
  const userAnswerCheck = typeCheck(userAnswer);
  if (userAnswerCheck === answer) {
    console.log('Correct!');
    result = true;
    if (count === ROUNDS_COUNT) {
      console.log(`Congratulations, ${name}!`);
    }
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'\nLet's try again, ${name}!`);
    result = false;
  }
  return result;
};

/**
 * Функция игрового движка
 * @param {*} task - условие игры
 * @param {*} generateRound - логика конкретной игры
 */
const gameEngine = (task, generateRound) => {
  const name = greeting();
  console.log(task);
  let counter = 0;
  while (counter !== ROUNDS_COUNT) {
    const resultRound = generateRound();
    const answer = resultRound[0];
    const question = resultRound[1];
    console.log(`Question: ${question}`);

    counter += 1;

    if (answerCheck(answer, counter, name) === false) {
      break;
    }
  }
};

export {
  randomNumber, getRandomItem, getDivisorArray,
};
export default gameEngine;
