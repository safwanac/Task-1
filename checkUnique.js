console.log(checkUnique("mobile"));
console.log(checkUnique("calculator"));

function checkUnique(word) {
  for (let i = 0; i < word.length; i++) {
    for (let j = i + 1; j < word.length; j++) {
      if (word[i] === word[j]) {
        return false;
      }
    }
  }
  return true;
}
