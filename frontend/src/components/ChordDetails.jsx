import "./SongDetails.css";

import Card from "./Card";
import ChordImageFetcher from "./ChordImageFetcher";
import { useParams } from "react-router-dom";

// todo: props
export default function ChordDetails() {
  const { chordsString } = useParams();
  const chords = chordsString ? chordsString.split("-") : [];

  return (
    <div className="chord-details-container">
      <Card size="small" title="Chord Progression Details">
        <div className="chord-details-contents">
          {
            /*chord*/ {} ? (
              <div className="chord-details-info">
                {chords.map((chord, index) => (
                  <div key={index} className="chord-card">
                    <div className="chord-name">{chord}</div>
                    <ChordImageFetcher chordName={chord} instrument="guitar" />
                  </div>
                ))}
              </div>
            ) : (
              <div>"Loading"</div>
            )
          }
        </div>
      </Card>
    </div>
  );
}
