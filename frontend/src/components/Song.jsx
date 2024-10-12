import "./Song.css";

import Button from "./Button";
import Card from "./Card";
import Form from "./Form/Form";
import SongItem from "./SongItem";
import { useForm } from "react-hook-form";
import { useRef } from "react";

const Difficulty = {
  Easy: "Easy",
  Medium: "Medium",
  Hard: "Hard",
};

// TODO: fill with results
const songs = [
  {
    title: "I Wish You Love",
    subtitle: "Laufey",
    difficulty: Difficulty.Easy,
    duration: "2:23",
  },
];

export default function Song() {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="song-finder-container">
      <div className="song-finder-title">Song Finder</div>
      <div className="song-finder-contents">
        <Card size="small" title="Filter" className="s-left-card">
          <form className="song-finder-form" onSubmit={handleSubmit(onSubmit)}>
            <Form
              title="What genre(s) of music do you enjoy?"
              placeholder="Pop, Rock, Classical, Jazz, Hip-hop, etc."
              type="small"
              name="genre"
              control={control}
            />
            <Form
              title="How challenging do you want the songs to be?"
              type="difficulty"
              name="difficulty"
              control={control}
            />
            <Button text="Submit" />
          </form>
        </Card>
        <Card size="small" title="Songs" className="s-right-card">
          <div className="song-finder-list">
            {songs.map((song) => (
              <SongItem {...song} />
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
