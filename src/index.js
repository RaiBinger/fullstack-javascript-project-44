import readlineSync from 'readline-sync'; // это библиотека с Github позволяет работать в консоли и ожидать ответа пользователя. библиотека для чтения пользовательского ввода.
import greeting from './cli.js';

const name = greeting();

const answer = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

const question = (item) => {
  const questionUser = `Question: ${item}`;
  return questionUser;
};

const randomNumber = () => {
  const min = Math.ceil(1);
  const max = Math.floor(10);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const operatorsArray = ['+', '-', '*'];

const randomOperator = () => {
  const random = Math.floor(Math.random() * operatorsArray.length);
  const randomValue = operatorsArray[random];
  return randomValue;
};

export {
  question, randomNumber, name, randomOperator,
};
export default answer;
