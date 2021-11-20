function incrementString(strng: string): string {
  if (!strng.match(/\d+$/g)) return `${strng}1`;
  let num = strng.match(/\d+$/g)[0];
  const padded = (+num + 1).toString().padStart(num.length, "0");
  return strng.replace(/\d+$/, padded);
}

console.log(incrementString("foobar002"));

/////////////////////////////////// CLEAR SOLUTION /////////////////////////////////////
function incrementString2(strng: string): string {
  return strng.replace(/([0-8]|\d?9+)?$/, (e) => String(e ? +e + 1 : 1));
}

console.log(incrementString2("foobar34"));
