import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './pages/HomePage.jsx';
import NavBar from './headerComponent/NavBar.jsx';
import Footer from './footerComponent/Footer.jsx';
import Resume from './pages/Resume.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Router>
            <div>
              <Route name="home" exact path="/" component={HomePage} />
              <Route name="resume" path="/resume" component={Resume} />
            </div>
          </Router>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
