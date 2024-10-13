import "./SongDetails.css";

import Card from "./Card";
import ChordSheetJS from "chordsheetjs";

// todo: props
export default function SongDetails() {
  const song = {
    title: "Test Song",
    artist: "Test Artist",
    duration: "5:23",
    key: "Em",
    difficulty: "Easy",
    chord:
      "CLICK TRANSPOSE -4 FOR EASIER OPEN CHORDS WITH CAPO ON 4TH FRET\r\nVIDEO LESSON - https://www.youtube.com/watch?v=Amu8XHVh4GM\r\nN.C. means no chord played, * means chord strummed once then silenced\r\n\r\n[Intro]\r\nC#m F#m A B\r\nC#m F#m A B\r\n\r\n[Verse 1]\r\n    C#m                 F#m\r\nThe club isn't the best place to find a lover\r\n       A              B\r\nSo the bar is where I go (mm-mm-mm-mm)\r\nC#m                      F#m\r\nMe and my friends at the table doing shots\r\n         A                B\r\nDrinking fast and then we talk slow (mm-mm-mm-mm)\r\n     C#m                       F#m\r\nCome over and start up a conversation with just me\r\n    A                       B\r\nAnd trust me I'll give it a chance now\r\n        C#m                    F#m\r\nTake my hand, stop, put Van the man on the jukebox\r\n    A                B\r\nAnd then we start to dance, and now I'm singing like\r\n\r\n[Pre-Chorus]\r\nC#m              F#m\r\nGirl, you know I want your love\r\nA                      B                 C#m\r\nYour love was handmade for somebody like me\r\n             F#m\r\nCome on now, follow my lead\r\nA               B\r\nI may be crazy, don't mind me, say\r\nC#m            F#m\r\nBoy, let's not talk too much\r\nA                    B                C#m\r\nGrab on my waist and put that body on me\r\n             F#m\r\nCome on now, follow my lead\r\n     A*                     N.C.\r\nCome-come on now, follow my lead, mm-mm-mm\r\n\r\n[Chorus]\r\nC#m      F#m                    A\r\n  I'm in love with the shape of you\r\n            B                  C#m\r\nWe push and pull like a magnet do\r\n            F#m              A\r\nAlthough my heart is falling too\r\n       B                 C#m\r\nI'm in love with your body\r\n         F#m                  A\r\nAnd last night you were in my room\r\n           B                    C#m\r\nAnd now my bedsheets smell like you\r\n                 F#m                  A\r\nEvery day discovering something brand new\r\n             B                 C#m\r\nWell, I'm in love with your body\r\n\r\n          F#m       A           B               C#m\r\noh I oh I oh I oh I    I'm in love with your body\r\n          F#m       A           B               C#m\r\noh I oh I oh I oh I    I'm in love with your body\r\n          F#m       A           B               C#m\r\noh I oh I oh I oh I    I'm in love with your body\r\n                 F#m                  A\r\nEvery day discovering something brand new\r\n       B\r\nI'm in love with the shape of you\r\n\r\n[Verse 2]\r\nC#m                    F#m\r\nOne week in we let the story begin\r\n            A                B\r\nWe're going out on our first date\r\n        C#m                   F#m\r\nYou and me are thrifty, so go all you can eat\r\n             A                   B\r\nFill up your bag and I fill up a plate\r\n            C#m                       F#m\r\nWe talk for hours and hours about the sweet and the sour\r\n             A                B\r\nAnd how your family is doin' okay\r\n              C#m             F#m\r\nLeave and get in a taxi, then kiss in the backseat\r\n         A                     B\r\nTell the driver make the radio play, and I'm singing like\r\n\r\n[Pre-Chorus]\r\nC#m              F#m\r\nGirl, you know I want your love\r\nA                      B                 C#m\r\nYour love was handmade for somebody like me\r\n             F#m\r\nCome on now, follow my lead\r\nA               B\r\nI may be crazy, don't mind me, say\r\nC#m              F#m\r\nBoy, let's not talk too much\r\nA                    B                C#m\r\nGrab on my waist and put that body on me\r\n             F#m\r\nCome on now, follow my lead\r\n     A*                     N.C.\r\nCome-come on now, follow my lead, mm-mm-mm\r\n\r\n[Chorus]\r\nC#m      F#m                    A\r\n  I'm in love with the shape of you\r\n            B                  C#m\r\nWe push and pull like a magnet do\r\n            F#m              A\r\nAlthough my heart is falling too\r\n       B                 C#m\r\nI'm in love with your body\r\n         F#m                  A\r\nAnd last night you were in my room\r\n           B                    C#m\r\nAnd now my bedsheets smell like you\r\n                 F#m                  A\r\nEvery day discovering something brand new\r\n             B                 C#m\r\nWell, I'm in love with your body\r\n\r\n          F#m       A           B               C#m\r\noh I oh I oh I oh I    I'm in love with your body\r\n          F#m       A           B               C#m\r\noh I oh I oh I oh I    I'm in love with your body\r\n          F#m       A           B               C#m\r\noh I oh I oh I oh I    I'm in love with your body\r\n\r\n                 F#m                  A\r\nEvery day discovering something brand new\r\n       B\r\nI'm in love with the shape of you\r\n\r\n[Bridge]\r\nN.C.\r\n  Come on, be my baby, come on\r\nN.C.\r\n  Come on, be my baby, come on\r\nN.C.\r\n  Come on, be my baby, come on\r\nN.C.\r\n  Come on, be my baby, come on\r\nC#m              F#m \r\n  Come on, be my baby, come on\r\nA                B\r\n  Come on, be my baby, come on\r\nC#m              F#m \r\n  Come on, be my baby, come on\r\nN.C.\r\n  Come on, be my baby, come on\r\n\r\n[Chorus]\r\nC#m      F#m                    A\r\n  I'm in love with the shape of you\r\n            B                  C#m\r\nWe push and pull like a magnet do\r\n            F#m              A\r\nAlthough my heart is falling too\r\n       B                 C#m\r\nI'm in love with your body\r\n         F#m                  A\r\nAnd last night you were in my room\r\n           B                    C#m\r\nAnd now my bedsheets smell like you\r\n                 F#m                  A\r\nEvery day discovering something brand new\r\n             B                 C#m\r\nWell, I'm in love with your body\r\n\r\n[Bridge 2]\r\n                 F#m \r\n  (Come on, be my baby, come on) \r\nA                B\r\n  (Come on, be my baby, come on) I'm in love with your body\r\nC#m              F#m \r\n  (Come on, be my baby, come on)\r\nA                B\r\n  (Come on, be my baby, come on) I'm in love with your body\r\nC#m              F#m \r\n  (Come on, be my baby, come on)\r\nA                B\r\n  (Come on, be my baby, come on) I'm in love with your body\r\n\r\nC#m               F#m                  A\r\n Every day discovering something brand new\r\n       B*            N.C.\r\nI'm in love with the shape of you",
  };

  const parser = new ChordSheetJS.UltimateGuitarParser();
  const parsedSong = parser.parse(song.chord);

  const formatter = new ChordSheetJS.TextFormatter();
  const disp = formatter.format(parsedSong);

  // const onClick = () => {
  //   console.log(disp);
  // };

  return (
    <div className="song-details-container">
      {/* <div className="song-details-title"></div> */}
      {/* <button onClick={onClick}>test</button> */}
      <div className="song-details-section">
        <div className="song-details-embed">
          <iframe
            src="https://www.youtube.com/embed/1w7OgIMMRc4?si=8kVSXyIyYI9aEE4d"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <Card size="small" title="Song Details">
          <div className="song-details-contents">
            <div className="song-details-info">
              {/* cover image? */}
              <ul>
                <li>
                  <span className="bold">Title: </span>
                  {song.title}
                </li>
                <li>
                  <span className="bold">Artist: </span>
                  {song.artist}
                </li>
                <li>
                  <span className="bold">Duration: </span>
                  {song.duration}
                </li>
                <li>
                  <span className="bold">Key: </span>
                  {song.key}
                </li>
                <li>
                  <span className="bold">Difficulty: </span>
                  {song.difficulty}
                </li>
              </ul>
            </div>
            {/* <div className="song-details-embed">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/1w7OgIMMRc4?si=8kVSXyIyYI9aEE4d"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div> */}
          </div>
        </Card>
      </div>
      <Card size="small" title="Lyrics">
        <div className="song-details-lyrics">{disp}</div>
      </Card>
    </div>
  );
}
