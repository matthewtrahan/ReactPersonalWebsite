import React, { Component } from 'react';

// get our fontawesome imports
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div>
          <a id="bootstrap-override" href="https://github.com/matthewtrahan"><FontAwesomeIcon icon={faGithub} size="3x"></FontAwesomeIcon></a>
          <a id="bootstrap-override" href="https://www.linkedin.com/in/matthew-trahan-677147106/"><FontAwesomeIcon icon={faLinkedin} size="3x"></FontAwesomeIcon></a>
        </div>
      </footer>
    )
  }
}

export default Footer;
