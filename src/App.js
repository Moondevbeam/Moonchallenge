import React, {useState} from 'react';
import './App.css';
import AnagramChecker from './pages/AnagramChecker';
import ArrayOrder from './pages/ArrayOrder';
import Name from './pages/Name';
import Home from './pages/Home';
import Four from './pages/fourthFunction';
function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleButtonClick = (page) => {
    setCurrentPage(page);
  };

  return (
<div>
      <nav>
        <button onClick={() => handleButtonClick('/')}>Home</button>
        <button onClick={() => handleButtonClick('one')}>First Question</button>
        <button onClick={() => handleButtonClick('two')}>Second Question</button>
        <button onClick={() => handleButtonClick('three')}>Third Question</button>
        <button onClick={() => handleButtonClick('four')}>Fourth Question</button>
        <button onClick={() => handleButtonClick('five')}>Fifth Question</button>
      </nav>
      <div className='Pages'>
        {currentPage === '/' && <Home/> }
        {currentPage === 'one' && <ArrayOrder/>}
        {currentPage === 'two' && <AnagramChecker/>}
        {currentPage === 'three' && <Name/>}
        {currentPage === 'four' && <Four/>}
        {currentPage === 'five' && <h1>Five</h1>}
      </div>
</div>
  );
}

export default App;
