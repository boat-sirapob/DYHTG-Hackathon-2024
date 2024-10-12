import "./Song.css";

import Button from "./Button";
import Card from "./Card";
import SongItem from "./SongItem";
import { useNavigate } from "react-router-dom";

const Difficulty = {
  Easy: "Easy",
  Medium: "Medium",
  Hard: "Hard",
};

// TODO: fill with results
const songs = [];

export default function Song() {
  return (
    <div className="song-finder-container">
      <div className="song-finder-title">Song Finder</div>
      <div className="song-finder-contents">
        <Card size="small" title="Filter" className="s-left-card"></Card>
        <Card size="small" title="Songs" className="s-right-card">
          <div className="song-finder-list">
            {/* {songs.forEach((element) => {})} */}
            <SongItem
              title="I Wish You Love"
              subtitle="Laufey"
              difficulty={Difficulty.Easy}
              duration="2:23"
            />
            <SongItem
              title="I Wish You Love"
              subtitle="Laufey"
              difficulty={Difficulty.Easy}
              duration="2:23"
            />
            <SongItem
              title="I Wish You Love"
              subtitle="Laufey"
              difficulty={Difficulty.Easy}
              duration="2:23"
            />
            <SongItem
              title="I Wish You Love"
              subtitle="Laufey"
              difficulty={Difficulty.Easy}
              duration="2:23"
            />
          </div>
        </Card>
      </div>
    </div>
  );
}
