import React, { Component } from 'react';
import myImage from './../../../../resources/me.jpg'

class HomePage extends Component {
  render() {
    return (
      <div>
        <img id="home-img" src={myImage} alt={"myImage"}/>
      </div>
    )
  }
}

export default HomePage;
