import React, { useState } from "react";

function One() {
  // Define state variables for the array of strings and the input text
  const [string, setString] = useState([]);
// Handler function for adding a new string to the array and sorting it
const handleAddString = (inputText) => {
  if (inputText.trim() !== "") {
    // Check if element is duplicated
    const isDuplicate = string.some(item => item === inputText.trim());

    // If element is NOT duplicated add in the array
    if (!isDuplicate) {
      setString([...string, inputText.trim()].sort());
    }
  }
};

//Handler function that receives the key command enter and run the function
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddString(e.target.value);
      e.target.value = "";
    }
  };

  // Handler function for the button click
  const handleClick = () => {
    const inputElement = document.getElementById("input-text");
    handleAddString(inputElement.value);
    inputElement.value = "";
  };

  // Handler function for adding predefined values
  const handleAddPredefinedValues = () => {
    const predefinedValues = [
      "apple", "banana", "orange", "orange", "banana", "hello", "Moonbeam",
    ];
    const newStringArray = removeDuplicates([...string, ...predefinedValues]);
    newStringArray.sort((a, b) => a.localeCompare(b)); //localCompare compare strings and will alphabetical order them
    setString(newStringArray);
  };
// this will remove duplicates for the predefined values
  const removeDuplicates = (arr) => {
    return arr.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
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
        <input
          id="input-text" //Input element
          type="text"
          onKeyDown={handleKeyDown}
          placeholder="apple, banana, orange, orange, banana, hello, Moonbeam"
        />
        <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
          <button style={{ marginRight: "40px" }} className="btn btn-primary small" onClick={handleClick}>Test Your Values</button>
        <button className="btn btn-primary" onClick={handleAddPredefinedValues}>Test Default Values</button>
        </div>
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
