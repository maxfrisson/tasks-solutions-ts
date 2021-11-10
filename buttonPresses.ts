function buttonPresses(phrase: string): number {
  let res = 0;
  for (let i = 0; i < phrase.length; i++) {
    if (/[adgjmptw\s*#1]/i.test(phrase[i])) res++;
    else if (/[behknqux0]/i.test(phrase[i])) res += 2;
    else if (/[cfilorvy]/i.test(phrase[i])) res += 3;
    else if (/[sz234568]/i.test(phrase[i])) res += 4;
    else if (/[79]/i.test(phrase[i])) res += 5;
  }
  return res;
}

console.log(buttonPresses("WHERE DO U WANT 2 MEET L8R"));
