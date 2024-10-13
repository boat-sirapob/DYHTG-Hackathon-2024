import "./SongDetails.css";

import Card from "./Card";
import ChordImageFetcher from "./ChordImageFetcher";

// todo: props
export default function ChordDetails() {
  const chord = {};

  return (
    <div className="chord-details-container">
      <Card size="small" title="Chord Progression Details">
        <div className="chord-details-contents">
          <div className="chord-details-info">
            {chord ? (
              <>
                <div className="chord-name">A7</div>
                <ChordImageFetcher chord="A7" instrument="guitar" />
                <div className="chord-name">A7</div>
                <ChordImageFetcher chord="A7" instrument="guitar" />
              </>
            ) : (
              <div>"Loading"</div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}
