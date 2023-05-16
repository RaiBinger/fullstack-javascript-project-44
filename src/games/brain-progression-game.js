import gameEngine, {
  randomNumber, getRandomItem,
} from '../index.js';

const task = 'What number is missing in the progression?';

/**
 * Функция логики игры
 * @returns Правильный ответ, item для вопроса
 */
const getItemOfProgression = () => {
  const randomCount = randomNumber(5, 10);
  const randomDiff = randomNumber(1, 10);
  const randomStartCount = randomNumber(0, 10);
  const progression = [];

  for (let i = 0; i < randomCount; i += 1) {
    if (!progression.length) {
      progression.push(randomStartCount);
    } else {
      progression.push(progression[progression.length - 1] + randomDiff);
    }
  }

  const item = getRandomItem(progression);
  const progressionString = progression.join(' ').replace(item, '..');
  return [item, progressionString];
};

const brainProgression = () => gameEngine(task, getItemOfProgression);

export default brainProgression;
