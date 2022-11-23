function evaporator(content: number, evap_per_day: number, threshold: number): number {
  let days = 0;
  let threPorc = content * (threshold / 100);
  for (let i = content; i > threPorc; i = content) {
    content -= content * (evap_per_day / 100);
    days++;
  }
  return days;
}

console.log(evaporator(10, 10, 5));
