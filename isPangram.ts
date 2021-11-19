function isPangram(phrase: string): boolean {
  return (
    phrase
      .toLowerCase()
      .split("")
      .sort()
      .filter((x, i, arr) => /[a-z]/.test(x) && x != arr[i + 1]).length == 26
  );
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));

////////////////////////////// SOLUTION WITH SET //////////////////////////////////
function isPangram2(phrase: string): boolean {
  return new Set(phrase.toLowerCase().match(/[a-z]/g)).size === 26;
}

console.log(isPangram2("The quick brown fox jumps over the lazy dog."));
////////////////////////////////////////////////////////////////////////////////

////////////////////////////// SOLUTION WITH INCLUDES //////////////////////////
function isPangram3(phrase: string): boolean {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  return alphabet.split("").every((char) => phrase.toLowerCase().includes(char));
}

console.log(isPangram3("The quick brown fox jumps over the lazy dog."));
