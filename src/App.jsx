import React, { useState } from "react";
import Header from "./components/Header";
import Figure from "./components/Figure";
import WrongLetters from "./components/WrongLetters";
import Word from "./components/Word";

import "./App.css";

const words = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "moist",
  "laceration",
  "bass",
  "chastity",
  "lavender",
  "blanket",
  "teeth",
  "magnets",
  "weights",
  "paper",
  "hair",
  "curly",
  "warm",
  "paperclip",
  "briefcase",
  "smells",
  "soft",
  "extroverted",
  "friendly",
  "chill",
];
let selectedWord = words[Math.floor(Math.random() * words.length)];

export default function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);

  return (
    <>
      <Header />
      <div className="game-container">
        <Figure />
        <WrongLetters />
        <Word selectedWord={selectedWord} correctLetters={correctLetters}/>
      </div>
    </>
  );
}
