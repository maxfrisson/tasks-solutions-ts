function updateLight(current: "green" | "yellow" | "red"): string {
  return current == "green" ? "yellow" : current == "yellow" ? "red" : "green";
}

console.log(updateLight("green"));
