function isAcceptablePassword(password: string): boolean {
  return password.length > 6;
}

console.log(isAcceptablePassword("1234567"));
