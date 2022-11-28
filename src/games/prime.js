import getRandomNumber from '../getRandomNumber.js';
import gameLogic from '../index.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// функция проверки простое ли число
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const sayPrimeOrNot = (num) => {
  const text = isPrime(num) ? 'yes' : 'no';
  return text;
};

const gameData = () => {
  const number = getRandomNumber(1, 101);
  const question = `${number}`;
  const correctAnswer = sayPrimeOrNot(number);

  return [question, correctAnswer];
};

const primeGame = () => gameLogic(gameRules, gameData);

export default primeGame;
