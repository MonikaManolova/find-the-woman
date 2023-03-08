import "./App.css";
import Navigation from "./components/Navigation";
import image from "./assets/Background.png";
import { ReactComponent as HeartIcon } from "./components/icons/heart.svg";
import {
  Screen1,
  Screen2,
  Screen3,
  Screen4,
  Screen5,
  Screen6,
  Screen7,
  Screen8,
  Screen9,
  Screen10,
  ScreenFinal,
  ScreenIntro,
} from "./components/Screens";

import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  let location = useLocation();
  const isTrue =
    location.pathname === "/" || location.pathname === "/screen-final";

  return (
    <div
      className="App"
      style={{
        background: !isTrue
          ? "#823EED"
          : `url(${image}) no-repeat center center fixed`,
      }}
    >
      <Navigation />
      <div className="body">
        <Routes>
          <Route path="/" element={<ScreenIntro />} />
          <Route path="screen1" element={<Screen1 />} />
          <Route path="screen2" element={<Screen2 />} />
          <Route path="screen3" element={<Screen3 />} />
          <Route path="screen4" element={<Screen4 />} />
          <Route path="screen5" element={<Screen5 />} />
          <Route path="screen6" element={<Screen6 />} />
          <Route path="screen7" element={<Screen7 />} />
          <Route path="screen8" element={<Screen8 />} />
          <Route path="screen9" element={<Screen9 />} />
          <Route path="screen10" element={<Screen10 />} />
          <Route path="screen-final" element={<ScreenFinal />} />
        </Routes>
      </div>
      {isTrue && (
        <div className="footer">
          Разработено специално за теб!
          <HeartIcon />
        </div>
      )}
    </div>
  );
}

export default App;
