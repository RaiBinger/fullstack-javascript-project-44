import isQuestion, {
  getRandom, raunds, isEven, letAnswerCheck,
} from '../src/index.js';

const isEvenNumber = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  let counter = 0; /* Счётчик цикла while */
  while (counter !== raunds) {
    const randomNum = getRandom(1, 10); /* Случайное значение
    из заданного диапазона */

    isQuestion(randomNum); /* Вопрос пользователю */

    const result = isEven(randomNum); /* Проверка случайного числа на четность, для дальнейшей
    проверки правильности ответа пользователя. */

    counter += 1; /* Увеличение счетчика цикла */

    if (letAnswerCheck(result, counter) === false) {
      break;
    } /* Выполнение проверки правильности ответа пользователя
    и остановка выполнения в случае неверного ответа. */
  }
};

export default isEvenNumber;
