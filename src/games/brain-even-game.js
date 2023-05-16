import gameEngine, {
  randomNumber,
} from '../index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no"';

/**
 * Функция возвращает результат проверки на четность
 * @param {number} num - число
 * @returns {string} Да или Нет
 */
const hasEven = (num) => {
  let result = '';
  if (num % 2 === 0) {
    result = 'yes';
  } else {
    result = 'no';
  }
  return result;
};

/**
 * Функция логики игры
 * @returns Правильный ответ, item для вопроса
 */
const generateRound = () => {
  const question = randomNumber(1, 10);
  const answer = hasEven(question);
  return [answer, question];
};

const brainEven = () => gameEngine(task, generateRound);

export default brainEven;
