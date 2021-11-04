function verifyAnagrams (line1:string,line2:string):boolean {
  const f = x => x.toLowerCase().replace(/\s/g, '').split('').sort().join();
  
  return f(line1) === f(line2)
}

console.log(verifyAnagrams('Programming', 'Gram Ring Mop'));

