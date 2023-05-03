import React from "react";

const Home = () =>{
return(
  <div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "30vh",
  }}>
 <div
  className='br4' style={{
    border: "1px solid white",
    padding: "10px",
    marginTop: "50px",
    marginLeft: "200px",
    marginRight: "200px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "30%",
  }}>
        <h1>Hi! This is a website for demonstration</h1>
        <p>Feel free to test the applications</p>
    </div>
    </div>
)
}

export default Home;