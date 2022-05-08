function hello(name) {
  if (!name) return "Hello, World!";
  name = name[0].toUpperCase() + name.slice(1, name.length).toLowerCase();
  return `Hello, ${name}!`;
}

console.log(hello("katTy"));
