function chineseZodiac(year) {
  let animals = [
    "Rat",
    "Ox",
    "Tiger",
    "Rabbit",
    "Dragon",
    "Snake",
    "Horse",
    "Goat",
    "Monkey",
    "Rooster",
    "Dog",
    "Pig",
  ];
  let elements = ["Wood", "Fire", "Earth", "Metal", "Water"];
  let yearDiff = year - 1924;
  let el = elements[Math.floor(yearDiff / 2) % 5];
  let animal = animals[yearDiff % 12];
  return el + " " + animal;
}

console.log(chineseZodiac(1924));
console.log(chineseZodiac(1936));
console.log(chineseZodiac(2052));
