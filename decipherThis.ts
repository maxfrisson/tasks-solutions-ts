function decipherThis(str: string): string {
  let str2 = str
    .split(" ")
    .map((word) => word.replace(/^\d+/g, String.fromCharCode(+word.match(/\d/g).join(""))))
    .join(" ");

  return str2.replace(/\b\w(\w?)(\w*?)(\w?)\b/g, (word, a, mid, b) => word[0] + b + mid + a);
}

console.log(decipherThis("72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o"));

/////////////////////////////////////// CLEAR SOLUTION ////////////////////////////////////////////
function decipherThis2(str: string): string {
  return str.replace(
    /\b(\d+)(\w?)(\w*?)(\w?)\b/g,
    (_, num, second, middle, last) => String.fromCharCode(num) + last + middle + second
  );
}

console.log(decipherThis2("72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o"));
//////////////////////////////////////////////////////////////////////////////////////////////////