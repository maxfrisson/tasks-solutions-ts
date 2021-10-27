function sortByExt(files:string[]): string[] {
  let arr = [];
  for (let x of files) { 
      let a =  x.split(/[\.]/g).filter(i => i.length > 0); 
      let b = '';
      if (a.length >= 2 && !x.endsWith('.'))
          b = a[a.length - 1];
  arr.push([b, x.replace(b, '')]);
  }
  return arr.sort().map(x => x[1].concat(x[0]));
}

console.log(sortByExt(['1.cad', '1.bat', '1.aa', '.bat']));
