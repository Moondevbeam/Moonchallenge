import React, { useState, useEffect } from "react";

function Four() {
  // State for the two input arrays and the result
  const [filteredarr1, setArray1] = useState([]);
  const [filteredarr2, setArray2] = useState([]);
  const [result, setResult] = useState([]);

  // Function TestHandler, it works with the test button below 
  const handleTestButtonClick = () => {
    const testArray1 = ["apple", null, "cherry"];
    const testArray2 = ["orange", 1, undefined];

    setArray1(testArray1);
    setArray2(testArray2);
  };

  // useEffect hook that triggers when the values of filteredarr1 or filteredarr2 change
  useEffect(() => {
    const UniStrings = [];

    // Check values in filteredarr1 and add unique ones to UniStrings
    filteredarr1.forEach((string) => {
      if (isNaN(string) && !filteredarr2.includes(string) && !UniStrings.includes(string)) {
        UniStrings.push(string);
      }
    });
    // Same here but with filteredarr2
    filteredarr2.forEach((string) => {
      if (isNaN(string) && !filteredarr1.includes(string) && !UniStrings.includes(string)) {
        UniStrings.push(string);
      }
    });

    // Set the result with the unique values found
    setResult(UniStrings);
  }, [filteredarr1, filteredarr2]);

  //input form and display of results
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <div
        className="br4"
        style={{
          border: "1px solid white",
          padding: "10px",
          marginTop: "30px",
          marginLeft: "20%",
          marginRight: "20%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "auto",
        }}
      >
        <h1 className="code">DNArrays</h1>
        <p className="code">React component that will combine the only strings placed in to two arrays into one</p>
        <label className="white code">Array 1:</label>
        <input
          placeholder="hi, 2, moonbeam"
          type="text"
          value={filteredarr1}
          onChange={(e) => setArray1(e.target.value.split(","))}
        />
        <label className="white code">Array 2:</label>
        <input
          placeholder="foo, 1, hello"
          type="text"
          value={filteredarr2}
          onChange={(e) => setArray2(e.target.value.split(","))}
        />
        <label className="white code">Result:</label>
        <p>{result.join(", ")}</p>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
        <button className="ma btn btn-primary code ma2" onClick={handleTestButtonClick}>Test Predefined Values</button>
        </div>
      </div>
    </div>
  );
}

export default Four;

