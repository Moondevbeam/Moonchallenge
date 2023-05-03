import React, { useState } from "react";

function One() {
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
    className='br4' style={{
      border: "1px solid white",
      padding: "10px",
      marginTop: "50px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}>
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
      <button class="btn btn-primary" onClick={handleSort}>Submit</button>
      {string.map((item, index) => (
        <div key={index} style={{ margin: "5px" }}>
          {item}
        </div>
      ))}
    </div>
  );
}


export default One;
