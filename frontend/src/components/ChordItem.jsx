import "./ChordItem.css";

import Button from "./Button";

//import Card from "./Card";
//import { useNavigate } from "react-router-dom";

export default function ChordItem({ chord }) {
  return (
    <div className="chord-item">
      <div className="chord-item-detail">
        <div className="chord-text">{chord}</div>
      </div>
      <div className="chord-item-view-button">
        <Button text="View" />
      </div>
    </div>
  );
}
