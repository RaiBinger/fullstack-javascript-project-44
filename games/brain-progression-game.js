import answer, {
  question, randomizer, name, raunds, randomItem,
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
    const item = randomItem(progression);
    const progressionString = progression.join(' ').replace(item, '..');
    // const result = item;
    console.log(question(progressionString));

    const userAnswer = answer();
    if (Number(userAnswer) === item) {
      console.log('Correct!');
    } else {
      return `${userAnswer} is wrong answer ;(. Correct answer was ${item}\nLet's try again, ${name}!`;
    }
    counter += 1;
    if (counter === raunds) {
      return `Congratulations, ${name}!`;
    }
  }
  return '';
};

export default isProgression;
