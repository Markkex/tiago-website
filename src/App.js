import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./animate.css";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
