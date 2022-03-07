import React from "react";
function Inkpens() {
  const [counter, setCounter] = React.useState(78);
  const handleIncrement = (value) => {
    setCounter(counter + value);
  };
  return (
    <>
      <div>
        <span>Inkpens:</span>
        <button className="addInkpen" onClick={() => handleIncrement(1)}>
          +
        </button>
        <button className="remInkpen" onclick={() => handleIncrement(-1)}>
          -
        </button>
        <span className="totalInkpen">{counter}</span>
      </div>
    </>
  );
}

export default Inkpens;
