// Sort Array by Element Frequency

function frequencySort(items: any[]): any[] {
  function count(list, item) {
    return list.filter(x => x == item).length;
  }
  return items.sort((a, b) => items.indexOf(a) - items.indexOf(b)).sort((a, b) => count(items, b) - count(items, a));
}


console.log(frequencySort(['bob', 'bob', 'carl', 'alex', 'bob']));
