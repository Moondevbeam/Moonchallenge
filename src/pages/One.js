import React, { useState } from "react";

function One() {
  // Define state variables for the array of strings and the input text
  const [string, setString] = useState([]);
// Handler function for adding a new string to the array and sorting it
  const handleAddString = (inputText) => {
    if (inputText.trim() !== "") {
      setString([...string, inputText.trim()].sort());         
    }
  };
//Handler function that receives the key command enter and run the function
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddString(e.target.value);
      e.target.value = "";
    }
  };

  return (
    <div
      className="phone"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <div
        className="br4"
        style={{
          border: "1px solid white",
          padding: "10px",
          marginTop: "50px",
          marginLeft: "20%",
          marginRight: "20%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "auto",
        }}
      > 
        <h1 className="white code">Array Order</h1>
        <p className="white code">React component that sorts and removes duplicates from an array of strings.</p>
        <input //Input element
          type="text"
          onKeyDown={handleKeyDown}
          placeholder="Type a string and press enter"
        />
        {string.map((item, index) => ( //Display the array of strings
          <div
            className="white code"
            key={index}
            style={{ margin: "5px" }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default One;
