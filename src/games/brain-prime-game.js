import gameEngine, {
  randomNumber, getDivisorArray,
} from '../index.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

/**
 * Функция проверяет простое число или нет
 * @param {*} array - массив делителей
 * @returns Да или нет
 */
const hasPrimeNum = (array) => {
  let result = '';
  if (array.length === 2) {
    result = 'yes';
  } else {
    result = 'no';
  }
  return result;
};

/**
 * Функция логики игры
 * @returns Правильный ответ, вопрос
 */
const generateRound = () => {
  const question = randomNumber(2, 20);
  const divisorArray = getDivisorArray(question);
  const answer = hasPrimeNum(divisorArray);
  return [answer, question];
};

const brainPrime = () => gameEngine(task, generateRound);

export default brainPrime;
