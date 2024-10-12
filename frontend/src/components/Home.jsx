import logo from "../logo.png";

export default function Home() {
  return (
    <>
      <div style={NavStyle}>
        <div style={NavContentStyle}>
          <img src={logo} style={LogoStyle}></img>
        </div>
      </div>
      <div style={TitleStyle}>title</div>
      <div style={TextStyle}>meow meow meowmeow</div>
    </>
  );
}

const NavStyle = {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#151B21",
  width: "100%",
  height: "120px",
};

const NavContentStyle = {
  padding: "34px 51px",
  display: "flex",
  alignItems: "center",
  height: "100%",
};

const LogoStyle = {
  width: "453px",
  height: "53px",
  flexShrink: "0",
};

const TitleStyle = {
  display: "flex",
  color: "#EC661A",
  fontSize: "75px",
  fontStyle: "normal",
  fontWeight: "800",
  lineHeight: "normal",
  alignItems: "center",
  justifyContent: "center",
};

const TextStyle = {
  width: "1027px",
  color: "#FFF",
  textAlign: "center",
  fontSize: "22px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
};
