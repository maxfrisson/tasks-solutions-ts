function growthOfPopulation(p0, percent, aug, p) {
  let res = 0;

  while (p0 < p) {
    p0 += (p0 * percent) / 100 + aug;
    res++;
  }
  return res;
}

console.log(growthOfPopulation(1500000, 0.25, 1000, 2000000));
