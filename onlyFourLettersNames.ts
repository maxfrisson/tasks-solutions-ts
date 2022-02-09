function onlyFourLettersNames (friends: string[]): string[] {
  return friends.filter(name => name.length === 4)
}

console.log(onlyFourLettersNames(["Ryan", "Jimmy", "123", "4", "Cool Man"]))