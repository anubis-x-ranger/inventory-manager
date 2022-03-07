import React from "react";
function NoteBooks() {
  const [counter, setCounter] = React.useState(44);
  const handleIncrement = (value) => {
    setCounter(counter + value);
  };
  return (
    <>
      <div>
        <span>NoteBooks:</span>
        <button className="addNoteBook" onClick={() => handleIncrement(1)}>
          +
        </button>
        <button className="remNotebook" onclick={() => handleIncrement(-1)}>
          -
        </button>
        <span className="totalNotebooks">{counter}</span>
      </div>
    </>
  );
}

export default NoteBooks;
