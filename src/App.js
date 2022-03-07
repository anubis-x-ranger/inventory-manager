import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Books from "./book.jsx";
import Pens from "./pens.jsx";
import NoteBooks from "./notebooks.jsx";
import Inkpens from "./inkpen.jsx";

function App() {
  const [counter, setCounter] = React.useState();
  return (
    <div className="Items">
      <Books />
      <Pens />
      <NoteBooks />
      <Inkpens />
    </div>
  );
}

export default App;
