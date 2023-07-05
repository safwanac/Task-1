function removeDuplicate(str) {
  var result = "";
  var charSet = new Set();

  for (var i = 0; i < str.length; i++) {
    var char = str.charAt(i);
    if (!charSet.has(char)) {
      result += char;
      charSet.add(char);
    }
  }

  return result;
}

var input = "calculator";
var output = removeDuplicate(input);
console.log(output);
