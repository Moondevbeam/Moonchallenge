import React, { useState } from 'react';

function Three(arr) {
  const pairs = [];
  const availableIndices = [...Array(arr.length).keys()];

  while (availableIndices.length > 1) {
    const index1 = getRandomIndex(availableIndices.length);
    const element1 = arr[availableIndices[index1]];
    availableIndices.splice(index1, 1);

    const index2 = getRandomIndex(availableIndices.length);
    const element2 = arr[availableIndices[index2]];
    availableIndices.splice(index2, 1);

    pairs.push([element1, element2]);
  }

  if (availableIndices.length === 1) {
    pairs.push([arr[availableIndices[0]]]);
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

  // Function called when the Test button is clicked
  const handleTest = () => {
    setNames(['Foo', 'Hello', 'Moonbeam', 'Apples', 'Eve']);
    setPairs(Three(['Foo', 'Hello', 'Moonbeam', 'Apples', 'Eve']));
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
      <input placeholder='foo, hello, moonbeam, apples, ecc ' type="text" onChange={handleChange} />
    </label>
  </form>
        {pairs.length > 0 && (
          <ul>
            {pairs.map((pair, index) => (
              <li className="white code" key={index}>
                {pair.join(' and ')}
              </li>
            ))}
          </ul>
        )}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
              <button className="ma1 btn btn-primary code" onClick={handleSubmit}>Test Your Values</button>
              <button style={{ marginLeft: 10 }} className="ma1 btn btn-primary code" onClick={handleTest}>Test Default Values</button>
        </div>
      </div>
    </div>
  );
}

export default Name;
