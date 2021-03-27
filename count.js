function main() {
  const number = +prompt("Введите число");
  const arrayNumber =  countNumber(number);
  console.log(arrayNumber);
}
function creatArray() {
  const array = [];
  for (let i = 0; i < 2; i++) {
    array[i] = [];
  }
  return array;
}
function countNumber(number) {
  const array = creatArray();
  let k = 1;
  if (number < 0) {
    k = -1;
  }
  for (let i = 0; i <= k*number; i++) {
    array[0][i] = array[1][k*number - i] = number - k*i;
  }
  return array;
}
main();
