import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./animate.css";
import Home from "./pages/home/Home";
import DiscoverFuseta from "./pages/discover-fuseta/DiscoverFuseta";
import Houses from "./pages/houses/houses";

//casa 1
import CasaCima from "./assets/casa-cima.png";
import CasaCima2 from "./assets/casa-cima2.png";
import CasaCima3 from "./assets/casa-cima3.png";
function App() {
  const houseOne = [
    {
      header: CasaCima,
      name: "Casa 1",
      numberOfPersons: 4,
      houseTypology: "2",
      textOne:
        "Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit ametLorem Ipsum dolor sit ametLorem Ipsum dolor sit ametLorem Ipsum dolor sit ametLorem Ipsum dolor sit ametLorem Ipsum dolor sit ametLorem Ipsum dolor sit ametLorem Ipsum dolor sit ametLorem Ipsum dolor sit ametLorem Ipsum dolor sit amet",
      textTwo:
        "Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit ametLorem Ipsum dolor sit ametLorem Ipsum dolor sit ametLorem Ipsum dolor sit ametLorem Ipsum dolor sit ametLorem Ipsum dolor sit ametLorem Ipsum dolor sit ametLorem Ipsum dolor sit ametLorem Ipsum dolor sit ametLorem Ipsum dolor sit amet",
      images: [CasaCima, CasaCima, CasaCima],
      iframeLocation:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d531.2839247485219!2d-7.747087144836406!3d37.05496154571378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd10002e010bb63b%3A0xe5079225f83f7382!2sR.%20das%20Vinhas%205%2C%208700-029%20Fuseta!5e0!3m2!1spt-PT!2spt!4v1670785534962!5m2!1spt-PT!2spt",
    },
  ];
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover-fuzeta" element={<DiscoverFuseta />} />
        <Route path="/casa-1" element={<Houses house={houseOne} />} />
        <Route path="/casa-2" element={<Houses house={houseOne} />} />
        <Route path="/casa-3" element={<Houses house={houseOne} />} />
      </Routes>
    </div>
  );
}

export default App;
