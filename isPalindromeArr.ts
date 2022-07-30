function isPalindromeArr(head: number[]): boolean {
  if (!head || !head.length) return false;
  let mid = head.splice(0, Math.floor(head.length / 2));
  let headRev = head.reverse();
  for (let i = 0; i < mid.length; i++) {
    if (mid[i] !== headRev[i]) return false;
  }
  return true;
}

console.log(isPalindromeArr([1, 2, 2, 1]));
