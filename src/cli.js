import readlineSync from 'readline-sync'; //это библиотека с Github позволяет работать в консоли и ожидать ответа пользователя

export const userName = () => {
    const name = readlineSync.question('May I have your name? ');
    return `Hello, ${name}!`;
};