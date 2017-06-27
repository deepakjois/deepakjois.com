import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
<div className="row">
    <div className="header col-sm-4 col-sm-offset-4">
      <img className="logo" src={logo} alt="logo"/>

      <h1>Deepak Jois</h1>
    </div>
  </div>

  <div className="row">
    <div className="col-sm-8 col-sm-offset-2">
      <h4>Programmer and <a href="https://en.wikipedia.org/wiki/Free_software">free (libre) software</a> enthusiast from India. Previously used to work at <a href=
      "https://soundcloud.com">Soundcloud</a> and <a href="https://www.amazon.com">Amazon</a>, among other places.</h4>

      <ul className="links">
        <li>
          <h3><i className="fa fa-envelope" aria-hidden="true"></i> <a href="mailto:deepak.jois@gmail.com">Email</a></h3>
        </li>

        <li>
          <h3><i className="fa fa-github" aria-hidden="true"></i> <a href="https://github.com/deepakjois">Github</a></h3>
        </li>

        <li>
          <h3><i className="fa fa-twitter" aria-hidden="true"></i> <a href="http://twitter.com/debugjois">Twitter</a></h3>
        </li>
      </ul>
    </div>
  </div>
          </div>
    );
  }
}

export default App;