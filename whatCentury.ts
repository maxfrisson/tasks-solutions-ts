function whatCentury(year: string): string {
  let obj = {
    "1": "st",
    "2": "nd",
    "3": "rd",
    "4": "th",
    "5": "th",
    "6": "th",
    "7": "th",
    "8": "th",
    "9": "th",
    "0": "th",
  };

  let splitYear = year.split("");
  let century = undefined;
  if (splitYear.length <= 2) {
    return "1st";
  } else if (splitYear.length == 3) {
    century = +splitYear[0] + 1;
    return century + obj[century];
  }
  century = String(+splitYear.slice(0, 2).join("") + 1);
  if (year == "2000") return "20th";
  if (century[0] == 1) return century + "th";
  return century + obj[century[1]];
}

console.log(whatCentury("1999"));
console.log(whatCentury("2000"));
console.log(whatCentury("2154"));
console.log(whatCentury("2269"));
console.log(whatCentury("1369"));
console.log(whatCentury("49"));
