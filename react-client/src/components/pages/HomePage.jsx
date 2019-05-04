import React, { Component } from 'react';
import myImage from './../../../../resources/me.jpg'
import javaImage from './../../../../resources/java.png'
import pythonImage from './../../../../resources/python.png'
import swiftImage from './../../../../resources/swift.png'
import htmlImage from './../../../../resources/html.png'
// import cssImage from './../../../../resources/css.png'
import reactImage from './../../../../resources/react.png'
import sqlImage from './../../../../resources/sql.png'

class HomePage extends Component {
  render() {
    return (
      <div>
        <div id="title">
          <h1>Matthew Trahan</h1>
        </div>
        <img id="home-img" src={myImage} alt={"myImage"}/>
        <div id="main-text">
          

        </div>
        <div id="technologies">
          <h3>
            Technologies
          </h3>
          <div class="tech-images">
            <img id="tech-img" src={javaImage} alt={"java"}/>
            <img id="tech-img" src={pythonImage} alt={"python"}/>
            <img id="tech-img" src={swiftImage} alt={"swift"}/>
            <img id="tech-img" src={htmlImage} alt={"html"}/>
            {/* <img id="tech-img" src={cssImage} alt={"css"}/> */}
            <img id="tech-img" src={reactImage} alt={"react"}/>
            <img id="tech-img" src={sqlImage} alt={"sql"}/>
          </div>
        </div>
      </div>
      
    )
  }
}

export default HomePage;
