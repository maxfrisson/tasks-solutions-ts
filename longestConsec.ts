function longestConsec(strarr: string[], k: number): string {
  if (strarr.length == 0 || k > strarr.length || k <= 0) return "";

  let longStr = "";

  let newStr = [];

  for (let i = 0; i < strarr.length; i++) {
    newStr = strarr.slice(i, i + k);
    if (newStr.join("").length > longStr.length) {
      longStr = newStr.join("");
    }
  }

  return longStr;
}

console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3));
