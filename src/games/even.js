import getRandomNumber from "../getRandomNumber.js";
import gameLogic from "../index.js";

// функция проверки числа на четность
const isEven = (num) => (num % 2 === 0 ? "yes" : "no");

// задаем правила игры
const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameData = () => {
  const generateNumber = getRandomNumber(1, 101);
  const question = `${generateNumber}`;
  const correctAnswer = isEven(generateNumber);

  return [question, correctAnswer];
};

const evenGame = () => gameLogic(gameRules, gameData);

export default evenGame;
