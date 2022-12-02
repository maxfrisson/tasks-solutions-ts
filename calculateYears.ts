function calculateYears(principal, interest, tax, desired) {
  let years = 0;
  for (let i = principal; principal < desired; i++) {
    principal += (principal * interest) - (principal * interest) * tax
    years++;
  }
  return years;
}

console.log(calculateYears(1000, 0.05, 0.18, 1100));
