import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home";
import HangarooGame from "./components/HangarooGame";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<HangarooGame />} />
      </Routes>
    </Router>
  );
};

export default App;
