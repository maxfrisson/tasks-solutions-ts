function encryptThis(text: string): string {
  return text
    .split(" ")
    .map((word) =>
      word.replace(/(^\w)(\w)(\w*)(\w$)/, `$1$4$3$2`).replace(/^\w/, word.charCodeAt(0).toString())
    )
    .join(" ");
}

console.log(encryptThis("The more he saw the less he spoke"));

///////////////////////////////////// CLEAR SOLUTION /////////////////////////////////////

function encryptThis2(text: string): string {
  return text.replace(
    /\b\w(\w?)(\w*?)(\w?)\b/g,
    (word, a, mid, b) => word.charCodeAt(0) + b + mid + a
  );
}
console.log(encryptThis2("The more he saw the less he spoke"));
//////////////////////////////////////////////////////////////////////////////////////////
const encryptThis3 = (a: string) =>
  a.split(" ").map((a) =>
    a.replace(/(^.)(.)(.*)(.$)/, "$1$4$3$2").replace(/^./, (a) => a.charCodeAt(0).toString())
  ).join(" ");
console.log(encryptThis3("The more he saw the less he spoke"));
