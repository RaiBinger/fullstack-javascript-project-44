import answer, {
  question, randomNumber, name, randomOperator,
} from '../src/index.js';

const isExpression = () => {
  console.log('What is the result of the expression?');
  let i = 0;
  while (i !== 3) {
    const expression = `${Number(randomNumber(0, 100))} ${randomOperator()} ${Number(randomNumber(0, 100))}`;
    console.log(question(expression));
    // const result = expression.split(' ');
    const result = eval(expression);
    console.log(result);
    // let sum = '';
    // for (let j = 0; j < result.length; j += 1) {
    //   sum += +result[j];
    //   console.log(typeof j);
    // }
    // console.log(sum);
    i += 1;
  }
};

export default isExpression;
