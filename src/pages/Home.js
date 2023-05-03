import React from "react";

const Home = () =>{
return(
  <div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "70vh",
  }}>
 <div
  className='br4' style={{
    border: "1px solid white",
    padding: "10px",
    marginTop: "50px",
    marginLeft: "20%",
    marginRight: "20%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "auto",
  }}>
        <h1 className="white code">Hi! This is a website for demonstration</h1>
        <p className="white code">Feel free to test the applications</p>
    </div>
    </div>
)
}

export default Home;