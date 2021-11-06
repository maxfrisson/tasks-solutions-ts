// Return url with anything after the anchor (#) removed

function removeUrlAnchor(url: string): string {
  return url.indexOf("#") == -1 ? url : url.slice(0, url.indexOf("#"));
}

console.log(removeUrlAnchor("www.codewars.com/katas/#menu"));

//////////////////////////// CLEAR SOLUTION ///////////////////////////////////////////
function removeUrlAnchor2(url: string): string {
  return url.split("#")[0];
}
console.log(removeUrlAnchor2("www.codewars.com/katas/#menu"));
///////////////////////////////////////////////////////////////////////////////////////

//////////////////////////// CLEAR SOLUTION #2 ///////////////////////////////////////////
function removeUrlAnchor3(url: string): string {
  return url.replace(/#.*/gi, "");
}
console.log(removeUrlAnchor3("www.codewars.com/katas/#menu"));
///////////////////////////////////////////////////////////////////////////////////////
