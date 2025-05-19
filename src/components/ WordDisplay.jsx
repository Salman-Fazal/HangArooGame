import styled from "styled-components";

const WordContainer = styled.div`
  font-size: 32px;
  margin: 20px 0;
  letter-spacing: 8px;
`;

const Letter = styled.span`
  margin: 5px;
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid #aaa;
  border-radius: 6px;
  background-color: #61f84d;
  transition: background 0.3s;
`;

const WordDisplay = ({ word, guessedLetters }) => {
  return (
    <WordContainer>
      {word.split("").map((char, index) => (
        <Letter key={index}>
          {char === " "
            ? " "
            : guessedLetters.includes(char.toLowerCase())
            ? char
            : "_"}
        </Letter>
      ))}
    </WordContainer>
  );
};

export default WordDisplay;
