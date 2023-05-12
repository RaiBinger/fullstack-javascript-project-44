import readlineSync from 'readline-sync'; // это библиотека с Github позволяет работать в консоли и ожидать ответа пользователя. библиотека для чтения пользовательского ввода.
import greeting from './cli.js';

const name = greeting(); /* Константа для хранения результата работы
функции приветствия, чтобы можно было дальше использовать имя
пользователя и не вызывать функцию повторно. */

const raunds = 3; /* Константа для хранения общего для всех игр
количества раундов, чтобы при желании их количество можно было
изменить в одном месте сразу для всех игр. */

const answer = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
}; /* Функция для получения ответа пользователя и возврата самого
значения ответа пользователя для дальнейшей передачи в переменную. */

const question = (item) => {
  const questionUser = `Question: ${item}`;
  return questionUser;
}; /*  */

const isEven = (num) => {
  let result = '';
  if (num % 2 === 0) {
    result = 'yes';
  } else {
    result = 'no';
  }
  return result;
}; /*  */

const randomizer = (start, end) => {
  const min = Math.ceil(start);
  const max = Math.floor(end);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}; /*  */

const randomItem = (array) => {
  const index = Math.floor(Math.random() * array.length);
  const item = array[index];
  return item;
}; /*  */

const getDeviderArray = (num) => {
  const array = [];
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      array.push(i);
    }
  }
  return array;
}; /*  */

const commonGcd = (array, num) => {
  let result = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (num % array[i] === 0) {
      result = array[i] > result ? array[i] : result;
    }
  }
  return result;
}; /*  */

const getPrimeNum = (array) => {
  let result = '';
  if (array.length === 2) {
    result = 'yes';
  } else {
    result = 'no';
  }
  return result;
}; /*  */

const letTypeCheck = (input) => {
  const temp = Number(input);
  let result;
  if (Number.isNaN(temp)) {
    result = input.toLowerCase();
  } else {
    result = temp;
  }
  return result;
};

const logics = (input, count) => {
  let result;
  const userAnswer = answer();
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
};

export {
  answer, randomizer, name, randomItem, raunds, getDeviderArray,
  isEven, getPrimeNum, commonGcd, logics, letTypeCheck,
};
export default question;
