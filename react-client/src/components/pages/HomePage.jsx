import React, { Component } from 'react';
import myImage from './../../../../resources/me.png'
import javaImage from './../../../../resources/java.png'
import pythonImage from './../../../../resources/python.png'
import swiftImage from './../../../../resources/swift.png'
import htmlImage from './../../../../resources/html.png'
import reactImage from './../../../../resources/react.png'
import sqlImage from './../../../../resources/sql.png'

class HomePage extends Component {
  render() {
    return (
      <div>
        <img id="home-img" src={myImage} alt={"myImage"}/>
        <div id="main-text">
          <h4>The University of Texas at Austin -  Class of 2017</h4>
          <h5>Feel free to check out my resumé or connect with me on LinkedIn.</h5>

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
