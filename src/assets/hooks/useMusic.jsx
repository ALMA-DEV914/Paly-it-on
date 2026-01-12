import { useState } from "react";

const songsData = [
  { id: 1, title: "Never You Let Down", artist: "Pacific oaks", url: "/musiclist/never.mp3", duration: "3:30" },
  { id: 2, title: "Photographs", artist: "The Lakes", url: "/musiclist/photograph.mp3", duration: "4:20" },
  { id: 3, title: "Summer Bumble", artist: "Paul Yudin", url: "/musiclist/summer.mp3", duration: "3:45" },
  { id: 4, title: "Waves", artist: "NastelBom", url: "/musiclist/waves.mp3", duration: "2:50" },
  { id: 5, title: "Sunny", artist: "SigmaMusicArt", url: "/musiclist/sunny.mp3", duration: "3:15" },
  { id: 6, title: "City Lights", artist: "DiseriMusic", url: "/musiclist/dideri.mp3", duration: "2:05" },
  { id: 7, title: "Dreams", artist: "Miromax", url: "/musiclist/miromax.mp3", duration: "1:26" },
  { id: 8, title: "Acoustic Breeze", artist: "MountainMusic", url: "/musiclist/mountain.mp3", duration: "2:00" },
];

export const useMusic = () => {
  const [allSongs] = useState(songsData);

  return {
    listSongs: allSongs,
};

};
