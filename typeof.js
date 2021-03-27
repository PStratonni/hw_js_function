
function main() {
  let k_1 = "kjgi";
  let k_2 = true;
  let k = typeOf(k_1, k_2);
  console.log(k);
}
function typeOf(k_1, k_2) {
    return typeof(k_1+k_2);
}
main();