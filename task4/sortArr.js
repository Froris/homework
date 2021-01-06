module.exports = (arr1, arr2) => {
  const firstHalf = [];
  const secondHalf = [...arr1];

  if (arr1.length >= 1 && arr2.length <= 1000) {
    arr2.forEach((e2) => {
      arr1.forEach((e1) => {
        if (e1 === e2) {
          idx = secondHalf.indexOf(e1);
          firstHalf.push(e1);
          secondHalf.splice(idx, 1);
        }
      });
    });

    return firstHalf.concat(secondHalf.sort().reverse());
  } else throw new Error("Error: Arrays length must be more then 1 and less then 1000 ");
};
