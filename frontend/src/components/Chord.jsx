import "./Chord.css";

import Button from "./Button";
import Card from "./Card";
import ChordItem from "./ChordItem";
import Form from "./Form/Form";
import { useNavigate } from "react-router-dom";

export default function Chord() {
  return (
    <>
      <div className="chord-title">Chord Progression Generator</div>
      <Form title="test" type="small"></Form>
      <Form title="test" type="large"></Form>
      <Form title="test" type="difficulty"></Form>
      <Card size="small" title="Chords" className="s-right-card">
        <ChordItem chord="yguyug" />
      </Card>
    </>
  );
}
