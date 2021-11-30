import React, {useEffect} from "react";
import { checkWin } from "../helpers/helpers";

export default function Popup({
  selectedWord,
  correctLetters,
  wrongLetters,
  setPlayable,
}) {
  let finalMessage = "";
  let finalMessageRevealWord = "";
  let playable = true;

  if (checkWin(selectedWord, correctLetters, wrongLetters) === "win") {
    finalMessage = "Congrats! You Win!";
    playable = false;
  } else if (checkWin(selectedWord, correctLetters, wrongLetters) === "lose") {
    finalMessage = "You lost...";
    finalMessageRevealWord = `The word was: ${selectedWord}`;
    playable = "false";
  }

  useEffect(() => setPlayable(playable))

  return (
    <div class="popup-container" style={finalMessage !== "" ? {display:"flex"} : {}}>
      <div class="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button id="play-button">Play Again</button>
      </div>
    </div>
  );
}
