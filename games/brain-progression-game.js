import question, {
  randomizer, raunds, randomItem, logics,
} from '../src/index.js';

const isProgression = () => {
  console.log('What number is missing in the progression?');
  let counter = 0;
  while (counter !== raunds) {
    const randomCount = randomizer(5, 10); // Количество элементов в прогрессии
    const randomValue = randomizer(1, 10); // Разница между числами в прогрессии
    const randomStartCount = randomizer(0, 10); // Число с которого начинается прогрессия
    const progression = [];

    for (let i = 0; i < randomCount; i += 1) {
      if (!progression.length) {
        progression.push(randomStartCount);
      } else {
        progression.push(progression[progression.length - 1] + randomValue);
      }
    }

    const item = randomItem(progression);
    const progressionString = progression.join(' ').replace(item, '..');
    console.log(question(progressionString));

    counter += 1;

    if (logics(item, counter) === false) {
      break;
    }
  }
  return '';
};

export default isProgression;
