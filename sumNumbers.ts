// Sum the numbers in a given text.

function sumNumbers(test: string): number {
  var sum = 0;
  var arr = test.match(/\b\d+\b/g);
  if (arr) for (let i of arr) sum += Number(i);
  return sum;
}

console.log(
  sumNumbers(
    "This picture is an oil on canvas " +
      "painting by Danish artist Anna " +
      "Petersen between 1845 and 1910 year"
  )
);
