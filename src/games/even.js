import getRandomNumber from '../getRandomNumber.js';
import gameLogic from '../index.js';

// задаем правила игры
const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

// функция проверки числа на четность
const isEven = (num) => num % 2 === 0;

const sayEvenOrNot = (num) => {
  const text = isEven(num) ? 'yes' : 'no';
  return text;
};

const gameData = () => {
  const number = getRandomNumber(1, 101);
  const question = `${number}`;
  const correctAnswer = sayEvenOrNot(number);

  return [question, correctAnswer];
};

const evenGame = () => gameLogic(gameRules, gameData);

export default evenGame;
