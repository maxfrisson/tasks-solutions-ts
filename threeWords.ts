// You should check if the string contains three words in succession.

function threeWords(str: string): boolean {
  let strArr = str.split(" ");
  let result = 0;
  strArr.map((item) => {
    let expWord = /[a-z]+/;
    if (expWord.test(item)) {
      result++;
    } else if (result >= 3) {
      return;
    } else {
      result *= 0;
    }
  });
  return result >= 3 ? true : false;
}

console.log(threeWords("Hello World hello"));
