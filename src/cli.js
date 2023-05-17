import readlineSync from 'readline-sync'; // это библиотека с Github позволяет работать в консоли и ожидать ответа пользователя. библиотека для чтения пользовательского ввода.

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  const normalizeName = `${name[0].toUpperCase()}${name.slice(1).toLowerCase()}`;
  console.log(`Hello, ${normalizeName}!`);
  return normalizeName;
};

export default greeting;
