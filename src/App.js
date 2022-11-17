import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./animate.css";
import Home from "./pages/home/Home";
import DiscoverFuseta from "./pages/discover-fuseta/DiscoverFuseta";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover-fuzeta" element={<DiscoverFuseta />} />
      </Routes>
    </div>
  );
}

export default App;
