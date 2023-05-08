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

const operatorsArray = ['+', '-', '*'];

const randomOperator = () => {
  const random = Math.floor(Math.random() * operatorsArray.length);
  const randomValue = operatorsArray[random];
  return randomValue;
};

export {
  question, randomNumber, name, randomOperator, raunds,
};
export default answer;
