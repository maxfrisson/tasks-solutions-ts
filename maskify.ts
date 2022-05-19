function maskify(cc) {
  return cc.length <= 4
    ? cc
    : cc.slice(0, -4).replace(/\w|\d/g, "#") + cc.slice(cc.length - 4, cc.length);
}

console.log(maskify("124415616"));

/////////////////////////// MORE SHORT SOLUTION //////////////////////////////////
function maskify2(cc: string): string {
  return cc.replace(/.(?=.{4})/g, "#");
}

console.log(maskify2("345363465616"));
