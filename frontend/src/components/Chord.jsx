import "./Chord.css";

import { useState } from "react";
import Button from "./Button";
import Card from "./Card";
import ChordItem from "./ChordItem";
import Form from "./Form/Form";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Chord() {
  const { handleSubmit, control } = useForm();
  const [chords, setChords] = useState([]);

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/index/submit-chords-form", data).then((response) => {
      setChords(response.data.data.chords);
    }
    ).catch((error) => {
      console.log(error); 
    });
  };

  return (
    <div className="chord-container">
      <div className="chord-title">Chord Progression Generator</div>
      <div className="chord-contents">
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
            <Form
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
            />
            <Button text="Submit" />
          </form>
        </Card>
        <Card size="small" title="Chords" className="s-right-card">
          {chords ? chords.map((chord, index) => (
            <ChordItem key={index} chord={chord.map((a) => {return a.chord}).join("-")} />
          )) : "Please submit the form"}
        </Card>
      </div>
    </div>
  );
}
