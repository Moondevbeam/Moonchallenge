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

function StringArr() {
  const [filteredarr1, setArray1] = useState([]);
  const [filteredarr2, setArray2] = useState([]);
  const [result, setResult] = useState([]);
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
    <div>
      <div>
        <label>Array 1:</label>
        <input
          type="text"
          value={filteredarr1}
          onChange={(e) => setArray1(e.target.value.split(","))}
        />
      </div>
      <div>
        <label>Array 2:</label>
        <input
          type="text"
          value={filteredarr2}
          onChange={(e) => setArray2(e.target.value.split(","))}
        />
      </div>
      <button onClick={handleButtonClick}>Submit</button>
      <div>
        <label>Result:</label>
        <p>{result.join(", ")}</p>
      </div>
    </div>
  );
}

export default StringArr;
