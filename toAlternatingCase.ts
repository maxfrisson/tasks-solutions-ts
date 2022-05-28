function toAlternatingCase(str) {
  let res = [];
  for (let i = 0; i < str.length; i++) {
    if (/[a-z]/.test(str[i])) res.push(str[i].toUpperCase());
    else if (/[A-Z]/.test(str[i])) res.push(str[i].toLowerCase());
    else res.push(str[i]);
  }
  return res.join("");
}

console.log(toAlternatingCase("HELLO world"));

////////////////////////// ES6 SOLUTION //////////////////////////////

function toAlternatingCase2(str) {
  return str
    .split("")
    .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
    .join("");
}

console.log(toAlternatingCase2("HELLO world"));
