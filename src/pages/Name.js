
//Third Function
// function Three(arr) {
//     const pairs = [];
//     const usedIndices = new Set();

//     /**Given one array , returns an array of randomized pairs of the array elements.
//      * Each element only appear in pair, in case the lenght of the array is odd the unpaired element will make a half pair
//      * e.g. [[Jack, Daisy], [Tom, Sarah], [Ann]]
// */

// /**This creates randomized pair using the inputs given below in programm, it will loop until every element will pair each other.*/
//     while (usedIndices.size < arr.length) {
//       const index1 = getRandomIndex(arr.length);
//       if (usedIndices.has(index1)) continue;
//       usedIndices.add(index1);
      
//       const index2 = getRandomIndex(arr.length);
//       if (usedIndices.has(index2)) continue;
//       usedIndices.add(index2);
      
//       pairs.push([arr[index1], arr[index2]]);
//     }
  
//     if (arr.length % 2 !== 0) {
//       pairs.push([arr[getRandomIndex(arr.length)]]);
//     }
  
//     return pairs;
//   }
  
//   function getRandomIndex(max) {
//     return Math.floor(Math.random() * max);
//   }

// //The prompt mentioned before
//   let names = [];
//   let input = prompt("Enter a name (To exit, Leave Empty):");
  
//   while (input !== null && input !== "") {
//     names.push(input);
//     input = prompt("Enter a name (To exit, Leave Empty):");
//   }
//   //function call
//   const pairs = Three(names);
//   console.log(pairs);


import React, { useState } from 'react';

function Three(arr) {
  const pairs = [];
  const usedIndices = new Set();

  while (usedIndices.size < arr.length) {
    const index1 = getRandomIndex(arr.length);
    if (usedIndices.has(index1)) continue;
    usedIndices.add(index1);

    const index2 = getRandomIndex(arr.length);
    if (usedIndices.has(index2)) continue;
    usedIndices.add(index2);

    pairs.push([arr[index1], arr[index2]]);
  }

  if (arr.length % 2 !== 0) {
    pairs.push([arr[getRandomIndex(arr.length)]]);
  }

  return pairs;
}

function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}


// The NamePairing component renders a form with an input field for entering names.
// When the form is submitted, the names are passed to the Three function to generate
// pairs, which are then displayed on the page.
function Name() {
  const [names, setNames] = useState([]);
  const [pairs, setPairs] = useState([]);



  // Function called when the form is submitted
  const handleSubmit = (event) => {
    event.preventDefault();
    setPairs(Three(names));
  };



  // Function called when the input field value changes
  const handleChange = (event) => {
    setNames(event.target.value.split(',').map(name => name.trim()));
  };


 // Render the form and the generated pairs
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
      <form onSubmit={handleSubmit}>
        <label className='white'>
          Enter names separated by commas:
          <input type="text" onChange={handleChange} />
        </label>
        <button style={{marginLeft:10}} type="submit" class="btn btn-primary">Pair Names</button>
      </form>
      {pairs.length > 0 &&
        <ul>
          {pairs.map((pair, index) => (
            <li key={index}>
              {pair.join(' and ')}
            </li>
          ))}
        </ul>
      }
    </div>
  );
}

export default Name;

