function twiceAsOld(dadYearsOld: number, sonYearsOld: number): number {
  return Math.abs(dadYearsOld - 2 * sonYearsOld)
}

console.log(twiceAsOld(29, 0));

/////////////////////////////////////////////////////////////////////////
function twiceAsOld2(dadYearsOld: number, sonYearsOld: number): number {
  let res = 0;

  if (dadYearsOld / 2 > sonYearsOld) {
    for (let i = dadYearsOld; i > 2 * sonYearsOld; i--) {
      dadYearsOld++;
      res++;
    }
  } else {
    for (let i = dadYearsOld; i < 2 * sonYearsOld; i++) {
      dadYearsOld++;
      res++;
    }
  }
  return res;
}

console.log(twiceAsOld2(29, 0));
