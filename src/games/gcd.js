import getRandomNumber from '../getRandomNumber.js';
import generateGame from '../index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const findGcd = (num1, num2) => {
  let number1 = Math.abs(num1);
  let number2 = Math.abs(num2);

  while (number2) {
    const prevValue = number2;
    number2 = number1 % number2;
    number1 = prevValue;
  }

  return number1;
};

const getGameData = () => {
  const number1 = getRandomNumber(1, 31);
  const number2 = getRandomNumber(1, 31);
  const question = `${number1} ${number2}`;
  const correctAnswer = `${findGcd(number1, number2)}`;

  return [question, correctAnswer];
};

const runGcdGame = () => generateGame(gameRules, getGameData);

export default runGcdGame;
