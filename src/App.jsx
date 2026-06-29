import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TrainerPage from "./pages/TrainerPage";
import BecomeTrainer from "./pages/BecomeTrainer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/trainers" element={<TrainerPage />} />
      <Route path="/becometrainer" element={<BecomeTrainer />} />
    </Routes>
  );
}

export default App;