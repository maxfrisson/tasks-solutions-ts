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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const z = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const y = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const w = ['', ' thousand', ' million', ' billion', ' trillion', ' quadrillion'];

const intToEnglish = (a, b = (""+a).match(/\d{1,3}(?=(\d{3})*$)/g)) => {  
  const conv = (a, [b,c] = a.split(/(?<=\d)(?=\d{2})/g))=> [+b ? (z[+b] + ' hundred'):'', c < 20 ? z[+c] : [y[c[0]], z[c[1]]].join(" ") ].join(" ").trim();  
  return b.map(a=>conv(('00'+a).slice(-3))).reduce((a,b,c,d)=> b ? (a + ' ' + b + w[d.length-c-1] ) : a,'').trim();  
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function intToEnglish2(n) {
  if (n < 20) return ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'][n - 1];
  if (n < 100) return ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'][~~(n / 10) - 2] + (n % 10 ? ' ' + intToEnglish(n % 10) : '');
  if (n < 1e3) return intToEnglish(~~(n / 100)) + ' hundred' + (n % 100 ? ' ' + intToEnglish(n % 100) : '');
  if (n < 1e6) return intToEnglish(~~(n / 1e3)) + ' thousand' + (n % 1e3 ? ' ' + intToEnglish(n % 1e3) : '');
  if (n < 1e9) return intToEnglish(~~(n / 1e6)) + ' million' + (n % 1e6 ? ' ' + intToEnglish(n % 1e6) : '');
  if (n < 1e12) return intToEnglish(~~(n / 1e9)) + ' billion' + (n % 1e9 ? ' ' + intToEnglish(n % 1e9) : '');
  if (n < 1e15) return intToEnglish(~~(n / 1e12)) + ' trillion' + (n % 1e12 ? ' ' + intToEnglish(n % 1e12) : '');
  return intToEnglish(~~(n / 1e15)) + ' quadrillion' + (n % 1e15 ? ' ' + intToEnglish(n % 1e15) : '');
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const names = {
  0: "zero", 1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven",
  8: "eight", 9: "nine", 10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen",
  15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen", 20: "twenty",
  30: "thirty", 40: "forty", 50: "fifty", 60: "sixty", 70: "seventy", 80: "eighty", 90: "ninety"
};

const numbers: any = [[1e15, "quadrillion"], [1e12, "trillion"], [1e9, "billion"], [1e6, "million"], [1e3, "thousand"], [1e2, "hundred"]];

const intToEnglish3 = (number: number): string => {
  const nums = [];
  
  for (const [n, t] of numbers) {
    if (number >= n) {
      const x = Math.floor(number / n);
      number %= n;
      nums.push(intToEnglish3(x) + ` ${t}`);
    }
  }

  if (number > 20) {
    nums.push(names[Math.floor(number / 10) * 10]);
    number %= 10;
  }
  
  if (number || !nums.length) {
    nums.push(names[number]);
  }

  return nums.join(" ");
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function intToEnglish4(number){
  const dict = {1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine',
              10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen',
              17: 'seventeen', 18: 'eighteen', 19: 'nineteen'}
const tens = {2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty', 6: 'sixty', 7: 'seventy', 8: 'eighty', 9: 'ninety'}
const big = ["", "thousand", "million", "billion", "trillion", "quadrillion"]
if(number < 20) 
  return dict[number]
number = String(number).replace(/(\d)(?=(\d{3})+$)/g, "$1,").split(",").reverse()
return number.map(function(x, i){
  let h = `${x >= 100 ? `${dict[x / 100 | 0]} hundred ${x % 100 != 0 ? "and " : ""}` : ""}`
  let t = x % 100 == 0 ? "" : `${x % 100 >= 20 ? `${tens[x % 100 / 10 | 0]}${x % 10 == 0 ? "" : "-" + dict[x % 10]}` : `${dict[x % 20]}`}` 
  let p = ` ${big[i]}`
  return h + t + p
  }).reverse().join` `.trim().replace(/\s+/g, " ")
}