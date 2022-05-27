function charCounter(string: string): any {
  let res = {};
  for (let i = 0; i < string.length; i++) {
    let current = string[i];
    if (!res[current]) {
      res[current] = 1;
    } else res[current]++;
  }
  return res;
}

console.log(charCounter("aasssba"));

//////////////////// FOREACH SOLUTION //////////////////////////
function charCounter2(string: string): any {
  let res = {};
  string.split("").forEach((x) => {
    res[x] ? res[x]++ : (res[x] = 1);
  });
  return res;
}

console.log(charCounter2("aasssba"));

//////////////////// REDUCE SOLUTION //////////////////////////

function charCounter3(string: string): any {
  return string.split("").reduce((counts, char) => {
    counts[char] = (counts[char] || 0) + 1;
    return counts;
  }, {});
}

console.log(charCounter3("aab"));
