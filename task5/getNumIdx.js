module.exports = (numArr, num) => {
  let requestedIdx = numArr.indexOf(num);
  if (requestedIdx > -1) return requestedIdx;
  else {
    numArr.some((currNum, idx) => {
      if (num > currNum && num < numArr[idx + 1]) {
        requestedIdx = idx + 1;
        return true;
      } else {
        requestedIdx = idx;
        return true;
      }
    });

    return requestedIdx;
  }
};
