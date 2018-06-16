'use strict';

import React, {Component, Fragment} from 'react';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';
 
import ReactDOM from 'react-dom';
import './style/main.css';
import './style/timeLine.css';

class MainPage extends Component {
  render() {
    return <Fragment>
      <div>
        <h1 id="mainTitle">Marathon Timeline</h1>
        <p>timeline goes here</p>
      </div>
      <div>
        <h2>Highlights</h2>
        <p>task info goes here</p>
      </div>
    </Fragment>;
  }
}

class App extends Component {
  render(){
    return <BrowserRouter>
      <Fragment>
        <Route exact path="/" component={MainPage}/>
      </Fragment>
    </BrowserRouter>;
  }
}

let root = document.getElementById('root');
ReactDOM.render(<App/>, root);