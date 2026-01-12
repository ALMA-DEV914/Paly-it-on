import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AllSongs } from "./assets/components/AllSongs";
import { MusicPlayer } from "./assets/components/MusicPlayer";
import { Playlists } from "./assets/components/Playlists";
import "./index.css";
import { Navbar } from "./assets/components/NavBar";
import { Home } from "./assets/components/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/allsongs" element={<AllSongs />} />
        <Route path="/music" element={<MusicPlayer />} />
        <Route path="/playlists" element={<Playlists />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
