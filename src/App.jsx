import { MusicPlayer } from "./assets/components/MusicPlayer";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <div className="App">
      <main className="main">
        <h1>Welcome to the App</h1>
        <p>This is the main content area.</p>
        <MusicPlayer />
        <div className="content-section">
          <Routes>
            <Route path="/music" element={<MusicPlayer />} />
          </Routes>
        </div>
      </main>

    </div>
  );
}

export default App;
    
