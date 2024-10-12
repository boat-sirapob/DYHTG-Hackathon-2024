import "./SongItem.css";

import Button from "./Button";

export default function SongItem({ title, subtitle, difficulty, duration }) {
  return (
    <div className="song-item">
      <div className="song-item-image"></div>
      <div className="song-item-detail">
        <div className="song-item-info">
          <div className="song-item-title">{title}</div>
          <div className="song-item-subtitle">{subtitle}</div>
        </div>
        <div className="song-item-difficulty">{difficulty}</div>
      </div>
      <div className="song-item-duration">{duration}</div>
      <div className="song-item-play-button">
        <Button size="small" text="Play" />
      </div>
    </div>
  );
}
