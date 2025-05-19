import styled from "styled-components";

const Modal = styled.div`
  margin-top: 30px;
  background: #fff;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 10px;
  display: inline-block;
`;

const PlayAgainButton = styled.button`
  margin-top: 15px;
  padding: 10px 20px;
  font-size: 16px;
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

const GameOverModal = ({ result, word, onPlayAgain, stats }) => {
  return (
    <Modal>
      <h2>{result === "win" ? "🎉 You Won!" : "😢 You Lost!"}</h2>
      <p>
        The word was: <strong>{word}</strong>
      </p>
      <p>
        🏆 Wins: {stats.wins} | ❌ Losses: {stats.losses}
      </p>
      <PlayAgainButton onClick={onPlayAgain}>Play Again</PlayAgainButton>
    </Modal>
  );
};

export default GameOverModal;
