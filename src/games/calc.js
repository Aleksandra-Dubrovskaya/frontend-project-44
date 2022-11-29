import getRandomNumber from '../getRandomNumber.js';
import generateGame from '../index.js';

const gameRules = 'What is the result of the expression?';

const operators = ['+', '-', '*'];
const getRandomOperator = (arr) => arr[getRandomNumber(0, arr.length - 1)];

const calcEquation = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const getGameData = () => {
  const operator = getRandomOperator(operators);
  const number1 = getRandomNumber(1, 31);
  const number2 = getRandomNumber(1, 31);
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = `${calcEquation(number1, number2, operator)}`;

  return [question, correctAnswer];
};

const runCalcGame = () => generateGame(gameRules, getGameData);

export default runCalcGame;
