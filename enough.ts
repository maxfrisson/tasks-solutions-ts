function enough(cap, on, wait) {
  return on + wait > cap ? on + wait - cap : 0;
}

console.log(enough(10, 5, 5));

//////////////////////////////////////////////////
function enough2(cap, on, wait) {
  return Math.max(on + wait - cap, 0);
}

console.log(enough2(10, 5, 5));
