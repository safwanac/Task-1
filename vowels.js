function checkWrongOrWrite(str) {
  str = str.toLowerCase();

  var vowelCount = 0;
  var vowels = ["a", "e", "i", "o", "u"];

  for (var i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      vowelCount++;
    }

    if (vowelCount >= 3) {
      return false;
    }
  }

  return true;
}

console.log(checkWrongOrWrite("Helloo"));
console.log(checkWrongOrWrite("World"));
