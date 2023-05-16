import gameEngine, {
  randomNumber, getDivisorArray,
} from '../index.js';

const task = 'Find the greatest common divisor of given numbers.';

/**
 * Функция возвращает наибольший общий делитель
 * @param {*} array - массив делителей
 * @param {*} num - проверяемое число
 * @returns Наибольший общий делитель
 */
const getGcd = (array, num) => {
  let result = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (num % array[i] === 0) {
      result = array[i] > result ? array[i] : result;
    }
  }
  return result;
};

/**
 * Функция логики игры
 * @returns Правильный ответ, item для вопроса
 */
const gcd = () => {
  const firstNumber = randomNumber(1, 10);
  const secondNumber = randomNumber(1, 10);
  const coupleNumbers = `${firstNumber} ${secondNumber}`;
  const min = firstNumber < secondNumber ? firstNumber : secondNumber;
  const max = firstNumber > secondNumber ? firstNumber : secondNumber;
  const gcdMinCollect = getDivisorArray(min);
  const result = getGcd(gcdMinCollect, max);
  return [result, coupleNumbers];
};

const brainGcd = () => gameEngine(task, gcd);

export default brainGcd;
