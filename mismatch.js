function findMismatch(a, b) {
  let mismatchedNumbers = [];

  for (let i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) {
      mismatchedNumbers.push(a[i]);
    }
  }

  return mismatchedNumbers;
}

const arrayA = [1, 2, 4, 32, 12, 6, 8];
const arrayB = [2, 6, 10, 12, 14, 17];

const mismatchedNumbers = findMismatch(arrayA, arrayB);
console.log("Numbers present in A but not in B:", mismatchedNumbers);
