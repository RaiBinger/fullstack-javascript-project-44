import gameEngine, {
  randomNumber, getRandomItem,
} from '../index.js';

const task = 'What number is missing in the progression?';

/**
 * Функция логики игры
 * @returns Правильный ответ, вопрос
 */
const generateRound = () => {
  const count = randomNumber(5, 10);
  const step = randomNumber(1, 10);
  const first = randomNumber(0, 10);
  const progression = [];

  for (let i = 0; i < count; i += 1) {
    if (!progression.length) {
      progression.push(first);
    } else {
      progression.push(progression[progression.length - 1] + step);
    }
  }

  const answer = getRandomItem(progression);
  const question = progression.join(' ').replace(answer, '..');
  return [answer, question];
};

const brainProgression = () => gameEngine(task, generateRound);

export default brainProgression;
