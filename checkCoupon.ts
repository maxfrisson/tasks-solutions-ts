function checkCoupon(
  enteredCode: string,
  correctCode: string,
  currentDate: string,
  expirationDate: string
): boolean {
  return (
    new Date(currentDate).getTime() <= new Date(expirationDate).getTime() &&
    enteredCode === correctCode
  );
}

console.log(checkCoupon("123", "123", "September 5, 2014", "October 1, 2014"));
