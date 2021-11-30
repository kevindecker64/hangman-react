export function showNotification(setter) {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
}

export function checkWin(selectedWord, correctLetters, wrongLetters) {
  let status = "win";

  for (let letter of selectedWord.split("")) {
    if (!correctLetters.includes(letter)) {
      status = "";
    }
  }

  if (wrongLetters.length === 6) status = "lose";

  return status;
}
