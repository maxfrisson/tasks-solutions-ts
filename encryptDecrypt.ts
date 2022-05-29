function encrypt(text: any, n: number) {
  if (text === null) return text
  let newText = text.split("").filter((_:string,i:number) => i%2).join('') + text.split("").filter((_:string,i:number) => !(i%2)).join('')
  if (n > 0) return encrypt(newText,n-1);
  return text;
}

console.log(encrypt("012345", 1));
