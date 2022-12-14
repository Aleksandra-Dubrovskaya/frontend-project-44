import getRandomNumber from '../getRandomNumber.js';
import buildGame from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getGameData = () => {
  const number = getRandomNumber();
  const question = `${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const runEvenGame = () => buildGame(gameRules, getGameData);

export default runEvenGame;
