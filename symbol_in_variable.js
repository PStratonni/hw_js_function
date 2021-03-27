function main() {
  let variable = prompt("Введите переменную", "Будем проверять мою");
  let symbol = prompt("Введите символ", "е");
  let result = countSymbol(variable, symbol);
  alert(result);
}
function countSymbol(variable, symbol) {
  let quantity = 0;
  for (let i = 0; i < variable.length; i++) {
    if (variable[i] == symbol) {
      quantity++;
    }
  }
  return quantity;
}
main();
