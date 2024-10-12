import "./App.css";

import Card from "./components/Card";
import Home from "./components/Home";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <Home />
      <Card colorTitle="AI" title="Song Finder">
        <div>
          Lorem ipsum dolor sit amet. Eos provident quidem ut velit cumque et
          ullam soluta. Nam consequuntur voluptas aut aperiam{" "}
        </div>
        <ul>
          <li>Lorem ipsum dolor</li>
          <li>Lorem ipsum dolor</li>
          <li>Lorem ipsum dolor</li>
          <li>Lorem ipsum dolor</li>
        </ul>
      </Card>
    </div>
  );
}

export default App;
