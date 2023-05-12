import isQuestion, {
  getRandom, raunds, getRandomItem, letAnswerCheck,
} from '../src/index.js';

const isProgression = () => {
  console.log('What number is missing in the progression?');
  let counter = 0;
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
    }

    const item = getRandomItem(progression);
    const progressionString = progression.join(' ').replace(item, '..');
    console.log(isQuestion(progressionString));

    counter += 1;

    if (letAnswerCheck(item, counter) === false) {
      break;
    }
  }
};

export default isProgression;
