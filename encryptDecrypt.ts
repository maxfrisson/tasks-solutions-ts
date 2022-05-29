function encrypt(text: string, n: number) {
  if (text === null) return text;
  let newText =
    text
      .split("")
      .filter((_: string, i: number) => i % 2)
      .join("") +
    text
      .split("")
      .filter((_: string, i: number) => !(i % 2))
      .join("");
  if (n > 0) return encrypt(newText, n - 1);
  return text;
}

console.log(encrypt("This kata is very interesting!", 1));

function decrypt(encryptedText: string, n: number) {
  if (encryptedText === null) return encryptedText;
  let center = Math.floor(encryptedText.length / 2);
  let even = encryptedText.slice(center).split("");
  let odd = encryptedText.slice(0, center).split("");
  let arr = [];
  while (odd.length || even.length) {
    arr.push(even.shift(), odd.shift());
  }
  let newText = arr.join("");
  if (n > 0) return decrypt(newText, n - 1);
  return encryptedText;
}

console.log(decrypt(" Tah itse sits!", 3));
