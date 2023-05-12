import isQuestion, {
  getRandom, raunds, getDeviderArray, getGcd, letAnswerCheck,
} from '../src/index.js';

const isGcd = () => {
  console.log('Find the greatest common divisor of given numbers.');
  let counter = 0; /* Счётчик цикла while */
  while (counter !== raunds) {
    const first = getRandom(1, 10); /* Случайное значение из заданного диапазона. */
    const second = getRandom(1, 10); /* Случайное значение из заданного диапазона. */
    const coupleNum = `${first} ${second}`; /* Текстовое представление для формирования вопроса пользователю. */

    isQuestion(coupleNum); /* Вопрос пользователю */

    const min = first < second ? first : second; /* Присвоение переменной минимального значения
    из двух случайных чисел. */
    const max = first > second ? first : second; /* Присвоение переменной максимального значения
    из двух случайных чисел. */
    const gcdMinCollect = getDeviderArray(min); /* Получение всех делителей минимального числа,
    которые делят его нацело */
    const gcd = getGcd(gcdMinCollect, max); /* Перебор всех делителей и поиск максимального
    значения делителя, который делит максимальное число нацело. */

    counter += 1; /* Увеличение счетчика цикла */

    if (letAnswerCheck(gcd, counter) === false) {
      break;
    } /* Выполнение проверки правильности ответа пользователя
    и остановка выполнения в случае неверного ответа. */
  }
};

export default isGcd;
