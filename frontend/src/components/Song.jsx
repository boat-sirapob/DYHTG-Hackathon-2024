import "./Song.css";

import Button from "./Button";
import Card from "./Card";
import Form from "./Form/Form";
import SongItem from "./SongItem";
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import axios from "axios";

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
    .post("http://localhost:3000/index/submit-form", {
      genre: data.genre,
      difficulty: JSON.stringify(data.difficulty),
    })
    .then((response) => {
      setSongs(response.data.data.map((song) => {
        return {
          title: song.title,
          subtitle: song.artist,
          difficulty: song.difficulty,
          thumbnail: song.data.header_image_thumbnail_url,
        };
      })
    )})
    .catch((error) => {
      console.log(error);
    });
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
            {songs && songs.map((song) => (
              <SongItem {...song} />
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
