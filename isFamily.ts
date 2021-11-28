function isFamily(tree: [string, string][]): boolean {
  let errors = 0;

  for (let r in tree) {
      let father = tree[r][0];
      let son = tree[r][1];
      let times = 0;
      let brothers = [];

      // TEST 1: SON CAN ONLY HAVE ONE FATHER
      for (let r1 in tree) {
          if (son === tree[r1][1] && father != tree[r1][0]) {errors++;}
      }        

      // TEST 2: SON CANNOT BE A FATHER TO THEIR OWN FATHER
      for (let r2 in tree) {
          if (son === tree[r2][0] && father === tree[r2][1]) {errors++;}
          if (father === tree[r2][0] && son != tree[r2][1]) {brothers.push(tree[r2][1])}
      }
      
      // TEST 3: SON CANNOT BE THE FATHER OF THEIR BROTHER
      for (let bro in brothers) {
          for (let r3 in tree){
              if (brothers[bro] === tree[r3][1] && son === tree[r3][0]) {errors++;}
          }
      }

      // TEST 4: NOT A STRANGER
      for (let r4 in tree) {
          if (tree.length > 1) {
              if (father === tree[r4][0] || father === tree[r4][1]) {times++}
              else if (son === tree[r4][0] || son === tree[r4][1]) {times++}
          }        
      }
      if (tree.length > 1 && times <= 1) {errors++}
  }
      
  return errors > 0 ? false : true;
}

console.log(
  isFamily([
    ["Logan", "Mike"],
    ["Logan", "Jack"],
    ["Mike", "Jack"],
  ])
);

// {
//   let family = tree.filter((x) => x[0] === tree[0][0]);
//   tree.filter((x) => {
//     for (let a = 0; a < family.length; a++) {
//       if (x[0] === family[a][1] && x[0] !== family[a][1]) family.push(x);
//       if (x[0] === family[a][1] && x[1] !== family[a][0]) family.push(x);
//     }
//   });
//   return family.length === tree.length;
// }