
import React, {useState} from 'react';
import One from '../pages/One';
import Home from '../pages/Home';
import Four from '../pages/Four';
import Two from '../pages/Two';
import Five from '../pages/Five';
import Name from '../pages/Three';

function Navigation() {
    const [currentPage, setCurrentPage] = useState('home');
  
    const handleButtonClick = (page) => {
      setCurrentPage(page);
    };
  
    return (
  <div>
        <div>
            <button style={{marginTop:10, marginLeft:10}} type="button" class="btn btn-primary" onClick={() => handleButtonClick('home')}><i class="bi bi-house"></i></button>
            <button style={{marginTop:10, marginLeft:10}} type="button" class="btn btn-danger" onClick={() => handleButtonClick('one')}><i class="bi bi-1-square-fill"></i></button>
            <button style={{marginTop:10, marginLeft:10}} type="button" class="btn btn-danger"  onClick={() => handleButtonClick('two')}><i class="bi bi-2-square-fill"></i></button>
            <button style={{marginTop:10, marginLeft:10}} type="button" class="btn btn-danger" onClick={() => handleButtonClick('three')}><i class="bi bi-3-square-fill"></i></button>
            <button style={{marginTop:10, marginLeft:10}} type="button" class="btn btn-danger"    onClick={() => handleButtonClick('four')}><i class="bi bi-4-square-fill"></i></button>
            <button style={{marginTop:10, marginLeft:10}} type="button" class="btn btn-danger" onClick={() => handleButtonClick('five')}><i class="bi bi-5-square-fill"></i></button>
        </div>
        <div>
          {currentPage === 'home' && <Home/> }
          {currentPage === 'one' && <One/>}
          {currentPage === 'two' && <Two/>}
          {currentPage === 'three' && <Name/>}
          {currentPage === 'four' && <Four/>}
          {currentPage === 'five' && <Five/>}
        </div>
  </div>
    );
  }
  
export default Navigation;