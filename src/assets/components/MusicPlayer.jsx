import { useState, useRef, useEffect } from "react";
import { Playlists } from "./Playlists";


export const MusicPlayer = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Play / pause handler
  const playSong = (song) => {
    if (!song) return;

    // Same song → toggle
    if (currentSong?.id === song.id) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
    // New song → load & play
    else {
      setCurrentSong(song);
      setIsPlaying(true);
    }
  };

  // Auto-play when song changes
  useEffect(() => {
    if (currentSong && audioRef.current) {
      audioRef.current.load();
      audioRef.current.play().catch(() => {});
    }
  }, [currentSong]);

  return (
    <div>
        <h2>Music Player</h2>
    <div className="music-player">
      {/* Playlist selector */}
      <Playlists onSelectSong={playSong} currentSong={currentSong} />

      {/* Now Playing */}
      {currentSong && (
        <div className="now-playing">
          <h3>{currentSong.title}</h3>
          <p>{currentSong.artist}</p>

          {/* Controls */}
          <div className="controls">
            <button>⏮</button>

            <button
              className={`play ${isPlaying ? "playing" : ""}`}
              onClick={() => playSong(currentSong)}
            >
              {isPlaying ? "⏸" : "▶"}
            </button>

            <button>⏭</button>
          </div>

          {/* Audio */}
          <div className="audio-card">
          <audio
            ref={audioRef}
            src={currentSong.url}
            onEnded={() => setIsPlaying(false)}
            preload="metadata"
        
          />
          <img src="/photos/listen.png" alt="listen icon" className="listen-icon" />
            </div>
        </div>
      )}
    </div>
    </div>
  );
};
