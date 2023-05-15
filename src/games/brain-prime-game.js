import gameEngine, {
  randomNumber, getDivisorArray,
} from '../index.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const hasPrimeNum = (array) => {
  let result = '';
  if (array.length === 2) {
    result = 'yes';
  } else {
    result = 'no';
  }
  return result;
}; /* Функция возвращает результат проверки числа простое или не простое. */

const primeNumber = () => {
  const num = randomNumber(2, 20); /* Случайное значение из заданного диапазона. */
  const divisorArray = getDivisorArray(num); /* Получение массива коллекции делителей, на которые
  переданное число может быть поделено без остатка. */
  const result = hasPrimeNum(divisorArray); /* Проверка числа простое или нет. */
  return [result, num];
};

const brainPrime = () => gameEngine(task, primeNumber);

export default brainPrime;
