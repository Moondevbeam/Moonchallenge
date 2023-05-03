import React, { useState } from 'react';

function Two() {
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
    <div
    className='br4' style={{
      border: "1px solid white",
      padding: "10px",
      marginTop: "50px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}>
      <h1>Anagram Checker</h1>
      <form onSubmit={handleSubmit}>
        <label className='white'>
          Word 1:
          <input type="text" value={string1} onChange={(e) => setString1(e.target.value)} />
        </label>
        <br />
        <label className='white'>
          Word 2:
          <input type="text" value={string2} onChange={(e) => setString2(e.target.value)} />
        </label>
        <br />
        <button class="btn btn-primary" type="submit">Submit</button>
      </form>
      <div className='pa3 code'>
      {areAnagrams ? (
        <p>"{string1}" and "{string2}" are anagrams.</p>
      ) : (
        <p>"{string1}" and "{string2}" are NOT anagrams.</p>
      )}
      </div>
    </div>
  );
}

export default Two;

