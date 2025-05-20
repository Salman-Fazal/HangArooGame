import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { words } from "../data/words";
import { getStats, updateStats } from "../utils/localStorageUtils";
import WordDisplay from "./ WordDisplay";
import LetterButton from "./LetterButton";
import LivesDisplay from "./LivesDisplay";
import GameOverModal from "./GameOverModal";

const HangarooGame = () => {
  const [word, setWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [lives, setLives] = useState(5);
  const [gameOver, setGameOver] = useState(false);
  const [result, setResult] = useState(null);
  const [stats, setStats] = useState(getStats());

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setWord(randomWord.toLowerCase());
    setGuessedLetters([]);
    setLives(5);
    setGameOver(false);
    setResult(null);
  };

  const handleGuess = useCallback(
    (letter) => {
      if (guessedLetters.includes(letter) || gameOver) return;
      const updatedGuessed = [...guessedLetters, letter];
      setGuessedLetters(updatedGuessed);
      if (!word.includes(letter)) {
        const newLives = lives - 1;
        setLives(newLives);
        if (newLives === 0) {
          endGame(false);
        }
      } else {
        const allGuessed = word
          .split("")
          .every((char) => char === " " || updatedGuessed.includes(char));
        if (allGuessed) {
          endGame(true);
        }
      }
    },
    [guessedLetters, gameOver, lives, word]
  );

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toLowerCase();

      if (key >= "a" && key <= "z") {
        handleGuess(key);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleGuess]);

  const endGame = (won) => {
    setGameOver(true);
    setResult(won ? "win" : "loss");
    updateStats(won);
    setStats(getStats());
  };

  return (
    <Container>
      <Title>🐨 HangARoo Game</Title>
      <LivesDisplay lives={lives} />
      <LetterGrid>
        {"abcdefghijklmnopqrstuvwxyz".split("").map((letter) => (
          <LetterButton
            key={letter}
            letter={letter}
            onClick={handleGuess}
            disabled={guessedLetters.includes(letter) || gameOver}
          />
        ))}
      </LetterGrid>
      <WordDisplay word={word} guessedLetters={guessedLetters} />
      {gameOver && (
        <GameOverModal
          result={result}
          word={word}
          onPlayAgain={startNewGame}
          stats={stats}
        />
      )}
    </Container>
  );
};

export default HangarooGame;

const Container = styled.div`
  font-family: sans-serif;
  text-align: center;
  padding: 30px;
  min-height: 100vh;
  color: #020202;
  background-size: cover;
  backdrop-filter: brightness(0.9);
`;

const Title = styled.h1`
  font-size: 36px;
`;

const LetterGrid = styled.div`
  margin-top: 20px;
`;
