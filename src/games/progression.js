import getRandomNumber from '../getRandomNumber.js';
import generateGame from '../index.js';

const gameRules = 'What number is missing in the progression?';

const generateProgression = (firstNum, step, arrLength) => {
  const progressionArr = [];
  let prev = firstNum;

  for (let i = 1; i <= arrLength; i += 1) {
    progressionArr.push(prev);
    const current = prev + step;
    prev = current;
  }

  return progressionArr;
};

const getGameData = () => {
  const firstNum = getRandomNumber(1, 50);
  const step = getRandomNumber(2, 10);
  const arrLength = getRandomNumber(5, 10);
  const progression = generateProgression(firstNum, step, arrLength);
  const randomIndex = getRandomNumber(0, progression.length - 1);

  const correctAnswer = `${progression[randomIndex]}`;
  progression[randomIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

const runProgressionGame = () => generateGame(gameRules, getGameData);

export default runProgressionGame;
