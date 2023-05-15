import gameEngine, {
  randomNumber, getRandomItem,
} from '../index.js';

const task = 'What number is missing in the progression?';

const getItemOfProgression = () => {
  const randomCount = randomNumber(5, 10); // Количество элементов в прогрессии
  const randomDiff = randomNumber(1, 10); // Разница между числами в прогрессии
  const randomStartCount = randomNumber(0, 10); // Число с которого начинается прогрессия
  const progression = [];

  for (let i = 0; i < randomCount; i += 1) {
    if (!progression.length) {
      progression.push(randomStartCount);
    } else {
      progression.push(progression[progression.length - 1] + randomDiff);
    }
  } /* Цикл для заполнения массива прогрессии. */

  const item = getRandomItem(progression); /* Присвоение переменной случайного элемента массива */
  const progressionString = progression.join(' ').replace(item, '..'); /* Текстовое представление для формирования вопроса пользователю. */
  return [item, progressionString];
};

const brainProgression = () => gameEngine(task, getItemOfProgression);

export default brainProgression;
