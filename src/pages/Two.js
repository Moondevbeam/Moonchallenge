
import React, { useState, useEffect} from 'react';

function Two() {
  //declaration of variables in this case are constants
  const [string1, setString1] = useState('');
  const [string2, setString2] = useState('');
  const [areAnagrams, setAreAnagrams] = useState(false);

  const checkAnagrams = () => {
    if (!string1 || !string2) {
      return false; // If you give an Empty value it will return false
    }
// transform strings in arrays and then rearrange them
    const sortedString1 = string1.split('').sort().join('');
    const sortedString2 = string2.split('').sort().join('');

    return sortedString1 === sortedString2;
  };

  const handleSubmit = () => {
    setAreAnagrams(checkAnagrams());
  };
//check every change of the value
  useEffect(() => {
    handleSubmit();
    // eslint-disable-next-line
  }, [string1, string2]);


  //form with input boxes
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70vh',
      }}
    >
      <div
        className='br4'
        style={{
          border: '1px solid white',
          padding: '10px',
          marginTop: '50px',
          marginLeft: '20%',
          marginRight: '20%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: 'auto',
        }}
      >
        <h1 className='code white'>Anagram Exercise</h1>
        <p>React component that will find out if two words are anagrams or not.</p>
        <form>
          <label className='white code'>
            Name 1:
            <input
              placeholder='tiziano'
              type='text'
              value={string1}
              // "e" stands for event, it rappresent the current input value
              onChange={(e) => {
                setString1(e.target.value);
              }}
            />
          </label>
          <br />
          <label className='white code'>
            Name 2:
            <input
            placeholder='notizia'
              type='text'
              value={string2}
              onChange={(e) => {
                setString2(e.target.value);
              }}
            />
          </label>
          <br />
        </form>
        <div className='pa3 code'>
          {areAnagrams ? (
            <p>
              "{string1}" and "{string2}" are anagrams.
            </p>
          ) : (
            <p>
              "{string1}" and "{string2}" are NOT anagrams.
            </p>
          )}
        </div>
        </div>
      </div>
  );
}

export default Two;
