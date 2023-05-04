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

  // Function called when the Enter key is pressed in the input field
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setPairs(Three(names));
    }
  };

  // Function called when the Test button is clicked
  const handleTest = () => {
    setNames(['Alice', 'Bob', 'Charlie', 'Dave', 'Eve']);
    setPairs(Three(['Alice', 'Bob', 'Charlie', 'Dave', 'Eve']));
  };

  // Render the form and the generated pairs
  return (
    <div
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
        <h1 className="code">Name Pairs</h1>
        <p className="code">React component that will pair randomically two names in an array.</p>
        <form onSubmit={handleSubmit}>
          <label className="white code">
            Enter names separated by commas and then press Enter:
            <input placeholder='foo, hello, moonbeam, apples, ecc ' type="text" onChange={handleChange} onKeyDown={handleKeyDown} />
          </label>
        </form>
        <button
          style={{ marginLeft: 10 }}
          className="ma1 btn btn-primary code"
          onClick={handleTest}
        >
          Test
        </button>
        {pairs.length > 0 && (
          <ul>
            {pairs.map((pair, index) => (
              <li className="white code" key={index}>
                {pair.join(' and ')}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Name;
