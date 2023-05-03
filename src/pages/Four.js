// fourthFunction
//This is only Javascript, React Component is below
// function Four(array1, array2) {
//     const arr = [];
  
//     //Array.filter string value
//     const filteredArr1 = array1.filter(x => typeof x === 'string');
//     const filteredArr2 = array2.filter(x => typeof x === 'string');
//  //ForEach Loop checking values in the filtered array 
//     filteredArr1.forEach(str => {
//       if (!filteredArr2.includes(str)) {
//         arr.push(str);
//       }
//     });
//     filteredArr2.forEach(str => {
//       if (!filteredArr1.includes(str)) {
//         arr.push(str);
//       }
//     });
  
//     return arr;
//   }
  
//  //test array
//   const array1 = ['Wow', 2, 'Hello', undefined, 0, 'Jack'];
//   const array2 = ['one', 3, 'Ann', 'Michael', 1000, null, ];
  

//   //function call 
//   const arr = Four(array1, array2);
//   console.log(arr);


import React, { useState } from "react";

function Four() {
  const [filteredarr1, setArray1] = useState([]);
  const [filteredarr2, setArray2] = useState([]);
  const [result, setResult] = useState([]);

//test arrays
  const handleTestButtonClick = () => {
    const testArray1 = ["apple", null, "cherry"];
    const testArray2 = ["orange", 1, undefined];

    setArray1(testArray1);
    setArray2(testArray2);
  };


  // This function is called when the button is clicked
  const handleButtonClick = () => {
    const UniStrings = [];
//Looping through every string in filteredarr1
    filteredarr1.forEach((string) => {
            // If the string is not in filteredarr2 or the UniStrings array, add it to the UniStrings array
      if (isNaN(string) && !filteredarr2.includes(string) && !UniStrings.includes(string)) {
        UniStrings.push(string);
      }

    });
//same but with filteredarr2
    filteredarr2.forEach((string) => {
      //Same here
      if (isNaN(string) && !filteredarr1.includes(string) && !UniStrings.includes(string)) {
        UniStrings.push(string);
      }
    });
//Result state
    setResult(UniStrings);
  };

  return (
    <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "70vh",
    }}>
   <div
    className='br4' style={{
      border: "1px solid white",
      padding: "10px",
      marginTop: "30px",
      marginLeft: "20%",
      marginRight: "20%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "auto",
    }}>
      <div>
        <h1 className="code">DNArrays</h1>
        <p className="code">it combine two arrays into one, just like DNA</p>
        <label className="white code">Array 1:</label>
        <input
          type="text"
          value={filteredarr1}
          onChange={(e) => setArray1(e.target.value.split(","))}
        />
      </div>
      <div>
        <label className="white code">Array 2:</label>
        <input
          type="text"
          value={filteredarr2}
          onChange={(e) => setArray2(e.target.value.split(","))}
        />
      </div>
      <button className="ma btn btn-primary code" onClick={handleButtonClick}>Submit</button>
      <button className="ma btn btn-primary code ma2" onClick={handleTestButtonClick}>Test</button>
      <div>
        <label className="white code">Result:</label>
        <p>{result.join(", ")}</p>
      </div>
    </div>
    </div>
  );
}

export default Four;
