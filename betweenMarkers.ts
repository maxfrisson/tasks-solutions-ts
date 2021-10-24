// Find a substring enclosed between two markers

function betweenMarkers(line: string, left: string, right: string): string {
  return line.slice(line.indexOf(left) + 1, line.indexOf(right));
}

console.log(betweenMarkers("What is [apple]", "[", "]"));
