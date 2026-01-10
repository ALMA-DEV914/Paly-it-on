import { useMusic } from "../hooks/useMusic";

export const AllSongs = () => {
  const { listSongs } = useMusic();

  return (
    <div>
      <h2>All Songs Component</h2>
      <p>({listSongs.length} songs)</p>

      <div className="songs-grid">
        {listSongs.map((song) => (
          <div key={song.id} className="song-card">
            <h3>{song.title}</h3>
            <p>{song.artist}</p>
            <p>Duration: {song.duration}</p>
             <audio controls preload="none">
              <source src={song.url} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </div>
    </div>
  );
};
