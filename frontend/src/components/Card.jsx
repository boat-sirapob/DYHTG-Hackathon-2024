import "./Card.css";

import Button from "./Button";
import { useNavigate } from "react-router-dom";

export function ButtonCard({ size, align, title, colorTitle, children, link }) {
  const navigate = useNavigate();

  const redirect = () => {
    navigate(link);
  };

  return (
    <CardLayout size={size} align={align} title={title} colorTitle={colorTitle}>
      <div className="card-details">{children}</div>
      <div className="card-footer">
        <Button size="large" text="Try it out" onClick={redirect} />
      </div>
    </CardLayout>
  );
}

function CardLayout({ size, align, title, colorTitle, children }) {
  const titleClass = size === "large" ? "strong" : "medium";

  return (
    <div className="card">
      <div className={`card-header ${size} ${align}`}>
        <div className={titleClass}>
          {colorTitle ? <span className="gradient">{colorTitle} </span> : <></>}
          {title}
        </div>
      </div>
      <div className="card-contents">{children}</div>
    </div>
  );
}

export default function Card({
  size,
  align,
  icon,
  colorTitle,
  title,
  children,
}) {
  return (
    <CardLayout size={size} align={align} title={title} colorTitle={colorTitle}>
      <div className="card-details">{children}</div>
    </CardLayout>
  );
}
