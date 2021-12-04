function number2words(number: number): any {
  let dg = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  let tn = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  let tw = ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  let dig = `${number}`.slice(-3);
  let th = `${number}`.slice(-6,-3);
  let mil = `${number}`.slice(-9, -6);
  let bil = `${number}`.slice(-12, -9);
  let tr = `${number}`.slice(-15, -12);
  let quad = `${number}`.slice(-18, -15);
  let convert = (str) => {
    let strLen = str.length - 1;
    switch (str.length) {
      case 0:
        return "";
      case 1:
        return dg[str[str.length - 1]];
        break;
      case 2:
        if (str[strLen] === "0") return tw[+str[strLen - 1] - 1];
        if (str[strLen - 1] === "1") return tn[str[str.length - 1]];
        return `${tw[+str[0] - 1]} ${dg[str[str.length - 1]]}`
        break;
      case 3:
        if (str === '000') return "";
        if (str[strLen - 2] === "0") {
          if (str[strLen - 1] === "0") return `${dg[str[str.length - 1]]}`;
          if (str[strLen - 1] === "1") return `${tn[str[strLen]]}`;
          if (str[strLen] === "0") return `${tw[+str[strLen - 1] - 1]}`;
          return `${tw[+str[1] - 1]} ${dg[str[str.length - 1]]}`;
        }
        if (str[strLen] === "0") {
          if (str[strLen - 1] === "0") return `${dg[str[0]]} hundred`;
          return `${dg[str[0]]} hundred ${tw[+str[strLen - 1] - 1]}`;
        }
        if (str[strLen - 1] === "0") return `${dg[str[0]]} hundred ${dg[str[str.length - 1]]}`;
        if (str[strLen - 1] === "1") return `${dg[str[0]]} hundred ${tn[str[strLen]]}`;
        return `${dg[str[0]]} hundred ${tw[+str[1] - 1]} ${dg[str[str.length - 1]]}`;
    }
  };

  
  let quadrillion = `${convert(quad)} quadrillion`;
  let trillion = `${convert(tr)} trillion`;
  let billion = `${convert(bil)} billion`;
  let million = `${convert(mil)} million`;
  let thousand = !convert(th) ? null : `${convert(th)} thousand`;
  let hundred = `${convert(dig)} million`;


  if (number.toString().length > 15) return `${convert(quad)} quadrillion ${convert(tr)} trillion ${convert(bil)} billion ${convert(mil)} million ${convert(th)} thousand ${convert(dig)}`.trim();
  if (number.toString().length > 12) return `${convert(tr)} trillion ${convert(bil)} billion ${convert(mil)} million ${convert(th)} thousand ${convert(dig)}`.trim();
  if (number.toString().length > 9) return `${convert(bil)} billion ${convert(mil)} million ${convert(th)} thousand ${convert(dig)}`.trim();
  if (number.toString().length > 6) return `${convert(mil)} million ${convert(th)} thousand ${convert(dig)}`.trim();
  if (number.toString().length > 3) return `${convert(th)} thousand ${convert(dig)}`.trim();
  return convert(dig);
}

console.log(number2words(90000742));
