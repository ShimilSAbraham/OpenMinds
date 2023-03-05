import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Stage from "./pages/game/stage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="Game" element={<Stage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);