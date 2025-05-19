import styled from "styled-components";

const LivesDisplay = ({ lives }) => {
  return (
    <Container>
      Lives: {"❤️".repeat(lives)}
      {"🖤".repeat(5 - lives)}
    </Container>
  );
};

export default LivesDisplay;

const Container = styled.div`
  margin: 10px 0 20px;
  font-size: 20px;
`;
