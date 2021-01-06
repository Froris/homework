// Стало интересно реализовать проверку не только с цифрами, но и со словами

const inputValidator = (input) => {
  const validChars = /^[a-zA-Zа-яА-Я]+$/;
  const validateNums = /^[0-9+(),-]+$/;

  if (typeof input === "string") {
    return validChars.test(input);
  }

  return validateNums.test(input);
};

module.exports = (input) => {
  // Проверка слов
  if (typeof input === "string") {
    input = input.toLowerCase();
    const charactersArr = input.split("");

    // Проверка на валидность
    if (!inputValidator(input)) throw new Error("Provided string must contain characters only.");

    // Проверка на полиндром
    if (charactersArr.join("") === charactersArr.reverse().join("")) return true;
    return false;
  }

  // Проверка цифр
  const numsArr = input.toString().split("");

  // Проверка на валидность
  if (!inputValidator(input)) throw new Error("Provided value must contain numbers only.");

  // Проверка на полиндром
  if (numsArr.join("") === numsArr.reverse().join("")) return true;
  return false;
};
