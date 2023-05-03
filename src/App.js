import React, { Component } from 'react'
import Navigation from "./navigation/Navigation"
import ParticlesBg from 'particles-bg'

class App extends Component {
  render () {
    return (
      <>
        <ParticlesBg color="#ffffff" type="cobweb" bg={true} />
        <div><Navigation/></div>

      </>
    )
  }
}

export default App;