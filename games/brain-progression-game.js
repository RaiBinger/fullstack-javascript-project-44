import isQuestion, {
  getRandom, raunds, getRandomItem, letAnswerCheck,
} from '../src/index.js';

const isProgression = () => {
  console.log('What number is missing in the progression?');
  let counter = 0; /* Счётчик цикла while */
  while (counter !== raunds) {
    const randomCount = getRandom(5, 10); // Количество элементов в прогрессии
    const randomValue = getRandom(1, 10); // Разница между числами в прогрессии
    const randomStartCount = getRandom(0, 10); // Число с которого начинается прогрессия
    const progression = [];

    for (let i = 0; i < randomCount; i += 1) {
      if (!progression.length) {
        progression.push(randomStartCount);
      } else {
        progression.push(progression[progression.length - 1] + randomValue);
      }
    } /* Цикл для заполнения массива прогрессии. */

    const item = getRandomItem(progression); /* Присвоение переменной случайного элемента массива */
    const progressionString = progression.join(' ').replace(item, '..'); /* Текстовое представление для формирования вопроса пользователю. */

    isQuestion(progressionString); /* Вопрос пользователю */

    counter += 1; /* Увеличение счетчика цикла */

    if (letAnswerCheck(item, counter) === false) {
      break;
    } /* Выполнение проверки правильности ответа пользователя
    и остановка выполнения в случае неверного ответа. */
  }
};

export default isProgression;
