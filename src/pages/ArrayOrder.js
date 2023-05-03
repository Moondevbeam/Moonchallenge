import React, { useState } from "react";

function ArrayOrder() {
  const [string, setString] = useState([]);
  const [inputText, setInputText] = useState("");
  const handleAddString = () => {
    if (inputText.trim() !== "") {
      setString([...string, inputText.trim()]);
      setInputText("");
    }
  };

  const handleSort = () => {
    const sorted = [...string].sort();
    setString(sorted);
  };

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Array Order</h1>
    <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleAddString();
          }
        }}
      />
      <button onClick={handleSort}>Ordina stringhe</button>
      {string.map((item, index) => (
        <div key={index} style={{ margin: "5px" }}>
          {item}
        </div>
      ))}
    </div>
  );
}


export default ArrayOrder;
