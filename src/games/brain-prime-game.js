import gameEngine, {
  randomNumber, getDivisorArray,
} from '../index.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

/**
 * Функция проверяет простое число или нет
 * @param {*} array - массив делителей
 * @returns Правильный ответ
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
 * @returns Правильный ответ, item для вопроса
 */
const primeNumber = () => {
  const num = randomNumber(2, 20);
  const divisorArray = getDivisorArray(num);
  const result = hasPrimeNum(divisorArray);
  return [result, num];
};

const brainPrime = () => gameEngine(task, primeNumber);

export default brainPrime;
