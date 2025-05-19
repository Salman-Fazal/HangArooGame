import styled from "styled-components";

const Button = styled.button`
  margin: 5px;
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid #aaa;
  border-radius: 6px;
  background-color: #fff;
  transition: background 0.3s;

  &:hover:enabled {
    background-color: #dceefb;
  }

  &:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }
`;

const LetterButton = ({ letter, onClick, disabled }) => {
  return (
    <Button onClick={() => onClick(letter)} disabled={disabled}>
      {letter.toUpperCase()}
    </Button>
  );
};

export default LetterButton;
