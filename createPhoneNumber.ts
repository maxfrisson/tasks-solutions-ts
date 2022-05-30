function createPhoneNumber(numbers: number[]): string {
  return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

//////////////////////////////// REPLACE SOLUTION ////////////////////////////////
function createPhoneNumber2(numbers: number[]): string {
  let format = "(xxx) xxx-xxxx";
  for (let i = 0; i < numbers.length; i++) {
    format.replace("x", numbers[i].toString());
  }
  return format;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

/////////////////////////////// REGEX GROUP SOLUTION /////////////////////////////
function createPhoneNumber3(numbers: number[]): string {
  return numbers.join("").replace(/(...)(...)(.*)/, "($1) $2-$3");
}
console.log(createPhoneNumber3([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

/////////////////////////////// REGEX GROUP SOLUTION #2 ///////////////////////////
function createPhoneNumber4(numbers: number[]): string {
  return numbers.join("").replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
}
console.log(createPhoneNumber4([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

/////////////////////////////// REDUCE-REPLACE SOLUTION ///////////////////////////
function createPhoneNumber5(numbers: number[]): string {
  return numbers.reduce((p, c) => p.replace("x", c.toString()), "(xxx) xxx-xxxx");
}
console.log(createPhoneNumber5([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
