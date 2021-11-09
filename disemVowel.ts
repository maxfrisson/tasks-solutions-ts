// Return a new string with all wovels removed

function disemVowel(str: string): string {
  return str.replace(/[aeuio]/gi, "");
}

console.log(disemVowel("No offense but,\nYour writing is among the worst I've ever read"));
