import "./App.css";

import { Route, Routes } from "react-router-dom";

import Chord from "./components/Chord";
import ChordDetails from "./components/ChordDetails";
import Home from "./components/Home";
import Song from "./components/Song";
import SongDetails from "./components/SongDetails";
import logo from "./logo.png";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <div className="nav">
        <div className="nav-content">
          <img
            src={logo}
            onClick={() => navigate("/")}
            className="logo"
            alt=""
          ></img>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/song-finder" element={<Song />}></Route>
        <Route path="/chord-generator" element={<Chord />}></Route>
        <Route path="/song/:title" element={<SongDetails />}></Route>
        <Route path="/chord" element={<ChordDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
