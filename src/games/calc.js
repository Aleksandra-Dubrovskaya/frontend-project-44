import getRandomNumber from "../getRandomNumber.js";
import gameLogic from "../index.js";

// задаем правила игры
const gameRules = "What is the result of the expression?";

// функция получения знака математической операции
const operators = ["+", "-", "*"];
const getRandomOperator = (arr) => arr[getRandomNumber(0, arr.length - 1)];

// функция вычисления уравнения
const calcEquation = (num1, num2, operator) => {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    default:
      return null;
  }
};

const gameData = () => {
  const operator = getRandomOperator(operators);
  const number1 = getRandomNumber(1, 31);
  const number2 = getRandomNumber(1, 31);
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = `${calcEquation(number1, number2, operator)}`;

  return [question, correctAnswer];
};

const calcGame = () => gameLogic(gameRules, gameData);

export default calcGame;
