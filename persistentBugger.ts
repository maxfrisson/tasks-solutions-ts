function persistence(num) {
  let result = 0;
  function recursive(num) {
    num = num
      .toString()
      .split("")
      .reduce((a, b) => +a * +b);
    result++;
    return num.length === 1 ? result : recursive(num);
  }
  recursive(num);
  return result - 1;
}

console.log(persistence(999));

function persistence2(num) {
  return `${num}`.length > 1
    ? 1 +
        persistence2(
          `${num}`
            .split("")
            .map((x) => Number(x))
            .reduce((a, b) => a * b)
        )
    : 0;
}

console.log(persistence2(39));
