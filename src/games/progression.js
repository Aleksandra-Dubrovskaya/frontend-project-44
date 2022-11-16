import getRandomNumber from "../getRandomNumber.js";
import gameLogic from "../index.js";

const gameRules = "What number is missing in the progression?";

// функция для получения прогрессии и правильного ответа
const progression = (firstNum, step, arrLength) => {
  const progressionArr = [];
  let prev = firstNum;

  for (let i = 1; i <= arrLength; i += 1) {
    progressionArr.push(prev);
    const current = prev + step;
    prev = current;
  }

  const index = getRandomNumber(0, progressionArr.length - 1);
  const element = progressionArr[index];

  for (let i = 0; i <= progressionArr.length; i += 1) {
    if (progressionArr[index] === element) {
      progressionArr[index] = "..";
    }
  }

  return [progressionArr, element];
};

const gameData = () => {
  const firstNum = getRandomNumber(1, 50);
  const step = getRandomNumber(2, 10);
  const arrLength = getRandomNumber(5, 10);
  const [progressionArr, element] = progression(firstNum, step, arrLength);
  const question = progressionArr.join(" ");
  const correctAnswer = `${element}`;

  return [question, correctAnswer];
};

const progressionGame = () => gameLogic(gameRules, gameData);

export default progressionGame;
