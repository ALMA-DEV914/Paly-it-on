import { useState } from "react";

const songsData = [
  { id: 1, title: "Never You Let Down", artist: "Pacific oaks", url: "/musiclist/never.mp3", duration: "3:30" },
  { id: 2, title: "Photographs", artist: "The Lakes", url: "/musiclist/photograph.mp3", duration: "4:20" },
  { id: 3, title: "Summer BUMMBLE", artist: "Paul Yudin", url: "/musiclist/summer.mp3", duration: "3:45" },
];

export const useMusic = () => {
  const [allSongs] = useState(songsData);

  return {
  listSongs: allSongs,
};

};
