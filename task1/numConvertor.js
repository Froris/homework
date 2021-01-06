const inputValidator = (input) => {
  const romanRegexp = /^(?=[MDCLXVI])M*D?C{0,4}L?X{0,4}V?I{0,4}$/;

  if (typeof input !== "string" || input.length < 1) {
    throw new Error("Please provide not empty string.");
  }

  if (!romanRegexp.test(input)) throw new Error("Error! Input string must contain roman numerals.");

  if (input.length > 15) throw new Error("Provide correct roman number.");
};

module.exports = (romNum) => {
  inputValidator(romNum);

  const romanChr = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let num = romanChr[romNum.charAt(0)];
  let pre, curr;

  for (var i = 1; i < romNum.length; i++) {
    curr = romanChr[romNum.charAt(i)];
    pre = romanChr[romNum.charAt(i - 1)];

    if (curr && pre && curr <= pre) {
      num += curr;
      // Если первая пара начинается с единицы - получаем значение пары
      // IV: I(pre) => (1 * 2); V(curr) => 5; num => num(1) - 2 + 5 = 4
    } else if (curr >= pre) {
      num = num - pre * 2 + curr;
    }
  }

  return num;
};
