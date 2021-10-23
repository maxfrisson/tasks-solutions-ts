// Check if all elements in the given Array are equal

function allTheSame(elements: any[]): boolean {
  return elements.every((el) => el === elements[0]);
}

console.log(allTheSame(["a", "a", "a"]));
