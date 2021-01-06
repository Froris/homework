const inputValidator = (input) => {
  const inputTypeErr = "Input must be a string.";
  const inputLengthErr = "Input value must be between 2 and 104 symbols length.";

  if (typeof input !== "string") {
    throw new Error(inputTypeErr);
  } else if (input.length <= 1 || input.length > 104) {
    throw new Error(inputLengthErr);
  }
};

module.exports = (input) => {
  // Список, по которому можно получить доступ к закрывающим скобкам
  const bracketsList = "[]{}()";
  // Индексы закрывающих скобок
  const closBrackIdx = [];

  inputValidator(input);

  // Проверяем скобки на парность
  for (let bracket of input) {
    let brackIdx = bracketsList.indexOf(bracket);
    // Находим закрывающие пары
    // Поскольку нумерация идёт с 0, закрывающие скобки будут с нечётным индексом
    if (brackIdx % 2 === 0) closBrackIdx.push(brackIdx + 1);
    // Если итератор доходит до закрывающих скобок в input
    // На ходим их индекс и убираем в обратном порядке
    else if (closBrackIdx.pop() !== brackIdx) {
      return false;
    }
  }

  // Если в массиве закрывающих скобок остались элементы - input непарный
  return closBrackIdx.length === 0;
};
