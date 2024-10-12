export default function Card({ icon, colorTitle, title, children }) {
  return (
    <div style={CardStyle}>
      <div style={CardHeaderStyle}>
        <div className="title">
          <span style={GradientStyle}>{colorTitle} </span>
          {title}
        </div>
      </div>
      <div style={CardContentStyle}>{children}</div>
      <div></div>
    </div>
  );
}

const CardStyle = {
  width: "600px",
  height: "600px",
  flexShrink: 0,
  borderRadius: "25px",
  background: "#1F262D",
  boxShadow: "0px 0px 10px 10px rgba(0, 0, 0, 0.25)",
};

const CardHeaderStyle = {
  height: "100px",
  background: "#151B21",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const GradientStyle = {
  background:
    "var(--Gradient, linear-gradient(180deg, #EC661A 0%, #5ECDE1 100%))",
  backgroundClip: "text",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
};

const CardContentStyle = {
  padding: "40px",
};
