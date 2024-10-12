import "./Song.css";

import { useRef, useState } from "react";

import Button from "./Button";
import Card from "./Card";
import Form from "./Form/Form";
import SongItem from "./SongItem";
import axios from "axios";
import { useForm } from "react-hook-form";

const Difficulty = {
  Easy: "Easy",
  Medium: "Medium",
  Hard: "Hard",
};

export default function Song() {
  const { handleSubmit, control } = useForm();
  const [songs, setSongs] = useState([]);

  const onSubmit = (data) => {
    axios
      .post("http://localhost:3001/index/submit-form", {
        genre: data.genre,
        difficulty: JSON.stringify(data.difficulty),
      })
      .then((response) => {
        setSongs(
          response.data.data.map((song) => {
            return {
              title: song.title,
              subtitle: song.artist,
              difficulty: song.difficulty,
              thumbnail: song.data.header_image_thumbnail_url,
            };
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="song-finder-container">
      <div className="song-finder-title">Song Finder</div>
      <div className="song-finder-contents">
        <Card size="small" title="Questions" className="s-left-card">
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
            {/* <Form
              title="What mood do you want your practice sessions to reflect?"
              placeholder="Relaxed, High energy, Focused, Fun, etc."
              type="small"
              name="mood"
              control={control}
            />
            <Form
              title="Which musical era do you find most interesting?"
              placeholder="80s, 90s, Classical, Modern hits, etc."
              type="small"
              name="era"
              control={control}
            />
            <Form
              title="What instrument(s) do you want to play?"
              placeholder="Guitar, Piano, Violin, Drums, etc."
              type="small"
              name="instrument"
              control={control}
            />
            <Form
              title="Additional information"
              placeholder="Add anything else we should know"
              type="large"
              name="additional"
              control={control}
            /> */}
            <Button text="Submit" />
          </form>
        </Card>
        <Card size="small" title="Songs" className="s-right-card">
          <div className="song-finder-list">
            {songs.length > 0 ? (
              songs.map((song) => <SongItem {...song} />)
            ) : (
              <div>
                Let us know your preferences, and we'll suggest songs tailored
                just for you!
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
