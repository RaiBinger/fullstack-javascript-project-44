import answer, {
  question, randomizer, name, raunds, randomIndex,
} from '../src/index.js';

const isProgression = () => {
  console.log('What number is missing in the progression?');
  let counter = 0;
  let progression = [];
  while (counter !== raunds) {
    const randomCount = randomizer(5, 10); // Количество элементов в прогрессии
    const randomValue = randomizer(1, 10); // Разница между числами в прогрессии
    const randomStartCount = randomizer(0, 10); // Число с которого начинается прогрессия
    progression = [];
    for (let i = 0; i < randomCount; i += 1) {
      if (!progression.length) {
        progression.push(randomStartCount);
      } else {
        progression.push(progression[progression.length - 1] + randomValue);
      }
    }
    const randomIndexCount = randomIndex(progression);
    const randomItem = progression[randomIndexCount];
    const temp = progression.join(' ').replace(randomItem, '..');
    console.log(question(temp));
    const userAnswer = answer();
    if (Number(userAnswer) === randomItem) {
      console.log('Correct!');
    } else {
      return `${userAnswer} is wrong answer ;(. Correct answer was ${randomItem}\nLet's try again, ${name}!`;
    }
    counter += 1;
    if (counter === raunds) {
      return `Congratulations, ${name}!`;
    }
  }
  return '';
};

export default isProgression;
