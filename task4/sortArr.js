module.exports = (arr1, arr2) => {
  const firstHalf = [];
  const secondHalf = [...arr1];

  if (arr1.length >= 1 && arr2.length <= 1000) {
    for (let el of arr2) {
      secondHalf.forEach((currEl, i) => {
        if (currEl === el) {
          const currNum = secondHalf.splice(i, 1);
          firstHalf.push(currNum[0]);
        }
      });
    }

    return firstHalf.concat(secondHalf.sort());
  } else return "Error: Arrays length must be more then 1 and less then 1000 ";
};
