var sentance = "i am a doctor";

console.log(message(sentance));

function message(sentance) {
  var splitSentence = sentance.split("");

  for (let i = 0; i < splitSentence.length; i++) {
    if (splitSentence[i] === " ") {
      splitSentence[i] = "-";
    }
  }
  return splitSentence.join("");
}
