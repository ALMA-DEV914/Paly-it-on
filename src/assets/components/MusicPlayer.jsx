import { useState, useRef } from "react";
import { useMusic } from "../hooks/useMusic";

export const MusicPlayer = () => {
  const { listSongs } = useMusic();
  const [currentSong, setCurrentSong] = useState(null); // currently playing song
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const playSong = (song) => {
    if (currentSong?.id === song.id) {
      // toggle play/pause
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    } else {
      // switch to new song
      setCurrentSong(song);
      setIsPlaying(true);
      setTimeout(() => {
        audioRef.current.play();
      }, 100); // wait for audio element to update
    }
  };

  return (
    <div className="music-player">
      <h2>Music Player</h2>
      {listSongs.map((song) => (
        <div key={song.id} className="song-card">
          <h3>{song.title}</h3>
          <p>{song.artist}</p>
          <p>Duration: {song.duration}</p>
          <button onClick={() => playSong(song)}>
            {currentSong?.id === song.id && isPlaying ? "Pause" : "Play"}
          </button>
        </div>
      ))}

      {/* single audio element */}
      {currentSong && (
        <audio
          ref={audioRef}
          src={currentSong.url}
          onEnded={() => setIsPlaying(false)}
          preload="none"
        />
      )}
    </div>
  );
};
