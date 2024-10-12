export default function Button({ size, text, onClick }) {
  const buttonClass = size === "large" ? "button" : "small-button";

  return (
    <button onClick={onClick} className={buttonClass}>
      {text}
    </button>
  );
}
