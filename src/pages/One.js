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
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "30vh",
    }}>
   <div
    className='br4' style={{
      border: "1px solid white",
      padding: "10px",
      marginTop: "50px",
      marginLeft: "200px",
      marginRight: "200px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "30%",
    }}>
      <h1 className="white code">Array Order</h1>
      <p className="white code">This will alphabetical order one array</p>
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
      <button class="btn btn-primary code" onClick={handleSort}>Submit</button>
      {string.map((item, index) => (
        <div key={index} style={{ margin: "5px" }}>
          {item}
        </div>
      ))}
    </div>   
    </div>
  )

      }
export default One;
