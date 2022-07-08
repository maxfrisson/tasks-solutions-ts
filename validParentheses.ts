function validParentheses(parens: string) {
  let recursive = () => {
    let matched = false;
    parens = parens.replace(/(\(\))/g, (match) => {
      if (match) {
        matched = true;
      }
      return "";
    });
    if (matched) {
      parens = recursive();
    }
    return parens;
  };
  return !recursive();
}

console.log(validParentheses("()()"));

//////////////////////////////////////////////////////////

function validParentheses2(parens: string) {
  while (parens.indexOf("()") != -1) {
    parens = parens.replace("()", "");
  }
  return !parens.length;
}

console.log(validParentheses2("()()"));
