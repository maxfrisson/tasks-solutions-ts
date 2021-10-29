// Return a new list with the strings filtered out

function listFiltering(list:(string | number)[]):(string | number)[] {
  return list.filter(l => (typeof l == 'number'))
}

console.log(listFiltering([1,2,'aasf','1','123',123]));
