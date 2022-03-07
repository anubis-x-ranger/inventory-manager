import React from "react";
function Pens() {
  const [counter, setCounter] = React.useState(10);
  const handleIncrement = (value) => {
    setCounter(counter + value);
  };
  return (
    <>
      <div>
        <span>Pens:</span>
        <button className="addPen" onClick={() => handleIncrement(1)}>
          +
        </button>
        <button className="remPen" onclick={() => handleIncrement(-1)}>
          -
        </button>
        <span className="totalPens">{counter}</span>
      </div>
    </>
  );
}

export default Pens;
