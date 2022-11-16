import getRandomNumber from "../getRandomNumber.js";
import gameLogic from "../index.js";

const gameRules = "Find the greatest common divisor of given numbers.";

// функция получения наибольшего общего делителя
const gcd = (num1, num2) => {
  let number1 = num1;
  let number2 = num2;

  while (number1 !== number2) {
    if (number1 > number2) {
      number1 -= number2;
    } else {
      number2 -= number1;
    }
  }
  const result = number1;

  return result;
};

const gameData = () => {
  const number1 = getRandomNumber(1, 31);
  const number2 = getRandomNumber(1, 31);
  const question = `${number1} ${number2}`;
  const correctAnswer = `${gcd(number1, number2)}`;

  return [question, correctAnswer];
};

const gcdGame = () => gameLogic(gameRules, gameData);

export default gcdGame;
