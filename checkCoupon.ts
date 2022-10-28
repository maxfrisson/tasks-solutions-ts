function checkCoupon(
  enteredCode: string,
  correctCode: string,
  currentDate: string,
  expirationDate: string
): boolean {
  return Date.parse(currentDate) <= Date.parse(expirationDate) && enteredCode === correctCode;
}

console.log(checkCoupon("123", "123", "September 5, 2014", "October 1, 2014"));
