import "./Home.css";

import { ButtonCard } from "./Card";
import ailogo1 from "../ai1.png";
import ailogo2 from "../ai1.png";

export default function Home() {
  return (
    <>
      <div className="title">AI Practice Tools</div>
      <div className="subtitle">
        Transform Your Practice, Elevate Your Sound – AI-Powered Music Mastery!
      </div>
      <div className="main-content">
        <div className="cards-section">
          <div className="left-card">
            <ButtonCard
              size="large"
              colorTitle="AI"
              icon={ailogo1}
              title="Song Matcher"
              link="song-finder"
            >
              <div>
                Enhance your music practice with an AI that tailors song
                recommendations to your genre, skill level, and mood. Stay
                motivated with fresh, personalized suggestions for any
                instrument.
              </div>
              <h3>Features:</h3>
              <ul>
                <li>
                  Tailored song suggestions based on genre, skill level, and
                  more!
                </li>
                <li>Custom suggestions for any instrument</li>
                <li>Adaptive to your musical tastes and practice goals</li>
                <li>Keeps your sessions fresh and motivating</li>
              </ul>
            </ButtonCard>
          </div>
          <div className="right-card">
            <ButtonCard
              size="large"
              colorTitle="AI"
              icon={ailogo2}
              title="Chord Matcher"
              link="chord-generator"
            >
              <div>
                This AI tool generates personalized chord progressions based on
                your musical preferences, skill level, mood, and instrument. It
                adapts to your needs, helping you practice more effectively and
                creatively.
              </div>
              <h3>Features:</h3>
              <ul>
                <li>
                  Custom chord progressions for different genres and moods
                </li>
                <li>Difficulty levels tailored to your skill set</li>
                <li>Era-specific progressions for varied musical styles</li>
                <li>Adaptable to multiple instruments and voicings</li>
              </ul>
            </ButtonCard>
          </div>
        </div>
      </div>
    </>
  );
}
