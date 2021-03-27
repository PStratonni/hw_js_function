function main() {
  let secretWord = prompt("Вводим слово");
  playGame(secretWord);
}
// Сравнение введеной буквы и загаданого слова.
function playGame(word) {
  const guessField = creatGuessField(word.length);
  let quantityLetter = word.length;
  let letter;
  const letters = [];
  let key = 2;
  while (quantityLetter > 0) {
    letter = addLetter(key, guessField, letters);
    key = 0;
    for (let i = 0; i < word.length; i++) {
      if (letter === word[i]) {
        guessField[i] = letter;
        quantityLetter--;
        key = 1;
      }
    }
  }
  console.log(`Ты угадал "${guessField.join("")}"`);
}
// Создание массива из _, длинна которого равна количеству букв
function creatGuessField(number) {
  const guessField = [];
  for (let i = 0; i < number; i++) {
    guessField.push("_");
  }
  console.log(`${guessField}`);
  return guessField;
}
// Реакция на введеную ранее букву (угадал, неугадал)
function addLetter(key, word, letters) {
  let letter;
  if (key === 0) {
    console.log(
      `Упс, ты не угадал. Но не расстраивайся. Пробуй ещё!!!\nТвой результат ${word.join(
        " "
      )}\n${letters}`
    );
  } else if (key === 1) {
    console.log(
      `Ты молодец, продолжай!!!\nТвой результат ${word.join(" ")}\n${letters}`
    );
  }
  letter = checkLetter(letters);
  letters.push(letter);
  return letter;
}
// Ввод новой буквы и проверка на пустой символ и повторно введеную букву
function checkLetter(word) {
  let letter;
  let key = 0;
  while (key === 0) {
    key = 1;
    letter = prompt("Введи букву", "");
    if (letter === "") {
      alert("Ты забыл ввести букву");
      key = 0;
      continue;
    }
    for (let i = 0; i < word.length; i++) {
      if (letter === word[i]) {
        key = 0;
        alert("Эта буква уже была. Попробуй новую.");
        break;
      }
    }
  }
  return letter;
}
main();
