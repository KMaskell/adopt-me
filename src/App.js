const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h3", {}, breed)
  ]);
};


const App = () => {
  return React.createElement("div", { id: "something-important" }, [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet, { name: "Puzzle", animal: "dog", breed: "Labrador-Springer Spaniel"}),
      React.createElement(Pet, { name: "Sally", animal: "dog", breed: "New Zealand Sheepdog"}),
      React.createElement(Pet, { name: "Ruby", animal: "dog", breed: "Whippet-Collie"})
    ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));