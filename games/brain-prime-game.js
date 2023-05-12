import isQuestion, {
  getRandom, raunds, getDeviderArray, isPrimeNum, letAnswerCheck,
} from '../src/index.js';

const isPrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let counter = 0; /* Счётчик цикла while */
  while (counter !== raunds) {
    const num = getRandom(2, 20); /* Случайное значение из заданного диапазона. */
    const deviders = getDeviderArray(num); /* Получение массива коллекции делителей, на которые
    переданное число может быть поделено без остатка. */

    isQuestion(num); /* Вопрос пользователю */

    const prime = isPrimeNum(deviders); /* Проверка числа простое или нет. */

    counter += 1; /* Увеличение счетчика цикла */

    if (letAnswerCheck(prime, counter) === false) {
      break;
    } /* Выполнение проверки правильности ответа пользователя
    и остановка выполнения в случае неверного ответа. */
  }
};

export default isPrime;
