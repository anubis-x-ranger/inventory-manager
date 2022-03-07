import React from "react";
function Books() {
  const [counter, setCounter] = React.useState(13);
  const handleIncrement = (value) => {
    setCounter(counter + value);
  };
  return (
    <>
      <span>Books:</span>
      <button className="addBook" onClick={() => handleIncrement(1)}>
        +
      </button>
      <button className="remBook" onclick={() => handleIncrement(-1)}>
        -
      </button>
      <span className="totalBooks">{counter}</span>
    </>
  );
}

export default Books;
