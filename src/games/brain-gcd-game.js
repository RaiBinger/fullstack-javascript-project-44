import gameEngine, {
  randomNumber, getDivisorArray,
} from '../index.js';

const task = 'Find the greatest common divisor of given numbers.';

const getGcd = (array, num) => {
  let result = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (num % array[i] === 0) {
      result = array[i] > result ? array[i] : result;
    }
  }
  return result;
}; /* Функция возвращает из коллекции максимальный делитель из возможных для переданного числа */

const gcd = () => {
  const firstNumber = randomNumber(1, 10); /* Случайное значение из заданного диапазона. */
  const secondNumber = randomNumber(1, 10); /* Случайное значение из заданного диапазона. */
  const coupleNumbers = `${firstNumber} ${secondNumber}`; /* Текстовое представление для формирования вопроса пользователю. */
  const min = firstNumber < secondNumber ? firstNumber : secondNumber;
  /* Присвоение переменной минимального значения
  из двух случайных чисел. */
  const max = firstNumber > secondNumber ? firstNumber : secondNumber;
  /* Присвоение переменной максимального значения
  из двух случайных чисел. */
  const gcdMinCollect = getDivisorArray(min); /* Получение всех делителей минимального числа,
  которые делят его нацело */
  const result = getGcd(gcdMinCollect, max); /* Перебор всех делителей и поиск максимального
  значения делителя, который делит максимальное число нацело. */
  return [result, coupleNumbers];
};

const brainGcd = () => gameEngine(task, gcd);

export default brainGcd;
