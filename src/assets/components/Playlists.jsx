import { useMusic } from "../hooks/useMusic";
import { useState } from "react";

export const Playlists = ({ onSelectSong, currentSong }) => {
  const { listSongs } = useMusic();

  const [playlists] = useState([
    { id: 1, name: "Favorites ❤️", songIds: [1, 3, 5, 7, 8] },
    { id: 2, name: "Chill 😎", songIds: [2, 4, 6] },
  ]);

  return (
    <div className="container">
      <h2>Playlists</h2>
      <div className="card playlists">
        {playlists.map((playlist) => (
          <div key={playlist.id} className="playlist-card">
            <h3>{playlist.name}</h3>

            <ul>
              {playlist.songIds.map((songId) => {
                const song = listSongs.find((s) => s.id === songId);
                if (!song) return null;

                return (
                  <li
                    key={song.id}
                    className={`song-item ${
                      currentSong?.id === song.id ? "active" : ""
                    }`}
                    onClick={() => onSelectSong(song)}
                  >
                    <span>{song.title}</span>  { " - " }
                     <span className="artist">{song.artist}</span>
                    <button>▶</button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
