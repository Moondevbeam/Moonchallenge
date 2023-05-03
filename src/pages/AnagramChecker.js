import React, { useState } from 'react';

function AnagramChecker() {
  const [string1, setString1] = useState('');
  const [string2, setString2] = useState('');
  const [areAnagrams, setAreAnagrams] = useState(false);

  const checkAnagrams = () => {
    const sortedString1 = string1.split('').sort().join('');
    const sortedString2 = string2.split('').sort().join('');

    return sortedString1 === sortedString2;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setAreAnagrams(checkAnagrams());
  }

  return (
    <div style={{
      border: "1px solid black",
      padding: "10px",
      margin: "10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}>
      <h1>Anagram Checker</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Word 1:
          <input type="text" value={string1} onChange={(e) => setString1(e.target.value)} />
        </label>
        <br />
        <label>
          Word 2:
          <input type="text" value={string2} onChange={(e) => setString2(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {areAnagrams ? (
        <p>"{string1}" and "{string2}" are anagrams.</p>
      ) : (
        <p>"{string1}" and "{string2}" are NOT anagrams.</p>
      )}
    </div>
  );
}

export default AnagramChecker;

