import answer, {
  question, randomNumber, name, raunds, randomIndex,
} from '../src/index.js';

const randomCount = randomNumber(5, 10);
const randomValue = randomNumber(1, 10);
const start = randomNumber(0, 10);
const progression = [];

console.log(`Количество элементов в прогрессии ${randomCount}`);
console.log(`Разница между числами в прогрессии ${randomValue}`);
console.log(`Число с которого начинается прогрессия ${start}`);

const isProgression = () => {
  for (let i = 0; i < randomCount; i += 1) {
    if (!progression.length) {
      progression.push(start);
    } else {
      progression.push(progression[progression.length - 1] + randomValue);
    }
    console.log(progression);
  }
  return progression;
};

export default isProgression;
