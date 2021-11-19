function domainName(url: string): string {
  if (url.length < 1) return "";
  if (url.includes("www.") && url.match(/(?<=[.])\w+[-]*\w+/) != null) {
    return url.match(/(?<=[.])\w+[-]*\w+/)[0];
  } else if (url.match(/(?<=[://])\w+[-]*\w+/) != null) {
    return url.match(/(?<=[://])\w+[-]*\w+/)[0];
  } else {
    return url.match(/\w+(?=[.])*[-]*\w+/)[0];
  }
}

console.log(domainName("fdasdf.com"));

//////////////////////////////////////////////////////////////////////////////////
function domainName2(url: string): string {
  return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}

console.log(domainName2("https://www.youtube.com/"));
