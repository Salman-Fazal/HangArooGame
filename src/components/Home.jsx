import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HomePage = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/game");
  };

  return (
    <Container>
      <Title>🐨 Welcome to HangARoo</Title>
      <StartButton onClick={handleStart}>Start Game</StartButton>
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-family: sans-serif;
  background-color: #f0f0f0;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 40px;
`;

const StartButton = styled.button`
  font-size: 18px;
  padding: 12px 24px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
