// функция генерации случайного числа
const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export default getRandomNumber;
