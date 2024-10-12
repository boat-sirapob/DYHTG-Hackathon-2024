import "./Form.css";

import { useNavigate } from "react-router-dom";

export default function Form({ title, type }) {
  return <FormLayout title={title} type={type}></FormLayout>;
}

function FormLayout({ title, type }) {
  if (type === "difficulty") {
    return <FormDifficulty title={title}></FormDifficulty>;
  } else if (type === "large") {
    return <FormInputLarge title={title}></FormInputLarge>;
  } else {
    return <FormInputSmall title={title}></FormInputSmall>;
  }
}

function FormDifficulty({ title }) {
  return (
    <div className="form-box">
      <div className="form-text">{title}</div>
      <div className="difficulties"></div>
      <input className="input-box" type="checkbox" id="easy" name="easy" />
      <label for="easy" className="input-box">
        test
      </label>
      <input className="input-box" type="checkbox" id="medium"></input>
    </div>
  );
}

function FormInputSmall({ title }) {
  return (
    <div className="form-box">
      <div className="form-text">{title}</div>
      <input className="input-box"></input>
    </div>
  );
}

function FormInputLarge({ title }) {
  return (
    <div className="form-box">
      <div className="form-text">{title}</div>
      <textarea className="input-box-large"></textarea>
    </div>
  );
}
