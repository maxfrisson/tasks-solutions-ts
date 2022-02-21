function breakCamelCase(string: string): string {
  return string.replace(/([A-Z](?<=[A-Z])[a-z]*)/g, " $1");
}

console.log(breakCamelCase("camelCasingTesting"));
