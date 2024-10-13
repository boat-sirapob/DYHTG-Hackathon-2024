import "./ChordItem.css";

import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function ChordItem({ chord }) {
  const navigate = useNavigate();
  const redirectToChordPage = () => {
    navigate(encodeURI(`/chord/${chord}`));
  };
  return (
    <div className="chord-item">
      <div className="chord-item-detail">
        <div className="chord-text">{chord}</div>
      </div>
      <div className="chord-item-view-button">
        <Button text="View" onClick={redirectToChordPage} />
      </div>
    </div>
  );
}
