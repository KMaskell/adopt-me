import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Puzzle" animal="Dog" breed="Springer-Lab cross" />
      <Pet name="Sally" animal="Dog" breed="NZ sheepdog" />
      <Pet name="Ruby" animal="Dog" breed="Whippet-Collie cross" />
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
