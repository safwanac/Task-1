const array = [10, 20, 30, 40, 50];
const number = 20;
const index = search(array, number);

function search(a, number) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === number) {
      return i;
    }
  }
  return -1;
}

if (index !== -1) {
  console.log(`Number ${number} found at index ${index}`);
} else {
  console.log(`Number ${number} not found in the array`);
}
