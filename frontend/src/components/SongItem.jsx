import "./SongItem.css";

import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function SongItem({ title, subtitle, difficulty, thumbnail }) {
  const navigate = useNavigate();

  const redirect = () => {
    navigate(encodeURI(`/song/${title}`));
  };

  return (
    <div className="song-item">
      <div className="song-item-image">
        <img src={thumbnail} alt="" />
      </div>
      <div className="song-item-detail">
        <div className="song-item-info">
          <div className="song-item-title">{title}</div>
          <div className="song-item-subtitle">{subtitle}</div>
        </div>
        <div className={`song-item-difficulty ${difficulty}`}>{difficulty}</div>
      </div>
      <div className="song-item-duration"></div>
      <div className="song-item-play-button">
        <Button size="small" text="View" onClick={redirect} />
      </div>
    </div>
  );
}
