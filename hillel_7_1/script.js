function removeSymbols(str, symbols) {
  let result = "";

  for (let char of str) {
    if (!symbols.includes(char)) {
      result += char;
    }
  }

  return result;
}

let text = prompt("Введіть рядок:");
let symbols = prompt("Які символи видалити? (через кому)").split(",");

let cleanedText = removeSymbols(text, symbols);

console.log(cleanedText);