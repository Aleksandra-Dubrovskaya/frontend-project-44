import readlineSync from "readline-sync";

// задаем число раундов игры
const roundsCount = 3;

// функция общей логики
const gameLogic = (rules, data) => {
  console.log("Welcome to the Brain Games!");
  const userName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${userName}!`);
  console.log(rules);

  for (let i = 1; i <= roundsCount; i += 1) {
    const [question, correctAnswer] = data();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question("Your answer: ");

    if (userAnswer !== correctAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log("Correct!");
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameLogic;
