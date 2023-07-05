const numbers1 = [1, 2, 0, 3, 4];
console.log(numbers(numbers1));

function numbers(NumberList) {
  let zeroCount = 0;

  for (let i = 0; i < NumberList.length; i++) {
    if (NumberList[i] === 0) {
      zeroCount++;

      if (zeroCount < 1) {
        return false;
      }
    }
  }

  return zeroCount === 1;
}
