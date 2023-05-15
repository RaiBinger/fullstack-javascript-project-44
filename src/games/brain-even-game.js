import gameEngine, {
  randomNumber,
} from '../index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no"';

const hasEven = (num) => {
  let result = '';
  if (num % 2 === 0) {
    result = 'yes';
  } else {
    result = 'no';
  }
  return result;
}; /* Функция возвращает результат проверки переданного числа на четность. */

const hasEvenOrOdd = () => {
  const num = randomNumber(1, 10); /* Случайное значение
  из заданного диапазона */
  const result = hasEven(num);
  return [result, num];
};

const brainEven = () => gameEngine(task, hasEvenOrOdd);

export default brainEven;
