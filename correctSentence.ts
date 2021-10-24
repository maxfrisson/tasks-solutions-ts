// Correct the sentence, that starts with a capital letter and ends with a dot

function correctSentence(text: string): string {
  let result = text[0].toUpperCase() + text.slice(1);
  return text[text.length - 1] != "." ? result + "." : result;
}

console.log(correctSentence("greetings, friends"));
