import readlineSync from 'readline-sync'; // это библиотека с Github позволяет работать в консоли и ожидать ответа пользователя. библиотека для чтения пользовательского ввода.
import greeting from './cli.js';

const name = greeting();

const raunds = 3;

const answer = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

const question = (item) => {
  const questionUser = `Question: ${item}`;
  return questionUser;
};

const randomNumber = (start, end) => {
  const min = Math.ceil(start);
  const max = Math.floor(end);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomIndex = (array) => {
  const index = Math.floor(Math.random() * array.length);
  return index;
};

const getGcdArray = (num) => {
  const gcdArray = [];
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      gcdArray.push(i);
    }
  }
  return gcdArray;
};

const commonGcd = (array, num) => {
  let result = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (num % array[i] === 0) {
      result = array[i] > result ? array[i] : result;
    }
  }
  return result;
};

export {
  question, randomNumber, name, randomIndex, raunds, getGcdArray, commonGcd,
};
export default answer;
