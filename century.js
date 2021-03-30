function main() {
  let year;
  let key = 1;
  while (key) {
    year = prompt(
      "Введите год\nПри отрицательном значении получим век Д.Н.Э\nНо помни, что нулевого года не существует"
    );
    key = yearZero(year);
  }
  let century = yearCentury(year);
  console.log(
    ` Введенный ${year} год - это ${century} век${+year < 0 ? " Д.Н.Э." : ""}`
  );
}
function yearCentury(year) {
  let century = [0];
  for (let i = 0; i < year.length - 2; i++) {
    century[i] = year[i];
  }
  if (+year < 0) {
    century[0] = 0;
  }
  if (
    year.length > 2 &&
    +year[year.length - 1] === 0 &&
    +year[year.length - 2] === 0
  ) {
    century = +century.join("");
  } else {
    century = +century.join("") + 1;
  }
  return century;
}

function yearZero(year) {
  if (+year === 0) {
    alert("Ну я говорил, что нулевого года не существует\nПопробуй еще раз");
    return 1;
  } else {
    return 0;
  }
}
main();
