import "./Home.css";

import { ButtonCard } from "./Card";

export default function Home() {
  return (
    <>
      <div className="title">title</div>
      <div className="subtitle">meow meow meowmeow</div>
      <div className="main-content">
        <div className="cards-section">
          <div className="left-card">
            <ButtonCard
              size="large"
              colorTitle="AI"
              title="Song Finder"
              link="song-finder"
            >
              <div>
                Lorem ipsum dolor sit amet. Eos provident quidem ut velit cumque
                et ullam soluta. Nam consequuntur voluptas aut aperiam{" "}
              </div>
              <ul>
                <li>Lorem ipsum dolor</li>
                <li>Lorem ipsum dolor</li>
                <li>Lorem ipsum dolor</li>
                <li>Lorem ipsum dolor</li>
              </ul>
            </ButtonCard>
          </div>
          <div className="right-card">
            <ButtonCard
              size="large"
              colorTitle="AI"
              title="Chord Finder"
              link="chord-generator"
            >
              <div>
                Lorem ipsum dolor sit amet. Eos provident quidem ut velit cumque
                et ullam soluta. Nam consequuntur voluptas aut aperiam{" "}
              </div>
              <ul>
                <li>Lorem ipsum dolor</li>
                <li>Lorem ipsum dolor</li>
                <li>Lorem ipsum dolor</li>
                <li>Lorem ipsum dolor</li>
              </ul>
            </ButtonCard>
          </div>
        </div>
      </div>
    </>
  );
}
