
function isometricStrings (line1:string, line2: string) {  
  return line1.split('').map(x => line1.indexOf(x)).join('') == line2.split('').map(y => line2.indexOf(y)).join('');
}

console.log(isometricStrings('paper', 'title'));
