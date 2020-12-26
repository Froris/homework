// Стало интересно реализовать проверку не только с цифрами, но и со словами

module.exports = (input) => {
  const validateCharacters = "abcdefghijklmnopqrstuvwxyz";
  const validateNums = "-0123456789";

  let errorMsg = "";

  // Проверка слов
  if (typeof input === "string") {
    input = input.toLowerCase();
    const charactersArr = input.split("");

    // Проверка на валидность
    charactersArr.some((char) => {
      if (validateCharacters.indexOf(char) === -1)
        return (errorMsg = "Provided string must contain characters only.");
    });

    // Проверка на полиндром
    if (errorMsg) return errorMsg;
    else if (charactersArr.join("") === charactersArr.reverse().join("")) return true;
    else return false;
  }

  // Проверка цифр
  const numsArr = input.toString().split("");

  // Проверка на валидность
  numsArr.some((num) => {
    if (validateNums.indexOf(num) === -1) return (errorMsg = "Provided value must contain numbers only.");
  });

  // Проверка на полиндром
  if (errorMsg) return errorMsg;
  else if (numsArr.join("") === numsArr.reverse().join("")) return true;
  else return false;
};
